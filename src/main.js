import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import VueI18n from "vue-i18n";
import { en, tr, jp, fr, de} from "./locales"

const i18n = new VueI18n({
    locale: "en",
    messages: {
        en,
        de,
        fr,
        jp,
        tr
    }
  })

createApp(App).use( i18n, store ).mount('#app')
