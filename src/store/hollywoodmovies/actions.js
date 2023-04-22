import axios from "axios";
export async function getHollywoodmoviesDetails({commit}) {
    await axios.get(process.env.VUE_APP_APIBASEURL + "api/getHollywoodMovies")
      .then(response => {
        commit("SET_HOLLYWOODMOVIES_DETAILS", response);
      });
}