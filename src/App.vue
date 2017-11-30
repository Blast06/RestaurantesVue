<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h2>{{msg}}</h2>
    <ul>
      <li><router-link to="/home">Home</router-link></li>
      <li><router-link to="/restaurantesList">Restaurantes</router-link></li>
      <li><router-link to="/restauranteTop">Restaurantes Top</router-link></li>
      <li><router-link to="/contacto">COntacto</router-link></li>
    </ul>

    <router-view></router-view>



  </div>
</template>

<script>


import Contacto from "./contacto.vue";
import Home from "./home.vue";
import RestaurantesList from "./restaurantesList.vue";
import RestaurantesTop from "./restauranteTop.vue";

export default {

  components: {
    RestaurantesTop,
    RestaurantesList,
    Home,
    Contacto},
  name: 'app',
  data () {
    return {
      msg: 'RestaurantesAPP'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
