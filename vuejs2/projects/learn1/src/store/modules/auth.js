const authModule = {
  state: () => ({
    user: {
        name: 'name'
    },
  }),
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    login(context, payload) {
      context.commit("setUser", payload);
      localStorage.setItem("user", JSON.stringify(payload));
    },
    logout() {
      localStorage.removeItem("user");
    },
  },
};

export default authModule;
