<template>
    <div class="sky position-absolute mx-5">
        <span class="sun sunshine position-absolute"></span>
        <span class="sun position-absolute"></span>
    </div>
</template>

<style lang="scss" scoped>
.sky {
    width: 250px;
    height: 250px;
    padding: 15px;
    z-index: -1;
}
.sun {
    width: 120px;
    height: 120px;
    background: linear-gradient(to right, #fcbb04, #fffc00);
    border-radius: 100%;
    &.sunshine {
    animation: sunshines 2s infinite;
    }
}
@keyframes sunshines {
    0% {
        transform: scale(1);
        opacity: 0.6;
    }
    100% {
        transform: scale(1.4);
        opacity: 0;
    }
}

</style>