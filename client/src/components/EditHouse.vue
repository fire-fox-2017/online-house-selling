<template lang="html">
  <div class="">
    <v-dialog v-model="d" fullscreen transition="v-dialog-bottom-transition">
      <v-card>
        <v-card-row>
        <v-toolbar>
          <v-btn icon="icon"  @click.native="close">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Details</v-toolbar-title>
          <v-btn class="white--text" flat="flat" @click.native="updateHouse(house)">Submit</v-btn>
        </v-toolbar>
      </v-card-row>
        <v-card-row>
          <v-card-text>
            <v-container fluid>
              <v-text-field label="Title" v-model="house.title" required />
              <v-text-field label="Address" v-model="house.address" required />
              <v-text-field label="Price" v-model="house.price" hint="in Rp" persistent-hint required />
              <v-text-field label="Bedrooms" type="number" min="0" max="10" v-model="house.bedrooms" required/>
              <v-text-field label="Bathrooms" type="number" min="0" max="10" v-model="house.bathrooms" required />
              <v-text-field label="Building Area" v-model="house.buildingArea" hint="in m2" persistent-hint required />
              <v-text-field label="Land Area" v-model="house.landArea" hint="in m2" persistent-hint required />
              <small>*indicates required field</small>
            </v-container>
          </v-card-text>
        </v-card-row>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ['house', 'display'],
  computed: {
    d(){
      return this.display
    }
  },
  methods: {
    close(){
      this.$emit('close')
    },
    updateHouse(house){
      this.close()
      this.$store.dispatch('EditHouse', house)
    }
  }
}
</script>

<style>
.edit{
  z-index: 99;
}
</style>
