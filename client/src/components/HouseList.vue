<template lang="html">
  <div class="">
    <edit-house :house="selectedHouse" :display="display" @close="display = false"></edit-house>
    <div v-for="house in houses">
      <v-card>
        <v-card-row class="blue darken-1">
          <v-card-title>
            <span class="white--text">{{house.title}}</span>
            <v-spacer></v-spacer>
            <div>
              <v-menu offset-y id="marriot" bottom left origin>
                <v-btn icon="icon" slot="activator" class="white--text">
                  <v-icon>more_vert</v-icon>
                </v-btn>
                <v-list>
                  <v-list-item @click="openDialog(house)">
                    <v-list-tile>
                      <v-list-tile-title>Edit</v-list-tile-title>
                    </v-list-tile>
                  </v-list-item>
                  <v-list-item @click="deleteHouse(house)">
                    <v-list-tile>
                      <v-list-tile-title>Delete</v-list-tile-title>
                    </v-list-tile>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </v-card-title>
        </v-card-row>
        <v-card-text>
          <v-card-row height="auto">
            <div>
              <div>address: {{house.address}}</div>
              <div>price: Rp{{house.price}}</div>
              <div>bedrooms: {{house.bedrooms}}</div>
              <div>bathrooms: {{house.bathrooms}}</div>
              <div>building area: {{house.buildingArea}} m2</div>
              <div>land area: {{house.landArea}} m2</div>
            </div>
          </v-card-row>
        </v-card-text>
      </v-card>
    </div>
  </div>
  
</template>

<script>
import EditHouse from './EditHouse'
export default {
  computed: {
    houses(){
      return this.$store.getters.getAllHouses
    }
  },
  methods: {
    deleteHouse(house){
      this.$store.dispatch('DeleteHouse', house)
    },
    openDialog(house){
      this.selectedHouse = house
      this.display = true
    }
  },
  components: {
    EditHouse
  },
  data(){
    return {
      display : false,
      selectedHouse : {}
    }
  }
}
</script>

<style scoped>
</style>
