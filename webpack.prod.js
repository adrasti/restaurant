const path = require("path");
const common = require("./webpack.common");
const {merge} = require("webpack-merge");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const cssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "main.[contenthash].js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "images/name.[hash][ext]"
    },
    optimization: {
        minimizer: [
            new cssMinimizerWebpackPlugin()
        ]
    },
    plugins: [
                new CleanWebpackPlugin(), 
                new MiniCssExtractPlugin({filename: "[name].[contenthash].css"})
            ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: 
                [
                    MiniCssExtractPlugin.loader, 
                    "css-loader"
                ]
            },
        ]
    }
});