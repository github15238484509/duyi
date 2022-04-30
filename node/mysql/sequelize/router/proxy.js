const { createProxyMiddleware } = require("http-proxy-middleware");
const context = "/data";
module.exports = createProxyMiddleware(context, {
    target: "http://localhost:3000",
    pathRewrite: function (path, req) {
        return path.substring(context.length);
    },
});