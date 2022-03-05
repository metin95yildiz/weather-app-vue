<template>
    <div class="time-box bg-light float-start mx-4 p-2 rounded">
        <div v-if="day" class="animate__animated animate__jackInTheBox">
            <div class="time">
                {{hours}}:{{minutes}}
                <span class="am-pm">
                    {{amPm}}
                </span>
            </div>
            <div class="date">
                {{t(days[day])}}, {{locale ===  "jp" ? (year+"年"+monthFormat+"月"+date+"日")
                : date+" "+t(months[month])+" "+year}}
            </div>
        </div>
        <div class="spinner-border text-dark" role="status" v-else>
        </div>
    </div>
</template>

<script>
import { useI18n } from "vue-i18n";
import i18n from "../i18n";

export default {
    name: "Time",
    data() {
        return {
            date: "",
            hours: "",
            minutes: "",
            amPm: "",
            days: ["sun", "mon", "tues", "wed",
                "thu", "fri", "sat"],
            day: "",
            months: ["january", "february", "march", "april", "may", "june",
                "july", "august", "september", "october", "november", "december"],
            month: "",
            year: "",
            locale: i18n.global.locale,
            monthFormat: ""
        } 
    },
    methods: {
        currentTime(){
            const today = new Date();
            this.date = today.getDate();
            const minutes = today.getMinutes();
            const month = today.getMonth();
            this.month = month;
            this.day = today.getDay();
            const hours = today.getHours();
            const hoursFormat = this.locale=="en" ? hours >= 13 ? hours%12 : hours : hours;
            this.hours= hoursFormat < 10 ? "0"+hoursFormat : hoursFormat;
            this.amPm  = this.locale=="en" ? (hours < 12 ? "AM" : "PM") : this.locale=="de" ? "Uhr" : "";
            this.minutes = minutes < 10 ? "0" + minutes : minutes;
            this.year = today.getFullYear();
            this.monthFormat = month < 10 ? "0"+month : month;
        }
    },
    created(){
        setInterval(this.currentTime, 1000)
    },
    setup(){
        const { t } = useI18n({
        inheritLocale: true,
        useScope: 'local'
        })

        return { t }
    }
}
</script>
