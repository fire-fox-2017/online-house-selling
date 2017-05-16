<template>
  <div id="edit-form">
    <div class="ui form">
      <h3>Edit House Form</h3>
      <div class="field" id="form-tambah">
        <label for="title">Judul:</label>
        <input name="title" type="text" placeholder="Judul yang menarik" class="input" v-model="newHouse.title">
        <label for="price">Harga rumah ini:</label>
        <input name="price" type="text" placeholder="Harga rumah yang mau dijual" class="input" v-model="newHouse.price">
        <label for="image">Image:</label>
        <input name="image" type="text" placeholder="Direct link ke image url" class="input" v-model="newHouse.image">
        <label for="address">Address:</label>
        <input name="address" type="text" placeholder="Alamat rumah" class="input" v-model="newHouse.address">
        <div class="field">
          <label class="input" for="description">Deskripsi:</label>
          <textarea name="description" placeholder="Deskripsikan lebih jauh tentang rumahmu" rows="2" style="margin-top: 0px; margin-bottom: 0px; height: 58px;" v-model="newHouse.description"></textarea>
        </div>
        
        <button @click="onEditHouse(newHouse)" class="ui primary button">Submit</button>
        
        <a href="#/"><button class="ui red button">Back to main</button></a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {

  name: 'EditHouse',

  data () {
    return {

    };
  },
  methods: {
    ...mapActions([
      'getOneHouse',
      'updateHouse'
  ]),
    onEditHouse(house) {
    this.updateHouse(house)
  },
  },

  computed: {
    ...mapGetters([
    'newHouse'
  ])
  },
};
</script>

<style lang="css" scoped>
#edit-form {
  padding-top: 50px;
  width: 50%;
  margin: 0 auto;
}
</style>