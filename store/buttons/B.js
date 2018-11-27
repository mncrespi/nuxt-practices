export const state = () => ({
  counters: 0
});

export const mutations = {
  increment(state) {
    state.counters++
  }
};

export const actions = {
  increment({ state, commit, rootState }) {
    commit('increment')
  }
};

export const getters = {
  counterB(state) {
    return state.counters
  }
};
