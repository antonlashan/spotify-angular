const PROXY_CONFIG = {
  "/proxy/*": {
    target: "https://api.spotify.com/v1",
    secure: true,
    changeOrigin: true,
    pathRewrite: {
      "^/proxy": "",
    },
  },
};

module.exports = PROXY_CONFIG;
