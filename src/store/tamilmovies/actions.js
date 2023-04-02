import axios from "axios";
export async function getMoviesDetails() {
  console.log(process.env.VUE_APP_APIBASEURL)
    // await axios.get("https://dummyjson.com/products/1")
    // await dispatch(
    //   "apiRequest",
    //   {
    //     method: "get",
    //     route: "api/getMovies"
    //   },
    //   { root: true }
    // )
    // .then((response) => {
    //   commit("SET_PRODUCT_DETAILS", response.data);
    //   console.log(response.data)
    // });

    await axios.get(process.env.VUE_APP_APIBASEURL + "api/getMovies")
      .then(response => {
        console.log(response.data.movies);
      });
}