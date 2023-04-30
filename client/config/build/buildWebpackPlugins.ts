import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {WebpackBuildOptions} from "./types/WebpackOptions";

export function buildWebpackPlugins({paths}: WebpackBuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template: paths.template
        }),
        new webpack.ProgressPlugin()]
}