import { ADD, } from '../mutation-types'
import { INCREMENT, COUNTERS_INCREMENT, } from '../action-types'

export const state = () => ({
  counters: 0
});

export const mutations = {
  // mutation(state, payload) { code... }
  [ADD](state) {
    state.counters++
  }
};

export const actions = {
  // action(ctx, payload) { code... }
  [INCREMENT]({ state, commit, dispatch, }) {
    commit(ADD)
    dispatch(COUNTERS_INCREMENT, { value: 1, }, { root: true })
  }
};

export const getters = {
  counterA(state) {
    return state.counters
  }
};
