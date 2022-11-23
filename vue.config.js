const {
	defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
	    publicPath: './',
	// transpileDependencies: true,
	lintOnSave: false,
	devServer: {
		proxy: {
			'/api': {
				target: 'https://i.maoyan.com',
				ws: true,
				changeOrigin: true
			},
			'/ajax': {
				target: 'https://m.maoyan.com',
				ws: true,
				changeOrigin: true
			},
			'/zs': {
				target: 'https://m.maoyan.com',
				ws: true,
				changeOrigin: true,
				pathRewrite: {
					'/zs': ''
				}
			},
			'/ls': {
				target: 'https://m.maoyan.com',
				ws: true,
				changeOrigin: true,
				pathRewrite: {
					'/ls': ''
				}
			},
		}
	}

})
