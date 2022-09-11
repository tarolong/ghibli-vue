<template>
    <div v-for="(item, index) in movieList" :key="index" class="movie">
        <MovieList :item="item" />
    </div>
</template>
<script>
    import { computed } from 'vue'
    import { useStore } from 'vuex';
    import MovieList from '../components/MovieList.vue'
    export default {
        components: {
            MovieList
        },
        setup() {
            const store = useStore();
            const movieList = computed(() => store.getters.getMovieList);
            return {
                movieList
            }
        }
    }
</script>
<style scoped>
    .movie {
        position: relative;
        display: block;
        width: 48%;

        background-color: #fff;
        margin-bottom: 70px;
        margin-top: 20px;
        font-weight: 300;
        padding: 20px;
        border-radius: 5px;
        color: #adaeb9;
        box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
            0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);

    }

    @media screen and (max-width: 1000px) {
        .movie {
            width: 95%;
        }
    }
   
</style>