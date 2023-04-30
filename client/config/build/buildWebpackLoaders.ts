import webpack from "webpack";

export function buildWebpackLoaders(): webpack.RuleSetRule[] {
    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [
        tsLoader,
    ]
}