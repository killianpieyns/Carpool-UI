import myAxios from "../myAxios.js";

export default {
  namespaced: true,
  state() {
    return {
      isLoading: false,
      rides: [],
      errors: [],
    };
  },
  getters: {
    rides: (state) => {
      console.log(state.rides);
      return state.rides;
    },
    isLoading: (state) => {
      return state.isLoading;
    },
    errors: (state) => {
      return state.errors;
    }
  },
  mutations: {
    setRides(state, rides) {
      state.rides = rides;
    },
    setIsLoading(state, isLoading) {
        state.isLoading = isLoading;
    },  
    setErrors(state, errors) {
      state.errors = errors;
      console.log("error mutated");
    },
  },
  actions: {
    async fetchRides({ commit }) {
      commit("setIsLoading", true);
      await myAxios
        .get(`/rides`)
        .then((response) => {
          let rides = response.data;
          commit("setRides", rides);
        })
        .catch((error) => {
          commit('setErrors', error);
        })
        .then(() => {
            commit("setIsLoading", false);
        });
    },
  },
};
