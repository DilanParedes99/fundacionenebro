module.exports = {
    //mode: 'production',
    publicPath: process.env.NODE_ENV === 'production'
      ? '/monitorweb/'
      : '/monitorweb/',
    devServer: { 
        proxy: "https://fundacionenebro.org.mx/monitorapi/monitor"
    }
}