module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views':'@/views'
      },
    },
    devServer: {
        host:'0.0.0.0',
        port: 8081,
        open: false,
        proxy: {
          '/api': {
                target: 'http://152.136.185.210:7878/api/hy66/',  //后台接口地址
                changOrigin: true,  //允许跨域
                pathRewrite: {
                  /* 重写路径，当我们在浏览器中看到请求的地址为：http://localhost:8080/api/core/getData/userInfo 时
                    实际上访问的地址是：http://121.121.67.254:8185/core/getData/userInfo,因为重写了 /api
                    */
                  '^/api': ''
          }
        },
      }
      }
  }
}
