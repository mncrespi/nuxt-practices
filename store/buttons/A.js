import { ADD, RESET_STORE } from '../mutation-types'
import { CLEAR_STORE, INCREMENT } from '../action-types'

const getDefaultState = () => ({
  counters: 0
})

// Initial State
export const state = getDefaultState;

export const mutations = {
  // mutation(state, payload) { code... }
  [ADD](state) {
    state.counters++;
  },
  [RESET_STORE](state) {
    Object.assign(state, getDefaultState())
  },
};

export const actions = {
  // action(ctx, payload) { code... }
  [INCREMENT]({ state, commit, dispatch, }) {
    commit(ADD)
    dispatch(`counters/${INCREMENT}`, { value: 1, }, { root: true })
  },
  [CLEAR_STORE]({ commit }) {
    commit(RESET_STORE)
  },
};

export const getters = {
  counter(state) {
    return state.counters
  }
};
