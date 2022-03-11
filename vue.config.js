const { defineConfig } = require('@vue/cli-service')
const { ModuleFederationPlugin } = require('webpack').container

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: 'http://localhost:8000/',
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: 'shell',
        filename: 'remoteEntry.js',
        remotes: {
          patients: 'patients@http://localhost:8001/remoteEntry.js'
        },
        shared: ['fhirclient', 'vue', 'bootstrap', 'bootstrap-vue']
      })
    ]
  },
  chainWebpack: config => {
    // See https://github.com/vuejs/vue-cli/issues/6318
    config.optimization.delete('splitChunks')
  }
})
