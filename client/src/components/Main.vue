<template>
  <div id="house-list" class="ui items">
    <div class="ui header center aligned dividing">
      <h1 class="head"><i class="fort awesome icon"></i>Most Wanted Houses</h1>
    </div>
    <div v-for="(house, index) in houses" class="item">
      <div class="ui medium image">
        <img :src="house.image" draggable="true" data-bukket-ext-bukket-draggable="true">
      </div>
      <div class="content">
        <a class="header">{{house.title}}</a>
        <div class="meta">
          <span>{{house.description}}</span>
        </div>
        <div class="description">
          <p></p>
        </div>
        <div class="extra">
          Rp. {{house.price}}
        </div>
        <div class="meta">
          <div @click="confirmDelete(house._id)" class="ui red button label"><i class="trash icon"></i> Delete</div>
          <a @click="userClickUpdate(house)">
            <router-link  :to="{name: 'EditHouse', params: {houseId: house._id}}" class="ui blue button label"><i class="edit icon"></i> Edit</router-link>
          </a>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {

  name: 'Main',

  data () {
    return {

    };
  },
  methods: {
    ...mapActions([
      'getHouses',
      'deleteHouse',
      'getOneHouse'
    ]),
    confirmDelete(houseId) {
      var confirmed = confirm('Are you sure want to delete this house from our list?');
      if(confirmed)
        this.deleteHouse(houseId)
    },
    userClickUpdate(house) {
      this.getOneHouse(house)
    },
  },
  computed: {
    ...mapGetters([
      'houses',
      'newHouse'
    ])
  },
  mounted() {
    this.getHouses()
  }
};
</script>

<style lang="css" scoped>
  #house-list {
      width: 50%;
      margin: 0 auto;
      padding-top: 80px;
      padding-bottom: 50px;
    }
  .head {
    padding-bottom: 10px;
  }
</style>