<template>
    <div class="card mx-2 my-2 mw-100">
        <div class="card-body">
            <h4 class="card-title">
                {{isToday ?  t("todayCity", { city: cityName, day: t(days[dayName]) }) : t(days[dayName]) }}
            </h4>
            <div>
                <img
                :src="'https://openweathermap.org/img/wn//'+day.weather[0].icon+'@4x.png'"
                alt="weather-icon"
                class="img-thumbnail"
                />
            </div>
            <div class="card-text">
                <p class="fw-bolder fs-4">{{ t((day.weather[0].main).toLowerCase()) }}</p>
                <p class="fw-bolder">{{ t("night", { temp: day.temp.night }) }}</p>
                <p class="fw-bolder">{{ t("day", { temp: day.temp.day }) }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { useI18n } from "vue-i18n";

export default {
      name: "Card",
    props: {
        day: Object,
        isToday: Boolean,
        cityName: String,
        dayName: Number
    },
    data() {
        return {
            days: ["sun", "mon", "tues", "wed",
                "thu", "fri", "sat"],
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
.card {
    min-width: 15rem;
}
</style>