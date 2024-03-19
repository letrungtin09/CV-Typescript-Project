const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    show: "./src/app.ts",
    add: "./src/controllers/addCV.ts",
    update: "./src/controllers/updateCV.ts",
    delete: "./src/controllers/deleteCV.ts",
  },
  devServer: {
    static: [
      {
        directory: path.join(__dirname),
      },
    ],
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};
