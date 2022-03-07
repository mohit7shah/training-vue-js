export default {
  setAuth(state, payload) {
    state.IsLoggedIn = payload.isAuth;
  },
};
