<template>
    <div class="time-box">
        <div class="time">
            <span className="am-pm">
            </span>
        </div>
        <div class="date">
        </div>
    </div>
</template>

<script>
export default {
    name: "Time",
    data() {
        return {
            date: new Date()
        } 
    },
}
</script>

<style lang="scss" scoped>

</style>