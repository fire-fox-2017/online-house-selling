<template>
  <div id="app">
    <div class="ui grey fixed inverted menu"> 
      <div class="ui container"> 
        <a href="#" class="header item">
        <i class="fa fa-bullhorn" aria-hidden="true"></i>
          Online House Selling
        </a>
        <a class="header item">
          <router-link :to="{name: 'AddHouse'}">Add New House</router-link>
        </a> 
      </div>
    </div> 
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {

    }
  }
}
</script>

<style>
#app {

}
</style>
