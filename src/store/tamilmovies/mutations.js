import Vue from "vue";

export function SET_PRODUCT_DETAILS(state, apiData) {
    Vue.set(state, "title", apiData.title);
    Vue.set(state, "description", apiData.description);
    Vue.set(state, "price", apiData.price);
}