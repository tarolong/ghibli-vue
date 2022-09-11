<template>
  <div class="wrap">
    <RouterView/>
  </div>
</template>

<script>
  import { useStore } from 'vuex';
  export default {
    setup() {
      const store = useStore();
      store.dispatch('fetchMovieList');
      return {      
      }
    }
  }
</script>

<style>
  @charset 'utf-8';
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ul, li {
    list-style: none;
  }
  img {
    vertical-align: middle;
    border: 0;
  }
  a {
    color: #333;
    text-decoration: none;
  }
  .wrap {
    position: relative;
    display: block;
  }
</style>