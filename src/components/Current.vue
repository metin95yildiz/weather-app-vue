<template>
        <div class="current">
            <div class="current-item">
                <p>{{ $t("pressure", { value: current.pressure }) }}</p>
            </div>
            <div class="current-item">
                <p>{{ $t("humidity", { value: current.humidity }) }}</p>
            </div>
            <div class="current-item">
                <p>{{ $t("windSpeed", { value: current.wind_speed }) }}</p>
            </div>
            <div class="current-item">
                <p>{{ $t("sunrise", { value: current.pressure }) }}</p>
            </div>
            <div class="current-item">
                <p>{{ $t("sunset", { value: current.pressure }) }}</p>
            </div>
        </div>
</template>

<script>


export default {
      name: "Current",
        props: {
            current: Object,
            timezone: String
        }
}
</script>

<style lang="scss" scoped>

</style>
