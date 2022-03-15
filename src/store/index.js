import { createStore } from 'vuex';
import VuexPersistence from 'vuex-persist';
import axios from 'axios';
import i18n from '../i18n';

const API_KEY = "4f2ecdfde44ef77b912eae41ecfa42af"; // API Key

const lang = i18n.global.locale;

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  reducer: (state) => ({ cities: state.cities })
})

export default createStore({
  state: {
    cities: [],
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
      return Object.values(state.cities).sort((cityA, cityB) => {
        return new Date(cityB.createdAt) - new Date(cityA.createdAt)
      });
    },
    getError(state) {
      return state.error;
    },
  },
  actions: {
    searchCity({ commit }, { cityName }) {
      const searchCityUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&lang=${lang}`;
      axios.get(searchCityUrl).then(response => {
        const fetchDataUrl =  `https://api.openweathermap.org/data/2.5/onecall?lat=${response.data.coord.lat}&lon=${response.data.coord.lon}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`;
        axios.get(fetchDataUrl).then(res => {
          const city = {
            name: cityName,
            details: res.data,
            createdAt: new Date()
          };
          commit("addCity", city);
        })
      }).catch(error => {
        commit("setError", error);
      });

    },
    getCityData({ dispatch, state }){
      const cities = state.cities;
      if(cities) {
        Object.values(cities).map(city => (dispatch("updateCityData",
        {
          latitude: city.details.lat,
          longitude: city.details.lon,
          cityName: city.name,
          createdAt: city.createdAt
        })))
      }
    },
    updateCityData({ commit }, { latitude, longitude, cityName, createdAt }){
      const fetchDataUrl =   `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`;
      axios.get(fetchDataUrl).then(response => {
        const city = {
          name: cityName,
          details: response.data,
          createdAt
        };
        commit("updateCity", city);
      })
    },
    removeCityData({ commit }, { city }){
      commit("removeCity", city);
    },
  },
  plugins: [vuexLocal.plugin]
})
