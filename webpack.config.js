// const glob = require('glob');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

const sourcePath = '/Users/zmnv/ZMNV/dev/zmnv-native-cli';

module.exports = {
    node: {
        fs: 'empty',
    },
    target: 'node',
    externals: [nodeExternals()],
    entry: {
        generator: './src/generator.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './build'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/, /components/],
                loader: 'babel-loader',
            },
            {
                test: /\.(jsx|md)$/,
                exclude: [/node_modules/],
                loader: 'raw-loader',
            }
        ],
    },
    plugins: [
    ],
    stats: {
        colors: true,
    },
    devtool: 'source-map',
    resolve: {
        alias: {
            '~': path.resolve(__dirname, 'src/'),
            Project: `${sourcePath}/src/`,
            ProjectRoot: `${sourcePath}/`,
        }
    }
};
