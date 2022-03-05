<template>
    <div class="alert alert-danger animate__animated animate__bounceIn" v-show="getError">
        {{ t("errorMessage")}}
    </div>
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

