const { run } = require("@fang/core");
const save = require("../lib");

const js = {
	name: "js",
	input: "example/index.js",
	tasks: [
		save({
			folder: "example/dist/js",
		}),
	],
};

const main = async () => await run([js]);

main();
