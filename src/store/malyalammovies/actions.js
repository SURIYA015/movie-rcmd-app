import axios from "axios";
export async function getMalyalammoviesDetails({commit}) {
    await axios.get(process.env.VUE_APP_APIBASEURL + "api/getMalyalamMovies")
      .then(response => {
        commit("SET_MALYALAMMOVIES_DETAILS", response);
      });
}