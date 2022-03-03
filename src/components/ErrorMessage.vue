<template>
    <transition name="fade" appear>
        <div class="alert alert-danger" v-show="getError">
            <p>{{ t("errorMessage")}}</p>
        </div>
    </transition>
</template>

<script>
import { mapGetters } from "vuex";
import { useI18n } from "vue-i18n";

export default {
      name: "ErrorMessage",
      computed: {
          ...mapGetters(["getError"])
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
.fade-enter, .fade-leave-to {
    opacity: 0;
}
.fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
}
</style>
