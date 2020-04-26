
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  // 基本路径
  publicPath: "./",

  // 输出文件目录
  outputDir: "web",
  devServer: {
    host: "localhost", //要设置当前访问的ip 否则失效
    open: false, //浏览器自动打开页面
      proxy: {
          '/api': {
          target: 'https://webapi.oxfordsky.org/',
          ws: true,
          changeOrigin: true,
      }
    }
  },

  // webpack配置 see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: config => {
    // 别名配置 可进行 链式操作
    config.resolve.alias
      .set("@", resolve("src"))
      .set("$", resolve("jquery"))
      .set("views", resolve("src/views"))
      .set("request", resolve("src/request"))
      .set("pages", resolve("src/pages"))
      .set("assets", resolve("src/assets"))
  }
};