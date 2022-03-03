<template>
    <div class="add-city-form">
        <h2>{{$t("searchTitle")}}</h2>
        <form>
            <div class="input-group mb-3">
                <input type="search" class="search-input"
                v-model="cityName" name="cityName"
                :placeholder="$t('enterCity')" :value="cityName"/>
            </div>
            <input type="submit" @click.prevent="search" class="btn btn-primary"
            :value="$t('add')" :disabled="!cityName"/>
        </form>
    </div>
</template>

<script>
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
    }
}
</script>

<style lang="scss" scoped>

</style>