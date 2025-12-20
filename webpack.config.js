const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/app.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve('./dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader', 'css-loader'
        ]
      },
      {
        test: /\.(jpg|png)$/, 
        loader: 'url-loader',
        options: {
          name: '[name].[ext]?[hash]',
          publicPath: './dist',
          limit: 10000 //10kb 미만은 url로 처리, 그 이상은 file-loader가 처리
        }
      }
    ]
  }
}