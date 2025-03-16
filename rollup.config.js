import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.ts",
  output: [{ file: "dist/index.esm.js", format: "esm", sourcemap: true }],
  external: ["react", "near-api-js"],
  plugins: [resolve(), commonjs(), typescript()],
};
