var webpack = require('webpack'),
  merge = require('webpack-merge'),
  autoprefixer = require('autoprefixer');
  precss       = require('precss');
  TARGET = process.env.npm_lifecycle_event;

process.env.BABEL_ENV = TARGET;

const common = {
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.(less)$/,
        loaders: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
      },
      { test: /\.css$/, loader: "style-loader!css-loader!postcss-loader" },
      { test: /\.png$/, loader: "url-loader?limit=100000" },
      { test: /\.jpg$/, loader: "file-loader" }
    ]
  },
  postcss: function() {
    return [autoprefixer, precss]
  }
}

if (TARGET === 'start' || !TARGET) {
  var config = merge(common, {
    entry: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './src/index.jsx'
    ],
    devtool: 'cheap-module-source-map',
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'react-hot!babel?cacheDirectory'
        },
        {
          test: /node_modules[\\\/]auth0-lock[\\\/].*\.js$/,
          loaders: [
            'transform-loader/cacheable?brfs',
            'transform-loader/cacheable?packageify'
          ]
        }, {
          test: /node_modules[\\\/]auth0-lock[\\\/].*\.ejs$/,
          loader: 'transform-loader/cacheable?ejsify'
        }, {
          test: /\.json$/,
          loader: 'json-loader'
        }
      ],
    },
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js',
    },
    devServer: {
      contentBase: './dist',
      hot: true
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      // new webpack.DefinePlugin({
      //   'process.env': {
      //     'NODE_ENV': JSON.stringify('production')
      //   }
      // })
    ]
  })
}

if (TARGET === 'build' || TARGET === 'stats') {
  var config = merge(common, {
    entry: {
      app: './src/components/App.jsx'
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel'
        }
      ],
    },
    output: {
      path: __dirname + '/dist',
      filename: 'paper-trader.js',
      //library: 'DentistSearchMap',
      libraryTarget: 'umd'
    },
    externals: {
      react: {
        root: 'React',
        commonjs: 'react',
        commonjs2: 'react',
        amd: 'react'
      },
      'react-dom': {
        root: 'ReactDOM',
        commonjs: 'react-dom',
        commonjs2: 'react-dom',
        amd: 'react-dom'
      },
      'velocity-react/velocity-component': {
        commonjs: 'velocity-react/velocity-component',
        commonjs2: 'velocity-react/velocity-component',
        amd: 'velocity-react/velocity-component'
      },
      'velocity-react/velocity-transition-group': {
        commonjs: 'velocity-react/velocity-transition-group',
        commonjs2: 'velocity-react/velocity-transition-group',
        amd: 'velocity-react/velocity-transition-group'
      }
    },
    plugins: [
      new webpack.optimize.DedupePlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      })
    ]
  })
}

module.exports = config
