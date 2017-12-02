<template>


  <h2>{{texto}}</h2>



</template>


<script>
  import axios from 'axios';
  export default {
    name: 'restauranteslist',
    mounted(){
        this.getRestaurants();

    },
    data(){
      return{
        texto:'Pagina Restaurantes LIST',
        restaurantes: null
      }
    },
    methods:{
      getRestaurants(){
        axios.get('http://localhost/slim/restaurantes-api.php/restaurantes')
          .then((respuesta) => {
            this.restaurantes = respuesta.data.data;
          });
      }
    }
  }



</script>
