const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    //mode
    mode: 'production',
    //entry
    entry: {
        main : path.resolve(__dirname, 'src/js/main.js'),
        about : path.resolve(__dirname, 'src/js/about.js'),
    },
    //output
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name][contenthash].js',
        clean: true,
    },
    //dev-server
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'public')
        },
        port: 3000,
        hot: true,
        open: true,
        compress: true,
        historyApiFallback: true,
    },
    //plugins
    plugins: [
        new HtmlWebpackPlugin({
            title: "Countries | Home",
            template: './src/pages/indexTemp.html',
            filename: 'index.html',
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            title: "Countries | About",
            template: './src/pages/aboutTemp.html',
            filename: 'about.html',
            chunks: ['about']
        }),
        new MiniCssExtractPlugin(),
    ],
    //loader
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
          },
          {
            test: /\.(?:js|mjs|cjs)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                targets: "defaults",
                presets: [
                  ['@babel/preset-env']
                ]
              }
            }
          },
        ],
      },
}