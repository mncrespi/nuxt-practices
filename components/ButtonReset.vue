<template>
  <div class="card counterBox">
    <header class="card-header">
      <span class="card-header-icon">
        <button @click="reset" >RESET STORES</button>
      </span>
      <p class="card-header-title">Reset All Stores to DefaultStore</p>
    </header>
  </div>
</template>

<script>
  import { CLEAR_STORE_A, CLEAR_STORE_B, CLEAR_STORE_C, CLEAR_STORE_COUNTER } from '../store/action-types'

  export default {
    name: 'ButtonReset',
    methods: {
      reset() {
        this.$store.dispatch(CLEAR_STORE_COUNTER, null, { root: true });
        this.$store.dispatch(CLEAR_STORE_A, null, { root: true });
        this.$store.dispatch(CLEAR_STORE_B, null, { root: true });
        this.$store.dispatch(CLEAR_STORE_C, null, { root: true });
      }
    }
  }
</script>

<style scoped>
  .counterBox {
    margin: 10px
  }
</style>
