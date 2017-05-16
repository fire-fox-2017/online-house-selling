import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex, VueAxios, axios)

// const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  state: {
    count: 0,
    posts: [],
    postForm: {
      _id: null,
      title: '',
      description: '',
      price: null,
      address: '',
      city: '',
      country: ''
    }
  },
  getters: {
    getCount (state) {
      return state.count
    },
    getPosts (state) {
      return state.posts
    },
    getPostForm (state) {
      return state.postForm
    },
    getPostbyId: (state, post_id) => {
      console.log(`****** ${post_id}`)
      console.log(post_id)
      console.log(state.posts)

      var index = state.posts.findIndex( p => p._id == post_id )

      console.log('getPostbyId', index)
      return state.posts[index];
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    assignPostsfromDB (state, data) {
      state.posts = data
      console.log('assignPostsfromDB', state.posts)
    },
    createNewPost (state, post) {
      state.posts.push(post)
      console.log('createNewPost', state.posts)
    },
    updatePost (state, post) {
      var index = state.posts.findIndex( p => p._id == post._id )
      if(index != -1 )
        state.posts.splice(index,1,post)

      console.log('updatePost', post)
    },
    deletePost (state, post) {
      console.log("deletePost", post)
      var index = state.posts.findIndex( p => p._id == post._id )
      if(index != -1 )
        state.posts.splice(index,1)

      console.log('deletePost', post)    }
  }, // end of mutations
  actions: {
    increment ({ commit }) {
      commit('increment')
    },
    getPostsfromDB ({ commit }) {
      axios.get('http://localhost:3000/api/posts')
      .then(response => {
        commit('assignPostsfromDB', response.data )
      })
      .catch(err => {
        console.log(err)
      })
    },
    savePost ({ commit }, newPost ) {
      console.log('savePost', newPost)

      if(newPost._id) {
        console.log("here")
        axios.put(`http://localhost:3000/api/posts/${newPost._id}`, {
          title: newPost.title,
          description: newPost.description,
          price: newPost.price,
          address: newPost.address,
          city: newPost.city,
          country: newPost.country
        })
        .then(response => {
          console.log("savePost - update ", response.data)
          commit('updatePost', response.data)
        })
        .catch(err => {
          console.log(err)
        })


      }
      else {
        axios.post('http://localhost:3000/api/posts', {
          title: newPost.title,
          description: newPost.description,
          price: newPost.price,
          address: newPost.address,
          city: newPost.city,
          country: newPost.country
        })
        .then(response => {
          console.log(response.data)
          commit('createNewPost', response.data)
        })
        .catch(err => {
          console.log(err)
        })
      }
    },
    deletePost ({ commit }, post_id){
      axios.delete(`http://localhost:3000/api/posts/${post_id}`)
      .then(response => {
        commit('deletePost', response.data)
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
})

export default store
