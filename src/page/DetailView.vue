<template>
    
    <div v-if="movieItem" class="movie-detail">
        <div
        :style="{
            backgroundImage:`url(${movieItem.movie_banner})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
         }"
          class="movie-detail-box"
        >
            <img :src="movieItem.image" class="movie-detail-img"/>
            <div class="movie-detail-info">
                <h2 class="movie-detail-title">{{movieItem.title}}</h2>
                <ul class="movie-detail-desc">
                    <li>Original Title : {{movieItem.original_title}}</li>
                    <li>Release Date : {{movieItem.release_date}}</li>
                    <li>Running Time : {{movieItem.running_time}} Min</li>
                    <li>Director : {{movieItem.director}}</li>
                    <li>Producer : {{movieItem.producer}}</li>
                </ul>
                
                <p class="movie-detail-desc">
                    {{movieItem.description}}
                </p>
                <a @click.stop="back" class="movie-detail-back">back</a>
            </div>
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
    .movie-detail {
        position: relative;
        display: block;
        width: 100%;
        height: 100vh;

    }
    .movie-detail-box {
        position: relative;
        display: flex;
        width: 100%;
        height: 100%;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items:center;
    }

    .movie-detail-img {
        width: 45%;    
        height: auto;    
        border-radius: 5px;
        border: 10px solid #fff;
        box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
            0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
    }
    .movie-detail-info {
        width: 45%;    
        height: auto; 
    }
    .movie-detail-title{
        width: 100%;    
        height: auto;    
        color: #000;
        font-size: 20px;
        
        background-color: #fff;
        margin-bottom: 20px;
        font-weight: 700;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
            0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
    }

    .movie-detail-ot {
        display: block;
        float: right;   
        color: #333;
        font-size: 12px;
        margin-top: 10px;
        font-weight: 300;
    }

    .movie-detail-desc{
        width: 100%;    
        height: auto;    
        color: #000;
        font-size: 16px;
        line-height: 1.8;
        
        background-color: #fff;
        margin-bottom: 20px;
        font-weight: 400;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
            0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);

    }

    .movie-detail-back {
        position: relative;
        display: block;
        float: right;
        background: #f0f;
        color: #fff;
        padding: 5px;
        border-radius: 3px;
        cursor: pointer;
    }
    

    @media screen and (max-width: 1000px) {
        .movie-detail-img  {
            width: 95%;
            margin: 30px 0;
        }
        .movie-detail-info  {
            width: 95%;
            margin: 20px auto;
        }
    }
</style>