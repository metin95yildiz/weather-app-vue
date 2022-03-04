<template>
    <Header />
  <div class="container justify-content-center">
    <SearchCity />
    <ErrorMessage />
    <CityList />
  </div>
  <footer>
    <div class="mx-4 mw-50">
        <h1>Weather App</h1>
    </div>
  </footer>
</template>

<script>
import SearchCity from './components/SearchCity';
import CityList from "./components/CityList";
import Header from "./components/Header";
import ErrorMessage from "./components/ErrorMessage";

import { useI18n } from 'vue-i18n';
export default {
  name: 'App',
  components: {
    SearchCity,
    CityList,
    Header,
    ErrorMessage
  },
  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: 'local'
    })
    return { t }
  }
}
</script>

<style lang="scss">
* {
      &::-webkit-scrollbar {
    width: 1rem;
    }
    &::-webkit-scrollbar-track {
        background: rgb(128, 128, 128, 0.5);
    }
    &::-webkit-scrollbar-thumb {
        background: rgb(233, 233, 233);
        border-radius: 1rem;
    }
}
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: #151616;
    background-image: url("https://source.unsplash.com/random/?nature");
    background-repeat: no-repeat;
    background-size: cover;
    text-align: center;
    footer {
      display: inline-block;
      bottom: 0;
      background-color: rgb(128, 128, 128, 0.5);
      width: 100%;
    }
  }
</style>
