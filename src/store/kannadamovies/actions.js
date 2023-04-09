import axios from "axios";
export async function getKannadamoviesDetails({commit}) {
    await axios.get(process.env.VUE_APP_APIBASEURL + "api/getKannadaMovies")
      .then(response => {
        commit("SET_KANNADAMOVIES_DETAILS", response);
      });
}