export const state = () => ({
  counters: 0
})

export const mutations = {
  // mutation(state, payload) { code... }
  increment(state, { value, }) {
    state.counters = state.counters + value;
  }
};

export const actions = {
  // action(ctx, payload) { code... }
  increment({ state, commit, rootState, rootGetters, }, { value, }) {
    commit('increment', { value, })
  }
};


export const getters = {
  counter(state) {
    return state.counters
  }
}
