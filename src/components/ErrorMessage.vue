<template>
    <transition name="fade" appear>
        <div class="alert alert-danger" v-show="getError">
            <p>{{ $t("errorMessage")}}</p>
        </div>
    </transition>
</template>

<script>
import { mapGetters } from "vuex";

export default {
      name: "ErrorMessage",
      computed: {
          ...mapGetters(["getError"])
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
