<template>
  <section class="container">
    <div>
      <h1>Home</h1>
      <ButtonA />
      <ButtonB />
      <ButtonC />
    </div>
  </section>
</template>

<script>
  import ButtonA from '~/components/ButtonA'
  import ButtonB from '~/components/ButtonB'
  import ButtonC from '~/components/ButtonC'

  export default {
    name:'Home',
    components: {
      ButtonA,
      ButtonB,
      ButtonC,
    },
  }
</script>

<style>
</style>
