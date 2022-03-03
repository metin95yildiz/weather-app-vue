<template>
    <div class="card">
        <div class="card-body">
            <h4 class="card-title">
                {{isToday ?  $t("todayCity", { city: cityName, day: $t(dayName) }) : $t(dayName) }}
            </h4>
            <div class="img-thumbnail">
                <img
                src="https://openweathermap.org/img/wn//{{day.weather[0].icon}}@4x.png`"
                alt="weather-icon"
                class="weather-icon"
                />
            </div>
            <div class="card-text">
                <p><span>{{ $t((day.weather[0].main).toLowerCase()) }}</span></p>
                <p>{{ $t("night", { temp: day.temp.night }) }}</p>
                <p>{{ $t("day", { temp: day.temp.day }) }}</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
      name: "Card",
    props: {
        day: Object,
        isToday: Boolean
    },
    data() {
        return {
            days: ["sun", "mon", "tues", "wed",
                "thu", "fri", "sat"],
            dayName: this.days[new Date(this.day.dt*1000).getDay()]
        }
    }
}
</script>

<style lang="scss" scoped>

</style>