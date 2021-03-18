const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const Copy = require('copy-webpack-plugin');

const dist = path.join(__dirname, 'dist');
const drawPath = path.resolve(__dirname, 'node_modules/@olympeio/draw');
const runtimeWebPath = path.resolve(__dirname, 'node_modules/@olympeio/runtime-web');
const runtimeNodePath = path.resolve(__dirname, 'node_modules/@olympeio/runtime-node');

const config = {
    entry: './src/main.js',
    mode: 'development',
    output: {
        filename: 'main.js',
        path: dist,
        globalObject: 'this'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: "webpack-import-glob-loader"
            }
        ]
    }
};

const webConfig = {
    devServer: {
        contentBase: dist,
        compress: true,
        port: 8888
    }
};

const draw = {
    name: 'draw',
    resolve: {
        alias: {
            olympe: drawPath
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new Copy({patterns: [
            {from: 'res'},
            {from: drawPath + '/images', to: 'images'},
            {from: drawPath + '/fonts', to: 'fonts'},
            {from: drawPath + '/css', to: 'css'},
        ]})
    ]
}

const web = {
    name: 'web',
    resolve: {
        alias: {
            olympe: runtimeWebPath
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new Copy({patterns: [
            {from: 'res'}
        ]})
    ]
};

const node = {
    name: 'node',
    target: 'node',
    resolve: {
        alias: {
            olympe: runtimeNodePath
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new Copy({patterns: [
            {from: 'res'}
        ]})
    ]
};

module.exports = [Object.assign(draw, webConfig, config), Object.assign(web, webConfig, config), Object.assign(node, config)];
