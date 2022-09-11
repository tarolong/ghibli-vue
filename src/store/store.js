import { createStore } from 'vuex';
import { fetchApi, fetchApiItem } from '../api/index'

export default createStore({
    state: {
        movieList: [],
        movieItem: null
    },
    actions: {
        fetchMovieList({commit}) {
            fetchApi()
            .then(response => {
              commit('MOVIE_LIST_INIT', response.data)
            })
            .catch(err => console.log(err));
        },
        
        fetchMovieItem({commit}, _id) {
            fetchApiItem(_id)
            .then(response => {
              commit('MOVIE_DETAIL_ITEM', response.data)
            })
            .catch(err => console.log(err));
        }
    },
    mutations: {
        MOVIE_LIST_INIT(state, payload) {
            state.movieList = payload
        },
        MOVIE_DETAIL_ITEM(state, payload) {
            state.movieItem = payload
        }
    },
    getters: {
        getMovieList(state){
            return state.movieList
        },
        getMovieDetailItem(state){
            return state.movieItem
        }
    }
});