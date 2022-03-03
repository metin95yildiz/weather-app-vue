<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <h1>Weather App</h1>
            </div>
            <div class="locale-changer">
                <select v-model="$i18n.locale">
                    <option v-for="lang in langs" :key="lang" :value="lang">
                        {{lang}}
                    </option>

                </select>
            </div>
            <Time />
        </nav>
    </header>
</template>

<script>
import Time from "./Time.vue";

export default {
    name: "Header",
    components: {
        Time
    },
    data() {
        return {
            langs: ["EN", "FR", "DE", "JP"]
        }
    }
}
</script>

<style lang="scss" scoped>
    header {
      display: inline-block;
      top: 0;
      background-color: rgb(128, 128, 128, 0.5);
      height: 5rem;
      width: 100%;
    }
</style>