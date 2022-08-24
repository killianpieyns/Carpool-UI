import { createStore } from "vuex";
import rideStore from "./rideStore";
import authStore from "./authStore";

export default createStore({
  modules: {
    rides: rideStore,
    auth: authStore,
  },
  state() {
    return {
      isLoading: false,
    };
  },
  getters: {
    isLoading: (state) => {
      return state.isLoading;
    },
  },
  mutations: {
    setIsLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
  },
});
