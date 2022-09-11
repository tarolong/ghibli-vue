<template>
  <div class="wrap">
    <div v-for="(item, index) in movieList" :key="index">
        <a href="#"><img :src="item.image" /></a>
        <a href="#"><h2>{{item.title}} <small>({{item.original_title}})</small></h2></a>
        <p>
          {{item.description}}
        </p>
        <a href="#">more...</a>
      </div>
  </div>
</template>

<script>
  import {computed} from 'vue'
  import {useStore} from 'vuex'
  export default {
    setup() {
      const store = useStore();
      store.dispatch('fetchMovieList');
      const movieList = computed(() => store.getters.getMovieList);
      return {      
        movieList
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