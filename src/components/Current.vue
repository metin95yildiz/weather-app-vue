<template>
        <div class="current container bg-light my-4 fs-5 rounded w-100">
            <div class="row">
                <div class="col">
                    <p>{{ t("pressure", { value: current.pressure }) }}</p>
                </div>
                <div class="col">
                    <p>{{ t("humidity", { value: current.humidity }) }}</p>
                </div>
                <div class="col">
                    <p>{{ t("windSpeed", { value: current.wind_speed }) }}</p>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <p>{{ t("sunrise", { value: formatTime(current.sunrise, timezone) }) }}</p>
                </div>
                <div class="col">
                    <p>{{ t("sunset", { value: formatTime(current.pressure, timezone) }) }}</p>
                </div>
            </div>
        </div>
</template>

<script>
import { useI18n } from "vue-i18n";
import { DateTime } from "luxon";

export default {
      name: "Current",
        props: {
            current: Object,
            timezone: String
        },
        methods: {
            formatTime(date, timezone){
                const localDate = DateTime.fromSeconds(date).setZone(timezone);
                const hours = localDate.toFormat("hh");
                const minutes = localDate.toFormat("mm");
                const amPm  = localDate.toFormat("a");
                return `${hours}:${minutes} ${amPm}`;
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
