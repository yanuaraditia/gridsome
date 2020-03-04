// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Yanuar Aditia',
  plugins: [
    {
      use: "gridsome-plugin-service-worker",
    },
    {
      use: `gridsome-plugin-netlify-cms`
    },
    {
      use: "gridsome-plugin-pwa",
      options: {
        title: 'Yanuar Aditia',
        startUrl: '/',
        display: 'standalone',
        statusBarStyle: 'default',
        manifestPath: 'manifest.json',
        disableServiceWorker: true,
        serviceWorkerPath: 'service-worker.js',
        cachedFileTypes: 'js,json,css,html,png,jpg,jpeg,svg',
        shortName: 'Yanuar',
        themeColor: '#ffcc00',
        backgroundColor: '#ffffff',
        icon: './src/favicon.png', // must be provided like 'src/favicon.png'
        msTileImage: '',
        msTileColor: '#ffcc00'
      },
    },
    {
      use: "gridsome-plugin-htaccess",
      options: {
        textCompression: [
          "text/html",
          "application/javascript",
          "text/css",
          "image/png",
          "image/jpeg",
        ],
      },
    },
  ]
}
