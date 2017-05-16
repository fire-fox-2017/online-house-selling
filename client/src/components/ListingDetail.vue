<template>
  <div class="detail-container">
    <button class="ui button" @click="backToListing">
      Back
    </button>

    <h3>{{ post.title }}</h3>
    <div class="ui segment">
      <p>{{ post.description }}</p>

      <p>{{ markers }}</p>
      {{ center }}
    </div>

    <button class="ui green basic button" @click="getPosition">get position</button>


    <gmap-map
      :center="center"
      :zoom="17"
      style="width: 500px; height: 300px"
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
  data () {
    return {
      post: {
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
  methods: {
    ...mapGetters([
      'getPosts'
    ]),
    getPosition(){
      console.log(VueGoogleMaps.Map);
    },
    backToListing () {
      this.$router.push('/')
    }

  },
  created () {
    var post_id = this.$router.currentRoute.query.id


    if(post_id) {
      // this.postForm = this.getPostbyId(post_id)
      var posts = this.getPosts()
      // console.log(posts)
      var index = posts.findIndex( p => p._id == post_id )
      // console.log("post_id", post_id)
      // console.log(index)
      if(index != -1) {
        console.log("here")

        console.log(posts[index]);
        this.post = posts[index];
      }
    }
  }

}
</script>

<style scoped>
</style>
