const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path')

/* LOADERS */
const rulesForCSS = {
  test: /\.css$/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
    },
    {
      loader: 'css-loader'
    },
    {
      loader: 'postcss-loader',
      options:{
        postcssOptions:{
          ident: 'postcss',
          plugins:[
            require('autoprefixer')
          ]
        }
      }
    }
  ]
}
const rulesForJavascript = {
  test: /\.m?js$/,
  exclude: /(node_modules|bower_components)/, 
  loader: 'babel-loader',
  options:{
    presets: [
      [
        '@babel/preset-env',
        {
          "targets": "defaults"
        }
      ],
      [
        '@babel/preset-react',
        {
          runtime: 'automatic' // 'classic' por defecto -> elimina el tener que estar importando react from react
        }
      ]  
    ]
  }
}
const rules = [rulesForJavascript, rulesForCSS]

/* PLUGINS */

module.exports = (env, argv) => {
  const {mode} = argv;
  const isProduction = mode === 'production';
  return{
    output:{
      filename: isProduction ? '[name].[contenthash].js' : 'main.js',
      path: path.resolve(__dirname, 'build')
    },
    plugins:[
      new HtmlWebpackPlugin({
        template: 'src/index.html'
      }),
      new MiniCssExtractPlugin({
        filename: '[name].bundle.css',
      }),
      new webpack.HotModuleReplacementPlugin()
    ],
    module:{
      rules
    },
    devServer: {
      open: true,
      port: 3000,
      overlay: true,  // abrir un overlay con los errores
      hot: true
    }

  }

}