<template>
  <div class="wrap">
    <Transition name="fade">
      <div class="intro" v-if="show"></div>
    </Transition>
    <div class="container">
      <RouterView @start="startFN"/>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/runtime-core';
  import { useStore } from 'vuex';
  export default {
    setup() {
      const show = ref(true);
      const store = useStore();
      store.dispatch('fetchMovieList');
      const startFN = () => {
        window.scrollTo(0,0);
        document.querySelector('html').style.overflowY = 'auto';
        show.value = false;
      }
      return {      
        startFN,
        show
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

  html {
    overflow-x: hidden;
    overflow-y:hidden;
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
  }
  .container {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;    
  }
  .intro {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    z-index: 999;
    background: #fff url('@/assets/intro.jpg') no-repeat center;

    opacity: 1;
    transition: opacity 5s;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>