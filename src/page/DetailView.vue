<template>
    
    <div v-if="movieItem">
        <div
        :style="{
            backgroundImage:`url(${movieItem.movie_banner})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
         }"
        >
            <img :src="movieItem.image" />
            <h2>{{movieItem.title}} <small>({{movieItem.original_title}})</small></h2>
            <p>
                {{movieItem.description}}
            </p>
            <a @click.stop="back">back</a>
        </div>
    </div>

</template>
<script>
    import { computed, onUpdated,ref } from 'vue'
    import { useStore } from 'vuex';
    import { useRoute, useRouter } from 'vue-router'
    export default {
        setup() {
            const loading = ref(false);
            const route = useRoute();
            const router = useRouter();
            
            const back = () => {
                router.push('/')
            }

            const id = route.params.id;
            const store = useStore();
            store.dispatch('fetchMovieItem', id);
            const movieItem = computed(() => store.getters.getMovieDetailItem);
            onUpdated( () => {
                loading.value = true;              
            });
            return {
                movieItem,
                back,
                loading
            }
        }
    }
</script>
<style scoped>

</style>