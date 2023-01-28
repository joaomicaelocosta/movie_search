import Vue from "vue";
import Vuex from "vuex";

import {getGenreList} from "../services/functions"

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        appReady: false,
        movies: [],
        query: null,
        count: null,
        genreList: []
    },
    getters: {
        getMovies: (state) => {
            return state.movies
        },
        getGenres: (state) => {
            return state.genreList
        },
    },
    mutations: {
        SET_MOVIES(state, values) {
            state.movies = values.values;
            state.query = values.query;
            state.count = values.count;
        },
        SET_GENRES(state, values) {
            state.genreList = values;
        }

    },
    actions: {
        getMovieLoad({commit}, response) {
            commit("SET_MOVIES", {
                values: response.results,
                query: response.query,
                count: response.total_results,
            })
        },
        getGenreList({commit}) {
            return getGenreList().then((response) => {
                if(response) {
                    commit("SET_GENRES", {
                        values: response.data.genres,
                    })
                }
            })
        }
    }
})