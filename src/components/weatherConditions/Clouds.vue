<template>
    <div class="background-wrap pt-5 position-absolute">
        <div class="x1">
            <div class="cloud"></div>
        </div>

        <div class="x2">
            <div class="cloud"></div>
        </div>

        <div class="x3">
            <div class="cloud"></div>
        </div>

        <div class="x4">
            <div class="cloud"></div>
        </div>

        <div class="x5">
            <div class="cloud"></div>
        </div>
    </div>
</template>

<script>
</script>

<style lang="scss">
.background-wrap {
    bottom: 0;
	left: 0;
	right: 0;
	top: 0;
	z-index: -1;
    .x1 {
        animation: animateCloud 30s linear infinite;
        transform: scale(0.65);
    }
    .x2 {
        animation: animateCloud 15s linear infinite;
        transform: scale(0.3);
    }
    .x3 {
        animation: animateCloud 25s linear infinite;
        transform: scale(0.5);
    }
    .x4 {
        animation: animateCloud 10s linear infinite;
        transform: scale(0.4);
    }
    .x5 {
        animation: animateCloud 20s linear infinite;
        transform: scale(0.55);
    }
    .cloud {
	background: linear-gradient(rgb(121, 121, 121) 5%,rgb(83, 83, 83) 60%);
	filter: linear-gradient( rgb(121, 121, 121), rgb(83, 83, 83),0);
	border-radius: 100px;
	box-shadow: 0 8px 5px rgba(0, 0, 0, 0.1);
	height: 120px;
	position: relative;
	width: 350px;
    &::before, &::after {
        background: linear-gradient(rgb(121, 121, 121) 50%,rgb(83, 83, 83) 90%);
        content: '';
        position: absolute;
        z-indeX: -1;
    }
    &::after {
        border-radius: 100px;
        height: 100px;
        left: 50px;
        top: -50px;
        width: 100px;
    }
    &::before {
        border-radius: 200px;
        width: 180px;
        height: 180px;
        right: 50px;
        top: -90px;
    }
}

}

@keyframes animateCloud {
    0% {
        margin-left: -1000px;
    }
    100% {
        margin-left: 100%;
    }
}

</style>