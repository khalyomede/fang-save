import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import tslint from "rollup-plugin-tslint";

export default {
	input: "src/index.ts",
	plugins: [tslint(), nodeResolve(), commonjs(), typescript()],
	external: ["fs", "util"],
	output: {
		file: "lib/index.js",
		format: "cjs",
	},
};
