import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import dts from "rollup-plugin-dts";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { babel } from "@rollup/plugin-babel";

import postcss from "rollup-plugin-postcss";

const packageJson = require("./package.json");

export default [
    {
        external: [{ "react": "React", "react-dom": "ReactDOM" }],
        input: "src/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            peerDepsExternal(),
            resolve(),
            babel({ babelHelpers: "bundled" }),
            commonjs(),
            // postcss({extract: true, minimize: { preset: 'default' }}),
            typescript({ tsconfig: "./tsconfig.json", exclude: ["**/stories/**", "node_modules"] }),
            terser(),
        ],
    },
    /*{
        external: ["react", "react-dom"],
        input: "dist/esm/types/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts()],
    },*/
];
