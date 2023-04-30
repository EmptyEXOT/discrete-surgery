export enum WebpackBuildMode {
    PRODUCTION = 'production',
    DEVELOPMENT = 'development'
}

export interface WebpackBuildOptions {
    paths: {
        entry: string;
        output: string;
        template: string;
    },
    hints: false | "error" | "warning",
    devServerOptions: {
        port: number,
        open: boolean,
        historyApiFallback: boolean,
        hot: boolean
    },
    mode: WebpackBuildMode
}