<template>
  <div class="card counterBox">
    <header class="card-header">
      <span class="card-header-icon">
        <button @click="increment" >Button B</button>
      </span>
      <p class="card-header-title">Count: {{ count }}</p>
    </header>
  </div>
</template>

<script>
  export default {
    name: 'ButtonB',
    data: () => ({
      count: 0,
    }),
    methods: {
      increment() {
        this.count ++
      },
    }
  }
</script>

<style scoped>
  .counterBox {
    margin: 10px
  }
</style>
