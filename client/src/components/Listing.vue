<template>
  <div class="">
    <h1>Listing</h1>
    <button class="ui green basic button" @click="createNewListing">New</button>

    <div class="ui card" v-for="post in posts">
      <div class="image">
        <img src="/images/avatar2/large/kristy.png">
      </div>
      <div class="content">
        <a class="header">{{ post.title }}</a>
        <div class="meta">
          <span class="date">Posted on {{ post.created_at }}</span>
        </div>
        <div class="description">
          <p> {{ post.description }} </p>
          <p>
            <button class="yellow circular ui icon button" @click="editListing(post._id)">
              <i class="write icon"></i>
            </button>
            <button class="red circular ui icon button" @click="deleteListing(post._id)">
              <i class="remove icon"></i>
            </button>

          </p>
        </div>
      </div>
      <div class="extra content">
        <a>
          <i class="marker icon"></i>
          {{ post.city }}
        </a>

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
