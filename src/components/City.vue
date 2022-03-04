<template>
      <li class="city list-group-item rounded my-2 animate__animated animate__fadeInLeft" ref="cities" :key="city.name">
          <div class="city-name position-relative">
              <h2 class="fw-bolder">{{city.name}}</h2>
              <button class="position-absolute border-0 top-0 end-0" :title="t('removeCity')" @click="remove(city.name)"></button>
          </div>
          <div class="d-flex current-weather">
              <Current :current="city.details.current"
              :timezone="city.details.timezone"/>
          </div>
          <div class="d-flex weekly-forecast overflow-auto">
            <Card v-for="(day, index) in city.details.daily" :key="index"
            :day="day" :cityName="city.name" :isToday="index === 0 ? true : false"
            :dayName="new Date(day.dt*1000).getDay()"/>
          </div>
      </li>
</template>

<script>
import Card from "./Card.vue";
import Current from "./Current.vue";
import { useI18n } from "vue-i18n";

export default {
    name: "City",
    props: {
        city: Object
    },
    components: {
      Card,
      Current
    },
    methods: {
      remove(value){
        this.$refs.cities.classList.add("animate__fadeOutLeft");
        setTimeout(() => { this.$store.dispatch("removeCityData", {
          city: value
        })},1000)
      }
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

<style lang="scss" scoped>
li.city {
  background-color: rgb(128, 128, 128, 0.5);
  .city-name {
      button{
            height: 2.5rem;
            width: 2.5rem;
            background-color: rgb(0, 0, 0, 0);
            background-image: url("../assets/remove.svg");
            background-position: center;
            background-repeat: no-repeat;
            background-size: 2.5rem;
            opacity: 0.5;
            transition: opacity 0.3s;
            &:hover {
              opacity: 1;
            }
      }
  }
}
</style>
