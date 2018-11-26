<template>
  <section class="container">
    <div>
      <h1>Home</h1>
      <ButtonA />
      <ButtonB />
      <ButtonC />
    </div>
    <div>
      <h2>counter: {{ counter }}</h2>
      <h2>Button A: {{ counterA }}</h2>
      <h2>Button B: {{ counterB }}</h2>
      <h2>Button C: {{ counterC }}</h2>
    </div>
  </section>
</template>

<script>
  import { mapGetters, mapState } from 'vuex'
  import ButtonA from '~/components/ButtonA'
  import ButtonB from '~/components/ButtonB'
  import ButtonC from '~/components/ButtonC'

  export default {
    name: 'Home',
    components: {
      ButtonA,
      ButtonB,
      ButtonC,
    },
    computed: {
      ...mapGetters({
        counter: 'counters/counter',
        counterA: 'buttons/A/counterA',
        counterB: 'buttons/B/counterB',
        counterC: 'buttons/C/counterC',
      })
    },
  }
</script>

<style>
</style>
