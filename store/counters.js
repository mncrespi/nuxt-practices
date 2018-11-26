export const state = () => ({
  counters: 0
})


export const getters = {
  counter(state) {
    return state.counters
  }
}
