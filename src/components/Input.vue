<template>
  <section>
    <div id="input">
      <input v-model="result" :type="type" :min="min" :max="max">
    </div>
  </section>
</template>

<script>
export default {
  props: [
    'value',
    'type',
    'max',
    'min'
  ],
  data () {
    return {
      result: 0
    }
  }
}
</script>

<style scoped>

</style>
