import path from 'path';

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'public'),
        },
        open: true,
        port: 3000,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    resolve: {
        modules: [path.resolve(process.cwd(), 'src'), 'node_modules'],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.*'],
        symlinks: false,
        cacheWithContext: false,
    },
    devtool: 'source-map',
    performance: {
        hints: false,
    },
};
