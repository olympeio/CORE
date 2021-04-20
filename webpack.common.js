const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const Copy = require('copy-webpack-plugin');
const {merge} = require('webpack-merge');
const GenerateJsonPlugin = require('generate-json-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const dist = path.join(__dirname, 'dist');
const npmPackage = require('./package.json');
const drawPath = path.resolve(__dirname, 'node_modules/@olympeio/draw');
const runtimeWebPath = path.resolve(__dirname, 'node_modules/@olympeio/runtime-web');
const runtimeNodePath = path.resolve(__dirname, 'node_modules/@olympeio/runtime-node');

const commonConfig = {
    entry: './src/main.js',
    output: {
        filename: '[name].bundle.js',
        path: dist,
        globalObject: 'this'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [
                    /\.spec\.mjs$/,
                    /^tests\//
                ],
                enforce: "pre",
                use: "webpack-import-glob-loader"
            },

        ]
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
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
        new Copy({
            patterns: [
                {from: 'res'},
                {from: drawPath + '/images', to: 'images'},
                {from: drawPath + '/fonts', to: 'fonts'},
                {from: drawPath + '/css', to: 'css'},
                {from: drawPath + '/doc', to: 'doc'}
            ]
        })
    ]
};

const web = {
    name: 'web',
    resolve: {
        alias: {
            olympe: runtimeWebPath
        }
    },
    plugins: [
        new Copy({
            patterns: [
                {from: 'res'}
            ]
        })
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
        new Copy({
            patterns: [
                {from: 'res'}
            ]
        })
    ]
};

const lib = {
    name: 'lib',
    devtool: 'source-map',
    output: {
        library: npmPackage.name,
        libraryTarget: 'umd'
    },
    externals: ['olympe', nodeExternals()],
    plugins: [
        new GenerateJsonPlugin(
            'package.json',
            {
                name: npmPackage.name,
                version: npmPackage.version,
                main: 'main.bundle.js',
                dependencies: npmPackage.dependencies,
                dcInitConfig: 'import/dcInitConfig.json'
            }
        ),
        new Copy({
            patterns: [
                {from: '.dc-init', to: 'import', globOptions: {ignore: ['**/id_rsa']}}
            ]
        }),
    ]
};

module.exports = {
    "draw": merge(commonConfig, webConfig, draw),
    "web": merge(commonConfig, webConfig, web),
    "node": merge(commonConfig, node),
    "lib": merge(commonConfig, lib)
};
