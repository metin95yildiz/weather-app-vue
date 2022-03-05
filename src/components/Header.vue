<template>
    <header>
        <nav class="navbar justify-content-between">
            <Time />
            <div class="float-end mx-4">
                <select v-model="locale"  class="form-select text-uppercase">
                    <option v-for="lang in langs" :key="lang" :value="lang">
                        {{lang}}
                    </option>

                </select>
            </div>
        </nav>
    </header>
</template>

<script>
import Time from "./Time.vue";
import i18n from "../i18n";

export default {
    name: "Header",
    components: {
        Time
    },
    data() {
        return {
            langs: ["en", "fr", "de", "jp", "tr"],
            locale: i18n.global.locale

        }
    }
}
</script>

<style lang="scss" scoped>
    header {
      display: inline-block;
      top: 0;
      background-color: rgb(128, 128, 128, 0.5);
      width: 100%;
    }
</style>