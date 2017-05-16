import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    houses: []
  },
  getters: {
    getAllHouses(state){
      return state.houses
    },
    getOneHouse(state, house){
      return state.houses[state.houses.indexOf(house)]
    }
  },
  mutations: {
    InsertHouses(state, houses){
      state.houses = houses
    },
    AddHouse(state, house){
      state.houses.push(house)
    },
    SpliceHouse(state, house){
      state.houses.splice(state.houses.indexOf(house),1)
    },
    UpdateHouse(state, houses){
      state.houses.splice(state.houses.indexOf(houses.old), 1, houses.new)
    }
  },
  actions: {
    GetHouses(context){
      Vue.axios.get('http://localhost:3000/houses')
      .then((response)=>{
        context.commit('InsertHouses', response.data)
      }).catch((err)=>{
        console.log(err);
      })
    },
    CreateHouse(context, house){
      Vue.axios.post('http://localhost:3000/houses',{
        title: house.title,
        address: house.address,
        price: house.price,
        bedrooms: house.bedrooms,
        bathrooms: house.bathrooms,
        buildingArea: house.buildingArea,
        landArea: house.landArea,
        coordinates: house.coordinates
      }).then((response)=>{
        context.commit('AddHouse', response.data)
      }).catch((err)=>{
        console.log(err);
      })
    },
    DeleteHouse(context, house){
      Vue.axios.delete('http://localhost:3000/houses/' + house._id)
      .then((response)=>{
        context.commit('SpliceHouse', house)
      }).catch((err)=>{
        console.log(err);
      })
    },
    EditHouse(context, house){
      Vue.axios.put('http://localhost:3000/houses/' + house._id, {
        title: house.title,
        address: house.address,
        price: house.price,
        bedrooms: house.bedrooms,
        bathrooms: house.bathrooms,
        buildingArea: house.buildingArea,
        landArea: house.landArea,
        coordinates: house.coordinates
      }).then((response)=>{
        context.commit('UpdateHouse',{
        new: response.data,
        old: house
      })
      }).catch((err)=>{
        console.log(err);
      })
    }
  }
})