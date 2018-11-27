import { ADD, } from './mutation-types'
import { INCREMENT, COUNTERS_INCREMENT, } from './action-types'

export const state = () => ({
  counters: 0
})

export const mutations = {
  // mutation(state, payload) { code... }
  [ADD](state, { value, }) {
    state.counters = state.counters + value;
  }
};

export const actions = {
  // action(ctx, payload) { code... }
  [INCREMENT]({ state, commit, rootState, rootGetters, }, { value, }) {
    commit(ADD, { value, })
  }
};


export const getters = {
  counter(state) {
    return state.counters
  }
}
