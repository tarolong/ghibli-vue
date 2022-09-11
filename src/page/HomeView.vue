<template>
    <div v-for="(item, index) in movieList" :key="index">
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

</style>