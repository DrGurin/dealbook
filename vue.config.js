var PrerenderSpaPlugin = require('prerender-spa-plugin');
var path = require('path');

module.exports = {
    publicPath: '',
    pages: {
      index: {
        entry: 'src/main.js',
        title: 'Deal Book'
      }
    },
    configureWebpack: config => {
      console.log('Dealbook config: ', config);
      if (process.env.NODE_ENV !== 'production') return
      return {
        plugins: [
          new PrerenderSpaPlugin(
            // Absolute path to compiled SPA
            path.resolve(__dirname, 'dist'),
            // List of routes to prerender
            [ '/', '/about'],
          ),
        ]
      }
    },
  }