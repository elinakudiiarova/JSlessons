module.exports = {};
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "snippet.js",
    path: path.resolve(__dirname, "dist")
  }
};
