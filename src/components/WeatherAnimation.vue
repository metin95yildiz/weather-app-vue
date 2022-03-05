<template>
    <Clear v-if="weather === 'Clear'" />
    <Rain v-else-if="weather === 'Rain'" />
    <Snow v-else-if="weather === 'Snow'" />
    <Clouds v-else-if="weather === 'Clouds'" />
</template>

<script>
import Clear from "./weatherConditions/Clear.vue";
import Rain from "./weatherConditions/Rain.vue";
import Snow from "./weatherConditions/Snow.vue";
import Clouds from "./weatherConditions/Clouds.vue";

export default {
    name: "Header",
    components: {
        Clear,
        Rain,
        Snow,
        Clouds
    },
    props: {
        weather: String
    }
}

</script>