module.exports = {
  devServer: {
    proxy: 'http://localhost:8080',
}
}
//Enable sass/scss
const path = require('path')
function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
      //Change for sass folder/filename if sass
      path.resolve(__dirname, './src/assets/scss/*.scss')
      ],
    })
}
//Webpack for sass/scss
let webpack = require('webpack');
module.exports = {
  chainWebpack (config) {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    //This is scss, or change for sass
    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })
  }
}
/*var webpack = require('webpack');
module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
      })
    ]
  }
} if you like extra drama!*/

/* Or more likely*/
/* vue.config.js
module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // mutate config for production...
    } else {
      // mutate for development...
    }
  }
}*/


/*Or Lodash*/

/*var webpack = require('webpack');
module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
  _map: ['lodash', 'map']
      })
    ]
  }
}*/

//or chainWebpack:
