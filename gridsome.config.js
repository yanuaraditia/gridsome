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
      use: "gridsome-plugin-service-worker",
      options: {
        networkFirst: {
          routes: [
            "/",
            /\.(js|css|png)$/, // means "every JS, CSS, and PNG images"
          ],
        },
      },
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
    }
  ]
}
