import myAxios from "../myAxios.js";

export default {
  namespaced: true,
  state() {
    return {
      authenticated: false,
      error: "",
      user: {},
      isLoading: false,
    };
  },
  getters: {
    authenticated: (state) => {
      return state.authenticated;
    },
    error: (state) => {
      return state.error;
    },
    user: (state) => {
      return state.user;
    },
    isLoading: (state) => {
      return state.isLoading;
    },
  },
  mutations: {
    setAuthenticated(state, authenticated) {
      state.authenticated = authenticated;
    },
    setError(state, error) {
      state.error = error;
    },
    setUser(state, user) {
      state.user = user;
    },
    setIsLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
  },
  actions: {
    login({ commit, dispatch }, user) {
      commit("setIsLoading", true);
      myAxios.get("../sanctum/csrf-cookie").then(() => {
        myAxios
          .post("login", {
            email: user.email,
            password: user.password,
          })
          .then(async function () {
            await dispatch("fetchUser");
          })
          .catch(function (error) {
            if (error.response?.status >= 500) {
              commit("setError", "Internal server error");
            }
            if (error.response?.status > 400) {
              commit("setError", "Invalid email and/or password");
            }
          })
          .then(function () {
            commit("setIsLoading", false);
          });
      });
    },
    async register({ commit, dispatch }, user) {
      commit("setIsLoading", true);
      await myAxios.get("../sanctum/csrf-cookie").then(() => {
        myAxios
          .post("register", {
            name: user.name,
            email: user.email,
            password: user.password,
            password_confirmation: user.password_confirmation,
          })
          .then(async function () {
            await dispatch("fetchUser");
          })
          .catch(function (error) {
            if (error.response?.status >= 500) {
              commit("setError", "Internal server error");
            }
            if (error.response?.status > 400) {
              commit("setError", "Email is invalid or already in use");
            }
          })
          .then(function () {
            commit("setIsLoading", false);
          });
      });
    },
    logout({ commit }) {
      commit("setIsLoading", true);

      if (document.cookie.indexOf("XSRF-TOKEN") === -1) {
        return;
      }

      return myAxios
        .post("logout")
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          document.cookie =
            "XSRF-TOKEN=;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC;Secure;";
          commit("setUser", {});
          commit("setAuthenticated", false);
          commit("setIsLoading", false);
        });
    },
    async tryAutoLogin({ commit, dispatch }) {
      if (document.cookie.indexOf("XSRF-TOKEN") === -1) {
        commit("setAuthenticated", false);
      } else {
        await dispatch("fetchUser");
      }
    },
    emptyError({ commit }) {
      commit("setError", "");
    },
    async fetchUser({ commit }) {
      await myAxios
        .get("/user")
        .then((response) => {
          let user = response.data;
          commit("setUser", user);
          commit("setAuthenticated", true);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
