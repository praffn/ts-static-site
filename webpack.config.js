const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const neat = require('node-neat');

const context = path.resolve(__dirname, 'src');
const outputPath = path.resolve(__dirname, 'dist');

const assetsName = process.env.NODE_ENV === 'production' ? '[name].[hash].[ext]' : '[name].[ext]';


const config = {
  context,
  entry: './index.ts',
  output: {
    path: outputPath,
    filename: process.env.NODE_ENV === 'production' ? '[name].[chunkhash].js' : '[name].js',
  },

  resolve: {
    extensions: [".ts", ".js"],
  },

  module: {
    rules: [
      // typescript
      {
        test: /\.ts$/,
        loader: "ts-loader",
      },
      // scss
      {
        test: /\.scss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: 'css-loader',
            options: {
              minimize: process.env.NODE_ENV === 'production',
            },
          },
          { loader: 'resolve-url-loader' },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [...neat.includePaths],
              sourceMap: true,
            },
          },
        ],
      },
      // images
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'file-loader',
        options: {
          name: assetsName,
          outputPath: 'assets/images',
        },
      },
      // fonts
      {
        test: /\.(woff2?|ttf|eot)$/,
        loader: 'file-loader',
        options: {
          name: assetsName,
          outputPath: 'assets/fonts',
        },
      },
      // html
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },

  plugins: [
    new HtmlPlugin({
      template: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: process.env.NODE_ENV === 'production' ? '[name].[contenthash].css' : '[name].css',
    }),
  ],
};

module.exports = config;