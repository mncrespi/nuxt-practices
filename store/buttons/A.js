export const state = () => ({
  counters: 0
});

export const mutations = {
  // mutation(state, payload) { code... }
  increment(state) {
    state.counters++
  }
};

export const actions = {
  // action(ctx, payload) { code... }
  increment({ state, commit, dispatch, }) {
    commit('increment')
    dispatch('counters/increment', { value: 1, }, { root: true })
  }
};

export const getters = {
  counterA(state) {
    return state.counters
  }
};
