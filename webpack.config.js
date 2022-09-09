"use strict";

const path = require("path");

const config = {
  target: "node",
  entry: "./extension/dist/extension.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "extension.js",
    libraryTarget: "commonjs2",
    devtoolModuleFilenameTemplate: "../[resource-path]",
  },
  devtool: "source-map",
  externals: {
    vscode: "commonjs vscode", // the vscode-module is created on-the-fly and must be excluded
    prettier: "commonjs prettier",
  },
};
module.exports = config;
