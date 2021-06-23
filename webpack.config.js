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
    entry: './src/main.js',
    output: {
        path: dist,
        globalObject: 'this',
        library: npmPackage.name,
        libraryTarget: 'umd'
    },
    mode: 'development',
    devtool: 'source-map',
    resolve: {
        alias: {
            olympe: runtimeWebPath,
            logging: path.resolve(__dirname, 'src/helpers/logging.js')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: "pre",
                use: "source-map-loader"
            },
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
                main: 'main-node.js',
                browser: 'main-web.js',
                types: 'index.d.ts',
                dependencies: npmPackage.dependencies,
                dcInitConfig: 'import/dcInitConfig.json'
            }
        ),
        new Copy({
            patterns: [
                {from: '.dc-init', to: 'import', globOptions: {ignore: ['**/id_rsa']}},
                {from: 'index.d.ts', to: 'index.d.ts'}
            ]
        }),
    ]
};

const node = {
    name: 'node',
    output: { filename: 'main-node.js' },
    resolve: { alias: { helpers: path.resolve(__dirname, 'src/helpers/node') } },
    externals: ['os']
};

const web = {
    name: 'web',
    output: { filename: 'main-web.js' },
    resolve: { alias: { helpers: path.resolve(__dirname, 'src/helpers/web') } },
};

module.exports = [merge(commonConfig, node, plugins), merge(commonConfig, web)];
