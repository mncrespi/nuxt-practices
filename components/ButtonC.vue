<template>
  <div class="card counterBox">
    <header class="card-header">
      <span class="card-header-icon">
        <button @click="increment" >Button C</button>
      </span>
      <p class="card-header-title">CountA: {{ counterA }} CountB: {{ counterB }} CountC: {{ counterC }}</p>
    </header>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
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
        increment: 'buttons/C/increment',
      }),
    }
  }
</script>

<style scoped>
  .counterBox {
    margin: 10px
  }
</style>
