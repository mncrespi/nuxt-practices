<template>
  <div class="card counterBox">
    <header class="card-header">
      <span class="card-header-icon">
        <button @click="increment" >Button B</button>
      </span>
      <p class="card-header-title">CountA: {{ counterA }} CountB: {{ counterB }} CountC: {{ counterC }}</p>
    </header>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import { BUTTONS_B_INCREMENT } from '../store/action-types'
  export default {
    name: 'ButtonB',
    computed: {
      ...mapGetters({
        counterA: 'buttons/A/counterA',
        counterB: 'buttons/B/counterB',
        counterC: 'buttons/C/counterC',
      })
    },
    methods: {
      ...mapActions({
        increment: BUTTONS_B_INCREMENT,
      }),
    }
  }
</script>

<style scoped>
  .counterBox {
    margin: 10px
  }
</style>
