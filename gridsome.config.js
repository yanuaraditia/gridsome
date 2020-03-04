// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Yanuar Aditia',
  plugins: [
    {
      use: `gridsome-plugin-netlify-cms`
    },
    {
      use: "gridsome-plugin-service-worker"
    },
    {
      use: "gridsome-plugin-manifest",
      options: {
          background_color: "#fff",
          icon_path: "./src/favicon.png",
          name: "Yanuar Aditia",
          short_name: "Yanuar",
          theme_color: "#FFcc00",
          lang: "en",
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
