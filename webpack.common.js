var path = require("path");

module.exports = {
  entry: {
    app: "./src/app.js"
  },

  output: {
      path: path.join(__dirname, "docs"),
      filename: "[name].bundle.js"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ["@babel/preset-env"]
            }
          }
        ]
      }
    ]
  }
};

