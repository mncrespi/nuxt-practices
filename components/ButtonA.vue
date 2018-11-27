<template>
  <div class="card counterBox">
    <header class="card-header">
      <span class="card-header-icon">
        <button @click="increment" >Button A</button>
      </span>
      <p class="card-header-title">CountA: {{ counterA }} CountB: {{ counterB }} CountC: {{ counterC }}</p>
    </header>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import { BUTTONS_A_INCREMENT } from '../store/action-types'
  export default {
    name: 'ButtonA',
    computed: {
      ...mapGetters({
        counterA: 'buttons/A/counterA',
        counterB: 'buttons/B/counterB',
        counterC: 'buttons/C/counterC',
      })
    },
    methods: {
      ...mapActions({
        increment: BUTTONS_A_INCREMENT,
      }),
    }
  }
</script>

<style scoped>
  .counterBox {
    margin: 10px
  }
</style>
