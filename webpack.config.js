const path = require(`path`);

module.exports = {
  entry: `./src/index.js`,
  output: {
    filename: `bundle.js`,
    path: path.resolve(__dirname, `public`)
  },
  devServer: {
    contentBase: path.resolve(__dirname, `public`),
    open: false,
    port: 1337,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        },
      }
    ],
  },
  resolve: {
    extensions: [`.js`, `.jsx`]
  },
  devtool: `source-map`,
};

/* Old file
const path = require(`path`);

module.exports = {
  entry: `./src/index.js`,
  output: {
    filename: `bundle.js`,
    path: path.resolve(__dirname, `public`)
  },
  devServer: {
    contentBase: path.resolve(__dirname, `public`),
    open: false,
    port: 1337,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        },
      },
      {
        test: /\.css$/i,
        use: [`style-loader`, `css-loader`]
      },
      {
        test: /\.png$/i,
        use: [`file-loader`]
      }
    ],
  },
  resolve: {
    extensions: [`.js`, `.jsx`]
  },
  devtool: `source-map`,
};
*/
