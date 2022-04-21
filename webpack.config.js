const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const exclusions = /node_modules/;

module.exports = [
  {
    entry: {
      app: "./src/app.js", // we can adjust the entry folder as we need.
                              // this is from where the webpack takes the files to bundle
    },
    output: {
      path: path.resolve(__dirname, "build"),    // Should be in STATICFILES_DIRS, so that when we run collectstatic we look in this folder as well
      publicPath: "/static/",                  // Should match Django STATIC_URL -> so django can pick up static from there during development.
      filename: "[name].js",                     // No filename hashing, Django takes care of this - OPTIONAL
      chunkFilename: "[id]-[chunkhash].js",      // DO have Webpack hash chunk filename - OPTIONAL
    },
    devServer: {
      port: 8081,
      writeToDisk: true,             // Write files to disk in dev mode, so Django can serve the assets -> for development only
    },
    module: {
      rules: [
        {
          test: /.*/, // test tells webpack "hey, treat this filename as a module"
          include: path.resolve(__dirname, "src/img"),
          exclude: exclusions,
          options: {
            context: path.resolve(__dirname, "src/"),
            name: "[path][name].[ext]",
          },
          loader: "file-loader",
        },
        {
          test: /\.css$/, // 'test:' tells webpack "hey, treat this filename as a module"
          exclude: exclusions,
          use: [
            MiniCssExtractPlugin.loader,
            { loader: "css-loader" },
          ],  // 'use:' instead, defines what loaders are applied to the file.
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
      new MiniCssExtractPlugin(),
    ],
  },
];
