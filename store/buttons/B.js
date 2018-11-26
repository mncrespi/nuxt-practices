export const state = () => ({
  counters: 3
})


export const getters = {
  counterB(state) {
    return state.counters
  }
}
