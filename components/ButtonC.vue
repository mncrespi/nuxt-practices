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
  import { mapGetters, createNamespacedHelpers } from "vuex";
  const { mapActions } = createNamespacedHelpers("buttons/C");
  import { INCREMENT } from "../store/action-types";
  export default {
    name: 'ButtonC',
    computed: {
      ...mapGetters("buttons/A", {
        counterA: "counter"
      }),
      ...mapGetters("buttons/B", {
        counterB: "counter"
      }),
      ...mapGetters("buttons/C", {
        counterC: "counter"
      })
    },
    methods: {
      ...mapActions({
        increment: INCREMENT,
      }),
    }
  }
</script>

<style scoped>
  .counterBox {
    margin: 10px
  }
</style>
