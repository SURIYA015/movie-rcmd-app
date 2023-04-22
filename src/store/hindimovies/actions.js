import axios from "axios";
export async function getHindimoviesDetails({commit}) {
    await axios.get(process.env.VUE_APP_APIBASEURL + "api/getHindiMovies")
      .then(response => {
        commit("SET_HINDIMOVIES_DETAILS", response);
      });
}