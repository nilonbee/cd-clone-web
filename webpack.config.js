module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // This is a simplified example, the actual configuration might differ
          "style-loader", // Injects styles into DOM
          {
            loader: "css-loader", // Interprets @import and url() like import/require()
            options: {
              importLoaders: 1,
            },
          },
          "postcss-loader", // Processes CSS with PostCSS
        ],
      },
    ],
  },
};
