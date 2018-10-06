module.exports = {
  mode: 'development',
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, use: 'babel-loader'
      }
    ]
  },
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  }
}