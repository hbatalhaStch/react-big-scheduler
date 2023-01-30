var webpack = require('webpack');
var path = require('path');

const root = path.resolve(__dirname, '..');

module.exports = {
  mode: 'development',
  entry: {
    'basic': [
      'webpack-dev-server/client?http://localhost:8080/',
      'webpack/hot/only-dev-server',
      './example/bundle.js'
    ]
  },
  output: {
    path: __dirname,
    filename: "bundle.js",
    publicPath: 'http://localhost:8080/',
    chunkFilename: '[id].chunk.js',
    sourceMapFilename: '[name].map'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.es6'],
    modules: ['node_modules']
  },
  module: {
    rules: [
      { test: /\.jsx$|\.es6$|\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: false
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: false
            }
          },
        ],
      },
      { test: /\.(jpe?g|png|gif)$/i, loader: 'url?limit=10000!img?progressive=true' },
      { test: /\.json/, loader: 'json-loader', exclude: /node_modules/ }
    ]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NormalModuleReplacementPlugin(
      /node_modules\/antd\/lib\/style\/index\.less/,
      path.resolve(root, 'src/less/antd-globals-hiding-hack.less')
    ),
  ],
  devtool: "none"
};
