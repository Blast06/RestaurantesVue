import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './home.vue'
import Contacto from './contacto.vue'
import RestaurantesList from './restaurantesList.vue'
import RestauranteTop from './restauranteTop.vue'


Vue.use(VueRouter);


const routes = [
  {path: '/home', component: Home},
  {path: '/contacto', component: Contacto},
  {path: '/restauranteslist', component: RestaurantesList},
  {path: '/restaurantetop', component: RestauranteTop}
];


const  router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.component('home', Home);
Vue.component('contacto', Contacto);
Vue.component('restaurantesList', RestaurantesList);
Vue.component('restauranteTop', RestauranteTop);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
