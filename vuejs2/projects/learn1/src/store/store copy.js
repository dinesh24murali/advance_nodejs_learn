/* eslint-disable */
import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    increment(state, payload) {
      console.log({
        payload,
      });
      state.count++;
    },
  },
  actions: {
    increment(context, payload) {
      console.log(" action ");
      debugger
      context.commit("increment", 10);
    },
  },
});

export default store;
