import axios from "axios";
export async function getTeluguMoviesDetails({commit}) {
    await axios.get(process.env.VUE_APP_APIBASEURL + "api/getTeluguMovies")
      .then(response => {
        commit("SET_TELUGUMOVIES_DETAILS", response);
      });
}