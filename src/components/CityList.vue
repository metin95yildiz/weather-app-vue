<template>
        <ul class="city-list list-group my-5 overflow-auto">
            <City v-for="city in getCities" :city="city" :key="city.name" />
        </ul>
</template>

<script>
import City from "./City.vue"
import { mapGetters } from "vuex";

export default {
      name: "CityList",
      components: {
          City
      },
      computed: {
          ...mapGetters(["getCities"])
      },
      methods: {
          fetchData() {
              this.$store.dispatch("getCityData")
          }
      },
      created() {
          this.fetchData();
      }
}
</script>

<style lang="scss" scoped>
.city-list {
    height: 30rem;
}
</style>