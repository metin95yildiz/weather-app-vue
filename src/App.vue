<template>
    <Header />
  <div class="container justify-content-center">
    <SearchCity />
    <ErrorMessage />
    <CityList />
  </div>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #151616;
  background-image: url("https://source.unsplash.com/random/?nature");
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
}
</style>
