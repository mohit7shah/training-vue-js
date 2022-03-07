import { createStore } from 'vuex';
import rootMutations from './mutations.js';
import rootActions from './actions.js';
import rootGetter from './getters.js';
import counterModule from './counter/index.js';

const store = createStore({
  modules: {
    numbers: counterModule,
  },
  state() {
    return {
      counter: 0,
      IsLoggedIn: false,
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetter,
});

export default store;
