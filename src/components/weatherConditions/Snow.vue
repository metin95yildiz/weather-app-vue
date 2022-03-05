<template>
    <div class="snowflakes">
        <div class="snowflake">
        ❅
        </div>
        <div class="snowflake">
        ❅
        </div>
        <div class="snowflake">
        ❆
        </div>
        <div class="snowflake">
        ❄
        </div>
        <div class="snowflake">
        ❅
        </div>
        <div class="snowflake">
        ❆
        </div>
        <div class="snowflake">
        ❄
        </div>
        <div class="snowflake">
        ❅
        </div>
        <div class="snowflake">
        ❆
        </div>
        <div class="snowflake">
        ❄
        </div>
    </div>
</template>

<style lang="scss" scoped>
.snowflake {
    color: #fff;
    font-size: 1em;
    text-shadow: 0 0 1px #000;
    position:absolute;
    top:0%;
    z-index:-1;
    user-select:none;
    cursor:default;
    animation-name:snowflakes-fall, snowflakes-shake;
    animation-duration:10s, 3s;
    animation-timing-function:linear, ease-in-out;
    animation-iteration-count:infinite,  infinite;
    animation-play-state:running, running;
    &:nth-of-type(0) {
        left:1%;
        animation-delay:0s, 0s
    }
    &:nth-of-type(1){
        left:10%;
        animation-delay:1s, 1s
    }
    &:nth-of-type(2){
        left:20%;
        animation-delay:6s, 0.5s
    }
    &:nth-of-type(3){
        left:30%;
        animation-delay:4s, 2s
    }
    &:nth-of-type(4){
        left:40%;
        animation-delay:2s, 2s
    }
    &:nth-of-type(5){
        left:50%;
        animation-delay:8s, 3s
    }
    &:nth-of-type(6){
        left:60%;
        animation-delay:6s, 2s
    }
    &:nth-of-type(7){
        left:70%;
        animation-delay:2.5s, 1s
    }
    &:nth-of-type(8){
        left:80%;
        animation-delay:1s, 0s
    }
    &:nth-of-type(9){
        left:90%;
        animation-delay:3s, 1.5s
    }
}

@keyframes snowflakes-fall{
    0%{
        top:-10%
    }
    100%{
        top:100%
        }
    }
@keyframes snowflakes-shake{
    0%{
        transform:translateX(0px);
    }
    50%{
        transform:translateX(80px);
    }
    100%{
        transform:translateX(0px);
    }
}
</style>