<template>
    <div class="add-city-form row py-3 my-5 rounded">
        <h2>{{t("searchTitle")}}</h2>
        <form class="form-inline d-flex justify-content-center">
            <div class="fs-4">
                <input type="search" class="search-input rounded-start"
                v-model="cityName" name="cityName"
                :placeholder="'London, Tokyo, New York...'"/>
            </div>
            <input type="submit" @click.prevent="search" class="btn btn-primary rounded-end"
            :value="t('add')" :disabled="!cityName"/>
        </form>
    </div>
</template>

<script>
import { useI18n } from "vue-i18n";

export default {
    name: "SearchCity",
    data(){
        return {
            cityName: ""
        }
    },
    methods: {
        search(){
            this.$store.dispatch("searchCity", {
                cityName: this.cityName
            })
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
.add-city-form {
    background-color: rgb(128, 128, 128, 0.5);
}
</style>