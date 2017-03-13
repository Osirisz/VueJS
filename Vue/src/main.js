// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import 'semantic-ui-css/semantic.min.js'
import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import Home from './components/Home'
import About from './components/About'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history', // ทำให้อัพเดตpath
  routes: [
    { path: '/', component: Home }, // ถ้าpathเป็น '/' จะไปเรียก component Home มาแสดง
    { path: '/about', component: About }, // ไปเรียก component about
    { path: '*', redirect: '/' } // ถ้าไปหน้าที่ไม่มีให้เด้งมาที่'/'ก็คือHome
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, //  คือ router: router,
  template: '<App/>',
  components: { App }
})
