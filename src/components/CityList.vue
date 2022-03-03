<template>
        <ul class="city-list" v-if="getCities" @after-enter="afterEnter">
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
          afterEnter() {
              this.$store.dispatch("getCityData")
          }
      }
}
</script>

<style lang="scss" scoped>

</style>