const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    // 第一种代理服务器
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:5000',
                pathRewrite: { '^/api': '' },
                // changeOrigin:true,
            },
            '/car': {
                target: 'http://localhost:5001',
                pathRewrite: { '^/car': '' },
            }

        }
    }
})