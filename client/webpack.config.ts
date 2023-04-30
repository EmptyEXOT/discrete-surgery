import webpack from 'webpack';
import path from "path";
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {WebpackBuildMode} from "./config/build/types/WebpackOptions";

const config: webpack.Configuration = buildWebpackConfig({
    paths: {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'dist'),
        template: path.resolve(__dirname, 'public', 'index.html')
    },
    hints: false,
    devServerOptions: {
        port: 3000,
        open: true,
        historyApiFallback: true,
        hot: true
    },
    mode: WebpackBuildMode.DEVELOPMENT
});

export default config;