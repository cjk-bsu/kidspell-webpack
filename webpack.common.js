const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        background: { import: path.resolve(__dirname, "src/js/background.js"), filename: 'js/[name].js' },
        docs_script: { import: path.resolve(__dirname, "src/js/docs_script.js"), filename: 'js/[name].js' },
        options: { import: path.resolve(__dirname, "src/js/options.js"), filename: 'js/[name].js' },
        docs_popup: { import: path.resolve(__dirname, "src/js/docs_popup.js"), filename: 'js/[name].js' },
        docs_enable_canvas_annotation: { import: path.resolve(__dirname, "src/js/docs_enable_canvas_annotation.js"), filename: 'js/[name].js' },
        docs_overlay: { import: path.resolve(__dirname, "src/js/docs_overlay.js"), filename: 'js/[name].js' },
    },
    module: {
        rules: [
            {
                test: /\.?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                },
                type: "javascript/esm",
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                use: ['file-loader'],
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ]
    },
    optimization: {
        splitChunks: {
            chunks(chunk) {
                return chunk.name !== 'docs_popup';
            }
        }
    },
    plugins: [
        new HtmlPlugin({
            title: "options",
            filename: "html/options.html",
            chunks: ["options"],
        }),
        new HtmlPlugin({
            title: "docs_popup",
            filename: "html/docs_popup.html",
            chunks: ["docs_popup"],
        }),
        new CopyPlugin({
            patterns: [
                { from: path.resolve("src/manifest.json"), to: path.resolve("dist") },
                { from: path.resolve("src/resources/*"), to: path.resolve("dist"), context: path.resolve(__dirname, "src") },
                { from: path.resolve("src/resources/**/*"), to: path.resolve("dist"), context: path.resolve(__dirname, "src") },
            ],
        }),
    ],
    output: {
        filename: "[name].js",
        library: "docs_overlay",
        libraryTarget: "umd",
        publicPath: '',
    },
    externals: {
        chrome: 'chrome',
    }
}