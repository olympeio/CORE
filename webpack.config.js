const path = require('path');
const Copy = require('copy-webpack-plugin');
const GenerateJsonPlugin = require('generate-json-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const {merge} = require('webpack-merge');

const dist = path.join(__dirname, 'dist');
const npmPackage = require('./package.json');
const runtimeWebPath = path.resolve(__dirname, 'node_modules/@olympeio/runtime-web');

const commonConfig = {
    output: {
        path: dist,
        globalObject: 'this',
        library: npmPackage.name,
        libraryTarget: 'umd'
    },
    mode: 'development',
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', 'jsx', '.tsx', '.ts'],
        alias: {
            olympe: runtimeWebPath,
            logging: path.resolve(__dirname, 'src/helpers/logging.js'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(tsx?)$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.js$/,
                enforce: "pre",
                use: "source-map-loader"
            },
            {
                test: /\.js|ts$/,
                exclude: [/\.spec\.mjs$/, /^tests\//],
                enforce: 'pre',
                use: 'webpack-import-glob-loader',
            },
        ],
    },
    externals: ['olympe', nodeExternals()]
};

const plugins = {
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['**/*', '!main*']
        }),
        new GenerateJsonPlugin(
            'package.json',
            {
                name: npmPackage.name,
                version: npmPackage.version,
                files: npmPackage.files,
                main: 'main-node.js',
                browser: 'main-web.js',
                types: 'index.d.ts',
                dependencies: npmPackage.dependencies,
                codeAsData: 'codeAsData',
                homepage: 'https://github.com/olympeio/CORE',
            }
        ),
        new Copy({
            patterns: [
                {from: 'index.d.ts', to: 'index.d.ts'},
                {from: 'mui.d.ts', to: 'mui.d.ts'},
                {from: 'README-package.md', to: 'README.md'}
            ]
        }),
    ]
};

const node = {
    name: 'node',
    entry: './src/main-node.js',
    output: { filename: 'main-node.js' },
    resolve: { alias: { helpers: path.resolve(__dirname, 'src/helpers/node') } },
    externalsPresets: { node: true },
};

const web = {
    name: 'web',
    entry: './src/main-web.js',
    output: { filename: 'main-web.js' },
    resolve: { alias: { helpers: path.resolve(__dirname, 'src/helpers/web') } },
};

module.exports = [merge(commonConfig, node, plugins), merge(commonConfig, web)];
