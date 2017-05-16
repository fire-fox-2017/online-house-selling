<template>
  <div class="">
    <h1>Listing</h1>
    <button class="ui green basic button" @click="createNewListing">New</button>

    <div class="ui grid"><div class="row"></div> </div>
<div class="ui cards">

    <div class="ui card" v-for="post in posts">
      <a class="image" @click="seeDetail(post._id)">
        <img v-bind:src="post.picture">
      </a>
      <div class="content">
        <a class="header" @click="seeDetail(post._id)">{{ post.title }}</a>
        <div class="meta">
          <span class="date">Posted on {{ post.created_at }}</span>
        </div>
        <div class="description">
          <p> {{ post.description }} </p>
          <p>
            <button class="mini yellow circular ui icon button right floated" @click="editListing(post._id)">
              <i class="write icon"></i>
            </button>
            <button class="mini red circular ui icon button right floated" @click="deleteListing(post._id)">
              <i class="remove icon"></i>
            </button>

          </p>
        </div>
      </div>
      <div class="extra content">
        <a>
          <i class="marker icon"></i>
          {{ post.city }}, {{ post.country }}
        </a>

      </div>
    </div>
</div>


  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters({
    count: 'getCount',
    posts: 'getPosts'
  }),
  methods: {
    ...mapActions([
      'increment',
      'getPostsfromDB',
      'deletePost'
    ]),
    seeDetail(post_id) {
      console.log('seeDetail', post_id)
      this.$router.push({
        name: 'ListingDetail',
        query: { id: post_id }
      })    },
    createNewListing() {
      this.$router.push('listingform')
    },
    editListing(post_id) {
      console.log('editListing', post_id)
      this.$router.push({
        name: 'ListingForm',
        query: { id: post_id }
      })
    },
    deleteListing(post_id) {
      console.log('deleteListing', post_id)
      this.deletePost(post_id)
    }
  },
  created () {
    this.getPostsfromDB()
  }

}
</script>

<style lang="css">
</style>
