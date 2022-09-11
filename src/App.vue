<template>
  <div class="wrap">
    <div class="container">
      <RouterView/>
    </div>
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
  html {
    scrollbar-3dLight-Color: #efefef;
    scrollbar-arrow-color: #dfdfdf;
    scrollbar-base-color: #efefef;
    scrollbar-Face-Color: #dfdfdf;
    scrollbar-Track-Color: #efefef;
    scrollbar-DarkShadow-Color: #efefef;
    scrollbar-Highlight-Color: #efefef;
    scrollbar-Shadow-Color: #efefef;
    -ms-overflow-style: none;
    overflow: auto;
  }
  ::-webkit-scrollbar {
      width: 5px;
  }

  ::-webkit-scrollbar-track {
      background-color: #619ab4;
  }

  ::-webkit-scrollbar-thumb {
      background: linear-gradient(to bottom, #1697bf, #62b7ac);
  }

  ::-webkit-scrollbar-button {
      display: none;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    background-color: #eff3f7;
    height: 100%;
  }
  .wrap {
    position: relative;
    display: block;
    width: 100%;
    padding: 50px 0;
  }
  .container {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;    
  }
</style>