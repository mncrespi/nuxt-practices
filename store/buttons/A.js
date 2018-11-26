export const state = () => ({
  counters: 2
})


export const getters = {
  counterA(state) {
    return state.counters
  }
}
