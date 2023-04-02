import Vue from "vue";
import Vuex from "vuex";
import { createStore } from "vuex-extensions";

import requestQueue from "./requestQueue";

import actions from "./rootActions";

import tamilmovies from "./tamilmovies";

Vue.use(Vuex);

export default createStore(Vuex.Store, {
    modules: {
        tamilmovies,
        requestQueue,  
    },
    actions
});