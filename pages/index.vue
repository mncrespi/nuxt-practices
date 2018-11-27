<template>
  <section class="container">
    <div>
      <h1>Home</h1>
      <p>Cada boton contabiliza cuantas veces fue presionado.</p>
      <p>Cada boton boton suma +1 +2 +3 según corresponda al counter global</p>
      <p>Boton de Reset para limpiar todos los contadores</p>
      <p>En los bloques de cada boton, tengo que mostrar el estado de los counters de los otros botones</p>
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
  import { mapGetters } from 'vuex'
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
