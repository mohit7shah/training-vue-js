import counterMutations from './mutations.js';
import counterActions from './actions.js';
import counterGitters from './getters.js';

export default {
  namespaced: true,
  state() {
    return { counter: 0 };
  },
  mutations: counterMutations,
  actions: counterActions,
  getters: counterGitters,
};
