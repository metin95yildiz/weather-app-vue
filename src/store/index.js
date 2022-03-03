import { createStore } from 'vuex';
import VuexPersistence from 'vuex-persist';
import axios from 'axios';

const API_KEY = "4f2ecdfde44ef77b912eae41ecfa42af"; // API Key

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  reducer: (state) => ({ cities: state.cities })
})

export default createStore({
  state: {
    cities: {},
    error: ""
  },
  mutations: {
    addCity(state, data){
      state.cities = { ...state.cities, [data.name]: data }
    },
    updateCity(state, data){
      state.cities = {
        ...state.cities,
        [data.name]: { ...state.cities[data.name], "details": data.details }
      }
    },
    removeCity(state, city){
      delete state.cities[city]
    },
    setError(state, error){
      state.error = error;
    }
  },
  getters: {
    getCities(state) {
      return state.cities;
    },
    getError(state) {
      return state.error;
    },
  },
  actions: {
    searchCity({ commit }, { cityName }) {
      const searchCityUrl =  `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;
      let latitude = "";
      let longitude = "";
      const fetchDataUrl =  `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`;
      axios.get(searchCityUrl).then(response => {
        latitude = response.data.coord.lat;
        longitude = response.data.coord.lon;
      }).catch(error => {
        commit("setError", error);
      });
      axios.get(fetchDataUrl).then(response => {
        const city = {
          name: cityName,
          details: response.data,
          createdAt: new Date()
        };
        commit("addCity", city);
      })
    },
    getCityData({ dispatch, state }){
      const cities = state.cities;
      if(cities) {
        Object.values(cities).map(city => (dispatch("updateCityData",
        { latitude: city.details.lat, longitude: city.details.lon, cityName: city.name })))
      }
    },
    updateCityData({ commit }, { latitude, longitude, cityName }){
      const fetchDataUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`;
      axios.get(fetchDataUrl).then(response => {
        const city = {
          name: cityName,
          details: response.data
        };
        commit("updateCity", city);
      })
    }
  },
  plugins: [vuexLocal.plugin]
})
