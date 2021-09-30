module.exports = {
    outputDir: "dist",
    assetsDir: "assets",
    lintOnSave: false,
    devServer: {
      open: true,
      host: "localhost",
      port: "8081",
      https: false,
      hotOnly: false,
      proxy: {
        "/api": {
          target: "http://localhost:8089", 
          ws: true,
          changeOrigin: true,
          pathRewrite: {
            "^/api": "",
          },
        },
      },
    },
  };