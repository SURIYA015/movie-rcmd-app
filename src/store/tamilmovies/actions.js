import axios from "axios";
export async function getTamilMoviesDetails({commit}) {
    await axios.get(process.env.VUE_APP_APIBASEURL + "api/getTamilMovies")
      .then(response => {
        commit("SET_TAMILMOVIES_DETAILS", response);
      });
}