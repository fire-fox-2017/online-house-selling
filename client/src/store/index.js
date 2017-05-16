import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  houses: [],
  newHouse: {
    title: '',
    description: '',
    price: '',
    image: '',
    address: '',
  }
}

const mutations = { // untuk merubah kondisi state
  GET_HOUSES(state, payload) {
    state.houses = payload
  },
  ADD_HOUSE(state, payload) {
    state.houses.push(payload)
  },
  DEL_HOUSE(state, payload) {
    let houseIdx = state.houses.findIndex(val => val._id === payload);
    state.houses.splice(houseIdx, 1);
    // console.log('state.houses', state.houses.findIndex(val => val._id === payload))
  },
  UPDATE_HOUSE(state, house) {
    state.houses.splice(state.houses.indexOf(house), 1, house);
  },
  GET_ONE(state, house) {
    state.newHouse = house
  }
}

const actions = { // untuk melakukan req ke db n commit mutations
  getHouses({commit}) {
    axios.get(`http://localhost:3000/api/house`).then(res => {
      console.log('GET_HOUSES ', res.data.houses);
      commit('GET_HOUSES', res.data.houses);
    })
    .catch(err => {
      console.log(err);
    })
  },
  addHouse({commit}, house) {
    axios.post(`http://localhost:3000/api/house/create`, {
      title: house.title,
      description: house.description,
      price: house.price,
      image: house.image,
      address: house.address
    }).then(res => {
      window.location.href = '#/'
      console.log('ADD HOUSE ', res.data.house);
      commit('ADD_HOUSE', res.data.house);
    })
  },
  deleteHouse({commit}, houseId) {
    axios.delete(`http://localhost:3000/api/house/delete/${houseId}`)
    .then(res => {
      console.log('DEL_HOUSE', res.data.done);
      commit('DEL_HOUSE', houseId);
    })
    .catch(err => {
      console.log(err);
    })
  },
  getOneHouse({commit}, house) {
    commit('GET_ONE', house)
  }
}

const getters = { // untuk me return state
  houses(state) {
    return state.houses;
  },
  newHouse(state) {
    return state.newHouse;
  }
}



export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})