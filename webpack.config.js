const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const GenerateJsonPlugin = require('generate-json-webpack-plugin');
const ShellPlugin = require('webpack-shell-plugin-next');

const dist = path.join(__dirname, 'dist');
const drawPath = path.resolve(__dirname, 'node_modules/@olympeio/draw');
const runtimeWebPath = path.resolve(__dirname, 'node_modules/@olympeio/runtime-web');
const runtimeNodePath = path.resolve(__dirname, 'node_modules/@olympeio/runtime-node');
const package = require('./package.json');

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
        new CopyPlugin({patterns: [
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
        new CopyPlugin({patterns: [
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
        new CopyPlugin({patterns: [
            {from: 'res'}
        ]})
    ]
};

const lib = {
    name: 'lib',
    output: {
        library: package.name,
        libraryTarget: 'umd',
        filename: 'index.js',
        path: dist,
        globalObject: 'this'
    },
    externals: {
        'olympe': 'olympe'
    },
    plugins: [
        new ShellPlugin({
            onBuildStart:{scripts: ['npx gulp patches --project.modules=project'],blocking: true},
            onBuildEnd:{scripts: ['npx gulp clean']}
        }),
        new CleanWebpackPlugin(),
        new GenerateJsonPlugin(
            'package.json',
            {
                name: package.name,
                version: package.version,
                main: 'index.js',
                dependencies: package.dependencies,
                dcInitConfig: 'import/dcInitConfig.json'
            }
        ),
        new CopyPlugin({patterns: [
                {from: '.dc-init', to: 'import', globOptions: {ignore: ['**/id_rsa']}}
            ]}),
    ]
};


module.exports = [
    Object.assign(draw, webConfig, config),
    Object.assign(web, webConfig, config),
    Object.assign(node, config),
    Object.assign(config, lib)
];
