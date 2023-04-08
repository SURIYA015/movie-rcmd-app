import axios from "axios";
export async function getMoviesDetails({commit}) {
    await axios.get(process.env.VUE_APP_APIBASEURL + "api/getMovies")
      .then(response => {
        commit("SET_TAMILMOVIES_DETAILS", response);
      });
}