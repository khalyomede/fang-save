# fang-save

Save your files into the desired folder.

## Summary

- [About](#about)
- [Requirements](#requirements)
- [Installation](#installation)
- [Examples](#examples)
- [Changelog](CHANGELOG.md)

## About

I created this plugin to have an official package to save files in a desired folder. As I consider saving files to another location to be a basic task, I wanted people to find an official plugin for that.

Feel free to seek for other packages that save files, to compare in term of features and speed of execution.

## Requirements

Having [`@fang/core`](https://npmjs.com/package/@fang/core) installed on version `0.*`.

## Installation

Using NPM: `npm install --save-dev @fang/save`.
Using Yarn: `yarn add --dev @fang/save`.

## Examples

- [1. Save your files into the desired folder](#1-save-your-files-into-the-desired-folder)

### 1. Save your files into the desired folder

```javascript
// yourfile.js
const { run } = require("@fang/core");
const save = require("@fang/save");

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
```

```bash
$ node yourfile.js
fang: start
8 CPUs core(s)
1 tasks to run
js: start
js: 13.039ms
fang: 110.063ms
```
