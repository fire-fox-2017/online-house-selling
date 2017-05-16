<template>
  <div>
    <h1>Test</h1>
    {{count}}

    <button class="ui primary button" @click="increment">
      +
    </button>
    <button type="button" name="button" @click="getPostsfromDB">getPostsfromDB</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters({
    count: 'getCount'
  }),
  methods: {
    ...mapActions([
      'increment',
      'getPostsfromDB'
    ])
  }

}
</script>

<style lang="css">
</style>
