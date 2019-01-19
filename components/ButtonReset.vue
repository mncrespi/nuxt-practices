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
  import { CLEAR_STORE, } from '../store/action-types'

  export default {
    name: 'ButtonReset',
    methods: {
      reset() {
        this.$store.dispatch(`counters/${CLEAR_STORE}`, null, { root: true });
        this.$store.dispatch(`buttons/A/${CLEAR_STORE}`, null, { root: true });
        this.$store.dispatch(`buttons/B/${CLEAR_STORE}`, null, { root: true });
        this.$store.dispatch(`buttons/C/${CLEAR_STORE}`, null, { root: true });
      }
    }
  }
</script>

<style scoped>
  .counterBox {
    margin: 10px
  }
</style>
