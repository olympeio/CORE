const {draw, draw_extra, web, node, lib} = require('./webpack.common.js');
const {merge} = require('webpack-merge');

const config = {
    mode: 'development',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: "pre",
                use: "source-map-loader"
            }
        ]
    }
};

// Config must be set before the rest to ensure "source-map-loader" is applied before other rules coming from "common" config.
module.exports = [merge(config, draw), merge(config, draw_extra), merge(config, web), merge(config, node), merge(config, lib)];
