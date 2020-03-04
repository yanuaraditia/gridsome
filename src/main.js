// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/style.css'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  head.link.push(
    {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,500;0,700;1,400&display=swap'
    },
    {
      rel: 'stylesheet',
      href: 'https://rawcdn.githack.com/yanuaraditia/fabric/bb4c13fbcf78ed2d7bd1e3ecb1f4b10898b6b129/fabric-icons-inline.css'
    }
  )
  head.script.push(
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js',
      head: true
    },
    {
      src: '/home.js',
      body: true
    }
  ) 
  head.meta.push(
    {
      name: 'keywords',
      content: 'Yanuar,Yanuar Aditia,YanuarAditia,Yanuar Aditya,YanuarAditya,2pac,Front-End,Full-Stack'
    }
  )
}
