export const state = () => ({
  counters: 4
})


export const getters = {
  counterC(state) {
    return state.counters
  }
}
