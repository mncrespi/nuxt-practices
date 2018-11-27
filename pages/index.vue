<template>
  <section class="container">
    <div>
      <h1>Home</h1>
      <p>Cada boton contabiliza cuantas veces fue presionado.</p>
      <p>Cada boton boton suma +1 +3 +5 según corresponda al counter global</p>
      <p>Boton de Reset para limpiar todos los contadores</p>
      <p>En los bloques de cada boton, tengo que mostrar el estado de los counters de los otros botones</p>
      <ButtonA />
      <ButtonB />
      <ButtonC />
      <ButtonReset />
    </div>
    <div class="card margin padding">
      <h2>Button A (+1): {{ counterA }}</h2>
      <h2>Button B (+3): {{ counterB }}</h2>
      <h2>Button C (+5): {{ counterC }}</h2>
      <h2><b>Counter (total): {{ counter }}</b></h2>
    </div>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'
  import ButtonA from '~/components/ButtonA'
  import ButtonB from '~/components/ButtonB'
  import ButtonC from '~/components/ButtonC'
  import ButtonReset from '~/components/ButtonReset'

  export default {
    name: 'Home',
    components: {
      ButtonA,
      ButtonB,
      ButtonC,
      ButtonReset,
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

<style scoped>
  .margin {
    margin: 10px;
  }
  .padding {
    padding: 10px;
  }
</style>
