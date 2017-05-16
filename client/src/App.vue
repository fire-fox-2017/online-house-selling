<template>
  <div id="app">
    <div class="ui grey fixed inverted menu"> 
      <div class="ui container"> 
        <a href="#" class="header item">
        <i class="fa fa-bullhorn" aria-hidden="true"></i>
          Online House Selling
        </a>
        <a @click="onEmptyHouseData">
          <router-link class="header item" :to="{name: 'AddHouse'}">Add New House</router-link>
        </a>
          
      </div>
    </div> 
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'app',
  data() {
    return {

    }
  },
  methods: {
    ...mapActions([
    'emptyHouseData'
  ]),
    onEmptyHouseData(house) {
      this.emptyHouseData(this.emptyHouse)
    }
  },
  computed: {
    ...mapGetters([
      'emptyHouse',
      'newHouse'
    ])
  },
}
</script>

<style>
#app {

}
</style>
