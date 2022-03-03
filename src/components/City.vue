<template>
    <transition-group name="slide">
        <li class="city list-group-item rounded" :key="city.name">
            <div class="city-name position-relative">
                <h2 class="fw-bolder">{{city.name}}</h2>
                <button class="position-absolute border-0 top-0 end-0" title="Remove city" @click="remove(city.name)"></button>
            </div>
            <div class="d-flex current-weather">
                <Current :current="city.details.current"
                :timezone="city.details.timezone"/>
            </div>
            <div class="d-flex weekly-forecast overflow-auto">
              <Card v-for="(day, index) in city.details.daily" :key="index"
              :day="day" :cityName="city.name" :isToday="index === 0 ? true : false"/>
            </div>
        </li>
    </transition-group>
</template>

<script>
import Card from "./Card.vue";
import Current from "./Current.vue";

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
        this.$store.dispatch("removeCityData", {
          city: value
        })
      }
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
.slide-enter, .slide-leave-active {
    opacity: 0;
}
.slide-enter-active {
    animation: slide-in 1s ease-out forwards;
    transition: opacity 0.5s;
}

.slide-leave-active {
    animation: slide-out 1s ease-out forwards;
    transition: opacity 0.5s;
}
.slide-move {
    transition: transform 1s;
}
@keyframes slide-in{
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0px)
  }
}
@keyframes slide-out{
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(20px)
  }
}
</style>
