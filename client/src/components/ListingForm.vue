<template>

  <div class="question-form">
    <button class="ui button" @click="backToListing">
      Back
    </button>

    <h2>New Listing</h2>
    <form class="ui form" v-on:submit.prevent="saveListing" >
      <div class="fields">
        <div class="ten wide field">
          <label>Title</label>
          <input type="text" name="title" v-model="postForm.title">
        </div>
      </div>
      <div class="fields">
        <div class="ten wide field">
          <label>Description</label>
          <textarea rows="2" v-model="postForm.description"></textarea>
        </div>
      </div>
      <div class="fields">
        <div class="ten wide field">
          <label>Price</label>
          <input type="text" name="price" v-model="postForm.price">
        </div>
      </div>
      <div class="fields">
        <div class="ten wide field">
          <label>Address</label>
          <input type="text" name="address" v-model="postForm.address">
        </div>
      </div>
      <div class="fields">
        <div class="ten wide field">
          <label>City</label>
          <input type="text" name="city" v-model="postForm.city">
        </div>
      </div>
      <div class="fields">
        <div class="ten wide field">
          <label>Country</label>
          <input type="text" name="country" v-model="postForm.country">
        </div>
      </div>
      <div class="fields">
        <div class="ten wide field">
          <label>Picture</label>
          <input type="text" name="picture" v-model="postForm.picture">
        </div>
      </div>

      <div class="fields">
        <div class="ten wide field">
          <button id="btnSubmitLogin" class="ui button green right floated" type="submit"> {{ postForm._id ? 'Update' : 'Post Listing' }} </button>
          <button id="btnSubmitLogin" v-if="postForm._id" class="ui button red right floated" type="submit" v-on:click.prevent="cancelUpdate"> Cancel </button>

        </div>
      </div>

    </form>

    <gmap-map
      :center="center"
      :zoom="10"
      style="width: 500px; height: 300px"
      @click="mapRclicked"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>


  </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import * as VueGoogleMaps from 'vue2-google-maps';
import Vue from 'vue';

  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyAyPn_nD60WIRhX0ukbZIa_5KCQU83jAJA',
      v: 'OPTIONAL VERSION NUMBER',
      // libraries: 'places', //// If you need to use place input
    }
  });


export default {
  data() {
    return {
      postForm: {
        _id: null,
        title: '',
        description: '',
        price: null,
        address: '',
        city: '',
        country: '',
        picture: ''
      },
      center: {lat: -6.264597, lng: 106.782843},
      markers: [
        { position: {lat: -6.264597, lng: 106.782843} }

      ]

    }
  },
  // computed: mapGetters({
  //   postForm: 'getPosts'
  // }),
  methods: {
    ...mapActions([
      'savePost'
    ]),
    ...mapGetters([
      'getPosts'
    ]),
    saveListing () {
      console.log('createListing')
      this.savePost(this.postForm)
      this.$router.push('/')
    },
    backToListing () {
      this.$router.push('/')
    },
    mapRclicked (mouseArgs) {
      console.log('mapRclicked')
      const createdMarker = this.addMarker();
      createdMarker.position.lat = mouseArgs.latLng.lat();
      createdMarker.position.lng = mouseArgs.latLng.lng();

      console.log(`[${createdMarker.position.lat}], [${createdMarker.position.lng}]`)
      // call map position
    },
    addMarker: function addMarker() {
      this.markers.pop()
      this.markers.push({
        position: { lat: 48.8538302, lng: 2.2982161 },
        opacity: 1,
        draggable: true,
        enabled: true,
        clicked: 0,
        rightClicked: 0,
        dragended: 0,
        ifw: true,
        ifw2text: "This text is bad please change me :( "
      });
      return this.markers[this.markers.length - 1];
    }
  },
  created() {
    // get query id from URL params
    var post_id = this.$router.currentRoute.query.id

    if(post_id) {
      // this.postForm = this.getPostbyId(post_id)
      var posts = this.getPosts()
      console.log(posts)
      var index = posts.findIndex( p => p._id == post_id )

      if(index != -1) {
        console.log(posts[index]);
        this.postForm = posts[index];
      }
    }


  }
}
</script>

<style lang="css">
</style>
