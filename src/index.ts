import { IFile } from "@fang/core/lib/interface";
import { mkdir, stat, writeFile } from "fs";
import { promisify } from "util";
import { IOptions } from "./interface";

const asyncMkdir = promisify(mkdir);
const asyncStat = promisify(stat);
const asyncWriteFile = promisify(writeFile);

export default (options: IOptions) => async (
	files: Array<IFile>
): Promise<Array<IFile>> => {
	if (!(options instanceof Object)) {
		throw new TypeError(`"options" must be an object`);
	}

	if (!("folder" in options)) {
		throw new Error(`"folder" must be present`);
	}

	if (typeof options.folder !== "string") {
		throw new TypeError(`"folder" must be a string`);
	}

	try {
		await asyncStat(options.folder);
	} catch (exception) {
		await asyncMkdir(options.folder, { recursive: true });
	}

	const writings: Array<Promise<void>> = [];

	for (const file of files) {
		const endSlash = options.folder.endsWith("/") ? "" : "/";
		const filePath = `${options.folder}${endSlash}${file.path}`;

		writings.push(asyncWriteFile(filePath, file.content));
	}

	await Promise.all(writings);

	return files;
};
