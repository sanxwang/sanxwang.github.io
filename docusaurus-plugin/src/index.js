module.exports = {
  configureWebpack: function () {
    return {
      module: {
        rules: [
          {
            test: /\.ply$/,
            use: [
              {
                loader: 'file-loader',
                options: { name: 'assets/files/[name]-[hash].[ext]' },
              },
            ],
          },
        ],
      },
    };
  },
};