<template>
    <transition-group name="slide">
        <li class="city">
            <div class="city-name">
                <h2>{{city.name}}</h2>
                <button class="remove-button" title="Remove city" @click="removeCity(city.name)"></button>
            </div>
            <div class="current-weather">
                <Current :current="city.details.current"
                :timezone="city.details.timezone"/>
            </div>
            <div class="weekly-forecast">
              <Card v-for="(day, index) in city.details.daily" :key="index"
              :day="day" :isToday="index === 0 ? true : false"/>
            </div>
        </li>
    </transition-group>
</template>

<script>
import Card from "./Card.vue";
import { mapMutations } from "vuex";
export default {
    name: "City",
    props: {
        city: Object
    },
    components: {
      Card
    },
    computed: {
      ...mapMutations("removeCity")
    }
}
</script>

<style lang="scss" scoped>
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
