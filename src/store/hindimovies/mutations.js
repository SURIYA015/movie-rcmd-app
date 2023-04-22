//import Vue from "vue";

export function SET_HINDIMOVIES_DETAILS(state, apiData) {
    //Vue.set(state, "tamilmovies", apiData.movies);
    state.movies=apiData.data.movies
    //console.log(state.movies)
}