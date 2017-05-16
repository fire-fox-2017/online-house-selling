<template lang="html">
  <v-dialog v-model="d4" fullscreen transition="v-dialog-bottom-transition" :overlay="false">
    <v-btn primary dark slot="activator">New House</v-btn>
    <v-card>
      <v-card-row>
      <v-toolbar>
        <v-btn icon="icon" @click.native="d4 = false">
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>Details</v-toolbar-title>
        <v-btn class="white--text" flat="flat" @click.native="addHouse">Submit</v-btn>
      </v-toolbar>
    </v-card-row>
      <v-card-row>
        <v-card-text>
          <v-container fluid>
            <v-text-field label="Title" v-model="form.title" required />
            <v-text-field label="Address" v-model="form.address" required />
            <v-text-field label="Price" v-model="form.price" hint="in Rp" persistent-hint required />
            <v-text-field label="Bedrooms" type="number" min="0" max="10" v-model="form.bedrooms" required/>
            <v-text-field label="Bathrooms" type="number" min="0" max="10" v-model="form.bathrooms" required />
            <v-text-field label="Building Area" v-model="form.buildingArea" hint="in m2" persistent-hint required />
            <v-text-field label="Land Area" v-model="form.landArea" hint="in m2" persistent-hint required />
            <small>*indicates required field</small>
          </v-container>
        </v-card-text>
      </v-card-row>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data(){
    return {
      d4 : false,
      form : {}
    }
  },
  methods: {
    addHouse(){
      this.d4=false
      this.from = {}
      this.$store.dispatch('CreateHouse', this.form)
    }
  }
}
</script>

<style lang="css">
</style>
