import { ADD, RESET_STORE, } from './mutation-types'
import { INCREMENT, COUNTERS_INCREMENT, CLEAR_STORE, } from './action-types'

// Initial State
const getDefaultState = () => ({
  counters: 0
})

export const state = getDefaultState;

export const mutations = {
  // mutation(state, payload) { code... }
  [ADD](state, { value, }) {
    state.counters = state.counters + value;
  },
  [RESET_STORE](state) {
    Object.assign(state, getDefaultState())
  },
};

export const actions = {
  // action(ctx, payload) { code... }
  [INCREMENT]({ state, commit, rootState, rootGetters, }, { value, }) {
    commit(ADD, { value, })
  },
  [CLEAR_STORE]({ commit }) {
    commit(RESET_STORE)
  },
};


export const getters = {
  counter(state) {
    return state.counters
  }
}
