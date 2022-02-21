module.exports = {
    //mode: 'production',
    publicPath: process.env.NODE_ENV === 'production'
      ? '/monitorweb/'
      : '/monitorweb/',
    devServer: { 
        proxy: process.env.VUE_APP_URL_API
    }
}