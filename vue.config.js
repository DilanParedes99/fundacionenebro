module.exports = {
    //mode: 'production',
    publicPath: process.env.NODE_ENV === 'production'
      ? '/controlgas/'
      : '/controlgas/',
    devServer: { 
        proxy: 'https://fundacionenebro.org.mx/monitorapi/monitor/api', 
    }
}