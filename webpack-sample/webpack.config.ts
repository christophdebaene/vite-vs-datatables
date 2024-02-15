import path from "path";
import 'webpack-dev-server';
import * as webpack from "webpack";
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from "html-webpack-plugin";

const config: webpack.Configuration = {
    mode: (process.env.NODE_ENV as "production" | "development" | undefined) ?? "development",
    entry: "./src/index.ts",
    module: {
        rules: [
            {
                test: /.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.sql/,
                type: 'asset/source',
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },            
            {
                test: /\.(eot|ttf|otf|svg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
                type: 'asset/resource',
            },
        ],
    },
    resolve: {        
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: "bundle.js"
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            inject: false,
            template: path.join(__dirname, '/src/index.html')
        })        
    ]    
};

export default config;