import {WebpackBuildOptions} from "./types/WebpackOptions";
import webpack from "webpack";
import 'webpack-dev-server';
import {buildWebpackPlugins} from "./buildWebpackPlugins";
import {buildDevServer} from "./buildDevServer";
import {buildWebpackLoaders} from "./buildWebpackLoaders";

export function buildWebpackConfig(options: WebpackBuildOptions): webpack.Configuration {
    return {
        entry: options.paths.entry,
        output: {
            path: options.paths.output,
            filename: '[name].[contenthash].js',
            clean: true,
        },
        devServer: buildDevServer(options),
        mode: options.mode,
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
            preferRelative: true
        },
        module: {
            rules: buildWebpackLoaders(),
        },
        plugins: buildWebpackPlugins(options),
        performance: {
            hints: options.hints,
        }
    }
}