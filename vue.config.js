const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir)
}

const HOST = '127.0.0.1';
const PORT = '8045';
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    productionSourceMap: false,
    css: {
        loaderOptions: {
            less: {
                modifyVars: {
                    blue: '#3a82f8',
                    'text-color': '#333'
                },
                javascriptEnabled: true
            }
        }
    },
    devServer: {
        host: HOST,
        port: PORT,
        https: false,
        hotOnly: false,
        proxy: 'http://localhost:8087'
    },
    configureWebpack: config => {
        config.resolve = {
            extensions: ['.js', '.vue', '.json', ".css"],
            alias: {
                'vue$': 'vue/dist/vue.esm.js',
                '@': resolve('src'),
                'assets': resolve('src/assets'),
                'components': resolve('src/components')
            }
        }
    }
};
