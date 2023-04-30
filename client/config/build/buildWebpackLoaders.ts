import webpack from "webpack";

export function buildWebpackLoaders(): webpack.RuleSetRule[] {
    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const styleLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            "style-loader",
            {
                loader: "css-loader",
                options: {
                    importLoaders: 1,
                    modules: true,
                },
            },
            "sass-loader",
        ],
    };

    return [
        tsLoader, styleLoader
    ]
}