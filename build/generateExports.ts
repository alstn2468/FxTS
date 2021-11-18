import { readFile, writeFile } from "fs/promises";
import { searchFiles } from "./util";
import { drop, map, not, pipe, reduce } from "../src/index";

const SOURCE_DIR = "./src";
const OUTPUT_DIR = "./dist";
const CJS_ROOT_DIR = `${OUTPUT_DIR}/cjs`;
const ESM_ROOT_DIR = `${OUTPUT_DIR}/esm`;
const ESM5_ROOT_DIR = `${OUTPUT_DIR}/esm5`;

const conditionalRootIndex = {
  import: `${ESM_ROOT_DIR}/index.js`,
  require: `${CJS_ROOT_DIR}/index.js`,
};

const conditionalRootIndexLazy = {
  import: `${ESM_ROOT_DIR}/Lazy/index.js`,
  require: `${CJS_ROOT_DIR}/Lazy/index.js`,
};

const defaultSubPathExports = {
  "./package.json": "./package.json",
  ".": conditionalRootIndex,
  "./index": conditionalRootIndex,
  "./index.js": conditionalRootIndex,
  "./Lazy": conditionalRootIndexLazy,
  "./Lazy/index": conditionalRootIndexLazy,
  "./Lazy/index.js": conditionalRootIndexLazy,
  "./esm5": `${ESM5_ROOT_DIR}/index.js`,
  "./esm5/index": `${ESM5_ROOT_DIR}/index.js`,
  "./esm5/index.js": `${ESM5_ROOT_DIR}/index.js`,
  "./esm5/Lazy": `${ESM5_ROOT_DIR}/Lazy/index.js`,
  "./esm5/Lazy/index": `${ESM5_ROOT_DIR}/Lazy/index.js`,
  "./esm5/Lazy/index.js": `${ESM5_ROOT_DIR}/Lazy/index.js`,
};

async function generateExports() {
  const fileNames = await Promise.all([
    searchFiles(`${SOURCE_DIR}/*.ts`),
    searchFiles(`${SOURCE_DIR}/_internal/*.ts`),
    searchFiles(`${SOURCE_DIR}/Lazy/*.ts`),
  ]).then((lists) =>
    lists
      .flat()
      .filter((a) => not(a.endsWith("index.ts")))
      .map((fileName) =>
        [...drop(2, fileName.split("/"))].join("/").replace(".ts", ""),
      ),
  );

  const subPathExports = pipe(
    fileNames,
    map((name) => {
      const conditionalSubPaths = {
        import: `${ESM_ROOT_DIR}/${name}.js`,
        require: `${CJS_ROOT_DIR}/${name}.js`,
      };
      return {
        [`./${name}`]: conditionalSubPaths,
        [`./${name}.js`]: conditionalSubPaths,
        [`./esm5/${name}`]: `${ESM5_ROOT_DIR}/${name}.js`,
        [`./esm5/${name}.js`]: `${ESM5_ROOT_DIR}/${name}.js`,
      };
    }),
    (iter) => reduce((acc, field) => Object.assign(acc, field), {}, iter),
  );

  const packageJsonObject = JSON.parse(
    String(await readFile("./package.json")),
  );

  await writeFile(
    "./package.json",
    JSON.stringify(
      Object.assign(packageJsonObject, {
        exports: {
          ...defaultSubPathExports,
          ...subPathExports,
        },
      }),
    ),
  );
}

(async function main() {
  await Promise.all([
    // Add package.json file to cjs directory
    writeFile(`${CJS_ROOT_DIR}/package.json`, '{ "type": "commonjs" }'),
    // Generate and add 'exports' field to root package.json
    generateExports(),
  ]);
})();
