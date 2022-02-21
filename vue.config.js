module.exports = {
    //mode: 'production',
    publicPath: process.env.NODE_ENV === 'production'
      ? '/controlgas/'
      : '/controlgas/',
    devServer: { 
        proxy: process.env.VUE_APP_URL_API, 
    }
}