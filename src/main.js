// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  head.link.push(
    {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css'
    }
  )
  head.script.push(
    {
      src: 'https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.min.js',
      body: true
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
