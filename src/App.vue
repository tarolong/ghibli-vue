<template>
  <div class="wrap">
    {{data}}
  </div>
</template>

<script>
  import {computed} from 'vue'
  import {useStore} from 'vuex'
  export default {
    setup() {
      const store = useStore();
      store.dispatch('fetchMovieList');
      const data = computed(() => store.getters.getMovieList);
      return {      
        data
      }
    }
  }
</script>

<style>
</style>