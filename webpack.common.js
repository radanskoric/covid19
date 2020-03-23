var path = require("path");

module.exports = {
  entry: {
    app: "./src/app.js"
  },

  output: {
      path: path.join(__dirname, "public"),
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
            query: {
              presets: ["@babel/preset-env"]
            }
          }
        ]
      }
    ]
  }
};

