import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// modules
import core from './modules/core';

export default new Vuex.Store({
  modules: {
    core
  },
  state: {},
  mutations: {},
  actions: {},
  getters: {}
});