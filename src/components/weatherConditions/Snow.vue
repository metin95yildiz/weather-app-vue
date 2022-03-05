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
        ❅
        </div>
        <div class="snowflake">
        ❄
        </div>
    </div>
</template>

<style lang="scss" scoped>
@mixin animate($left, $delay){
    left:$left;
    animation-delay:$delay
}

.snowflake {
    color: #fff;
    font-size: 1rem;
    text-shadow: 0 0 1px #000;
    position:absolute;
    top:-5%;
    z-index:-1;
    user-select:none;
    cursor:default;
    animation-name:snowflakes-fall, snowflakes-shake;
    animation-duration:10s, 3s;
    animation-timing-function:linear, ease-in-out;
    animation-iteration-count:infinite,  infinite;
    animation-play-state:running, running;
    &:nth-of-type(0) {
        @include animate(1%, (0s, 0s));
    }
    &:nth-of-type(1){
        @include animate(5%, (1s, 1s));
    }
    &:nth-of-type(2){
        @include animate(10%, (6s, 0.5s));
    }
    &:nth-of-type(3){
        @include animate(15%, (4s, 2s));
    }
    &:nth-of-type(4){
        @include animate(20%, (2s, 2s));
    }
    &:nth-of-type(5){
        @include animate(25%, (8s, 3s));
    }
    &:nth-of-type(6){
        @include animate(30%, (6s, 2s));
    }
    &:nth-of-type(7){
        @include animate(35%, (2.5s, 1s));
    }
    &:nth-of-type(8){
        @include animate(40%, (1s, 0s));
    }
    &:nth-of-type(9){
        @include animate(45%, (3s, 1.5s));
    }
    &:nth-of-type(10) {
        @include animate(50%, (1s, 0.5s));
    }
    &:nth-of-type(11){
        @include animate(55%, (3s, 2s));
    }
    &:nth-of-type(12){
        @include animate(60%, (5s, 1.5s));
    }
    &:nth-of-type(13){
        @include animate(65%, (6s, 4s));
    }
    &:nth-of-type(14){
        @include animate(70%, (3s, 3s));
    }
    &:nth-of-type(15){
        @include animate(75%, (8s, 3s));
    }
    &:nth-of-type(16){
        @include animate(80%, (6s, 2s));
    }
    &:nth-of-type(17){
        @include animate(85%, (6.5s, 1s));
    }
    &:nth-of-type(18){
        @include animate(90%, (1s, 0s));
    }
    &:nth-of-type(19){
        @include animate(95%, (3s, 2s));
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