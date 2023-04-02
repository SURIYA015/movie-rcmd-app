import Vue from "vue";
export default {
  namespaced: true,
  state: {},
  mutations: {
    SET_REQUEST(state, { request, response, expiresAt }) {
      if (!state[request]) Vue.set(state, request, {});
      Vue.set(state[request], "response", response);
      Vue.set(state[request], "expiresAt", expiresAt);
    },
  },
};
