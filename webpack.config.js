module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            // Here you should change 'env' to '@babel/preset-env'
            presets: ['@babel/preset-env'],
          },
        }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
};