const {draw, web, node, lib} = require('./webpack.common.js');
const TerserPlugin = require("terser-webpack-plugin");
const {merge} = require('webpack-merge')

const config = {
    mode: 'production',
    performance: { hints: false },
    optimization: {
        minimize: true,
        splitChunks: {
            cacheGroups: {
                olympe: { test: /[\\/]node_modules[\\/]@olympeio[\\/]/, name: "olympe", chunks: "all" }
            },
        },
        minimizer: [new TerserPlugin({
            exclude: ['olympe'],
            terserOptions: {
                compress: {defaults: true},
                mangle: {
                    properties: {
                        keep_quoted: true
                    }
                }
            },
        })],
    }
};

module.exports = [merge(config, draw), merge(config, web), merge(config, node), merge(config, lib)];

