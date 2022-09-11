import { createStore } from 'vuex';
import { fetchApi } from '../api/index'

export default createStore({
    state: {
        movieList: []
    },
    actions: {
        fetchMovieList({commit}) {
            fetchApi()
            .then(response => {
              commit('MOVIE_LIST_INIT', response.data)
            })
            .catch(err => console.log(err));
        }
    },
    mutations: {
        MOVIE_LIST_INIT(state, payload) {
            state.movieList = payload
        }
    },
    getters: {
        getMovieList(state){
            return state.movieList
        }
    }
});