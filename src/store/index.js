import Vue from "vue";
import Vuex from "vuex";
import { movieLoad } from "../services/functions"

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        appReady: false,
        movies: [],
        query: '',
        count: 0,
    },
    getters: {
        getMovies: (state) => {
            return state.movies
        }
    },
    mutations: {
        GET_MOVIES(state, values) {
            state.movies = values;
        }
    },
    actions: {
        getMovieLoad({commit}, query) {
            return movieLoad(query).then((response) => {
                if(response) {
                    commit("GET_MOVIES", {
                        values: response.results,
                        query: query,
                        count: response.total_results,
                    })
                }
            })
        }
    }
})