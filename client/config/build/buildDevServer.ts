import webpack from 'webpack';
import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { WebpackBuildOptions } from './types/WebpackOptions';

export function buildDevServer({ devServerOptions }: WebpackBuildOptions): DevServerConfiguration {
    const { port, open, historyApiFallback, hot } = devServerOptions;
    return {
        port,
        open,
        historyApiFallback,
        hot
    };
}