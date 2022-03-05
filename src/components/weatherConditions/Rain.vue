<template>
    <div class="back-row">
        <div class="rain front-row w-100 h-100">
            <div class="raindrop">
                <div class="stem">
                </div>
                <div class="splat">
                </div>
            </div>
            <div class="raindrop">
                <div class="stem">
                </div>
                <div class="splat">
                </div>
            </div>
            <div class="raindrop">
                <div class="stem">
                </div>
                <div class="splat">
                </div>
            </div>
            <div class="raindrop">
                <div class="stem">
                </div>
                <div class="splat">
                </div>
            </div>
            <div class="raindrop">
                <div class="stem">
                </div>
                <div class="splat">
                </div>
            </div>
            <div class="raindrop">
                <div class="stem">
                </div>
                <div class="splat">
                </div>
            </div>
            <div class="raindrop">
                <div class="stem">
                </div>
                <div class="splat">
                </div>
            </div>
            <div class="raindrop">
                <div class="stem">
                </div>
                <div class="splat">
                </div>
            </div>
            <div class="raindrop">
                <div class="stem">
                </div>
                <div class="splat">
                </div>
            </div>
            <div class="raindrop">
                <div class="stem">
                </div>
                <div class="splat">
                </div>
            </div>
            <div class="raindrop">
                <div class="stem">
                </div>
                <div class="splat">
                </div>
            </div>
            <div class="raindrop">
                <div class="stem">
                </div>
                <div class="splat">
                </div>
            </div>
            <div class="raindrop">
                <div class="stem">
                </div>
                <div class="splat">
                </div>
            </div>
            <div class="raindrop">
                <div class="stem">
                </div>
                <div class="splat">
                </div>
            </div>
            <div class="raindrop">
                <div class="stem">
                </div>
                <div class="splat">
                </div>
            </div>
            <div class="raindrop">
                <div class="stem">
                </div>
                <div class="splat">
                </div>
            </div>
            <div class="raindrop">
                <div class="stem">
                </div>
                <div class="splat">
                </div>
            </div>
            <div class="raindrop">
                <div class="stem">
                </div>
                <div class="splat">
                </div>
            </div>
            <div class="raindrop">
                <div class="stem">
                </div>
                <div class="splat">
                </div>
            </div>
            <div class="raindrop">
                <div class="stem">
                </div>
                <div class="splat">
                </div>
            </div>
        </div>
        <div class="rain back-row w-100 h-100">
            <div class="raindrop">
                <div class="stem">
                </div>
                <div class="splat">
                </div>
            </div>
            <div class="raindrop">
                <div class="stem">
                </div>
                <div class="splat">
                </div>
            </div>
            <div class="raindrop">
                <div class="stem">
                </div>
                <div class="splat">
                </div>
            </div>
            <div class="raindrop">
                <div class="stem">
                </div>
                <div class="splat">
                </div>
            </div>
            <div class="raindrop">
                <div class="stem">
                </div>
                <div class="splat">
                </div>
            </div>
            <div class="raindrop">
                <div class="stem">
                </div>
                <div class="splat">
                </div>
            </div>
            <div class="raindrop">
                <div class="stem">
                </div>
                <div class="splat">
                </div>
            </div>
            <div class="raindrop">
                <div class="stem">
                </div>
                <div class="splat">
                </div>
            </div>
              <div class="raindrop">
                <div class="stem">
                </div>
                <div class="splat">
                </div>
            </div>
            <div class="raindrop">
                <div class="stem">
                </div>
                <div class="splat">
                </div>
            </div>
            <div class="raindrop">
                <div class="stem">
                </div>
                <div class="splat">
                </div>
            </div>
            <div class="raindrop">
                <div class="stem">
                </div>
                <div class="splat">
                </div>
            </div>
            <div class="raindrop">
                <div class="stem">
                </div>
                <div class="splat">
                </div>
            </div>
            <div class="raindrop">
                <div class="stem">
                </div>
                <div class="splat">
                </div>
            </div>
            <div class="raindrop">
                <div class="stem">
                </div>
                <div class="splat">
                </div>
            </div>
            <div class="raindrop">
                <div class="stem">
                </div>
                <div class="splat">
                </div>
            </div>
            <div class="raindrop">
                <div class="stem">
                </div>
                <div class="splat">
                </div>
            </div>
            <div class="raindrop">
                <div class="stem">
                </div>
                <div class="splat">
                </div>
            </div>
            <div class="raindrop">
                <div class="stem">
                </div>
                <div class="splat">
                </div>
            </div>
            <div class="raindrop">
                <div class="stem">
                </div>
                <div class="splat">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style lang="scss">

@function randomHundred(){
  @return floor(random() * 98 + 1)
  };
@function randomFive(){
  @return floor(random() * 4 + 2);
};

@mixin raindrops(){
    animation-delay: (randomHundred()/100) *1s;
    animation-duration: (0.5 + randomHundred()/100) *1s;
    bottom: (randomFive() + randomFive() - 1 + 100)/100;
}
.back-row {
    .rain {
        position: absolute;
        left: 0;
        z-index: -1;
        &.front-row {
            .raindrop {
                position: absolute;
                &:nth-of-type(0) {
                    left:1%;
                    @include raindrops;
                }
                &:nth-of-type(1){
                    left:5%;
                    @include raindrops;
                }
                &:nth-of-type(2){
                    left:10%;
                    @include raindrops;
                }
                &:nth-of-type(3){
                    left:15%;
                    @include raindrops;
                }
                &:nth-of-type(4){
                    left:20%;
                    @include raindrops;
                }
                &:nth-of-type(5){
                    left:25%;
                    @include raindrops;
                }
                &:nth-of-type(6){
                    left:30%;
                    @include raindrops;
                }
                &:nth-of-type(7){
                    left:35%;
                    @include raindrops;
                }
                &:nth-of-type(8){
                    left:40%;
                    @include raindrops;
                }
                &:nth-of-type(9){
                    left:45%;
                    @include raindrops;
                }
                &:nth-of-type(10) {
                    left:50%;
                    @include raindrops;
                }
                &:nth-of-type(11){
                    left:55%;
                    @include raindrops;
                }
                &:nth-of-type(12){
                    left:60%;
                    @include raindrops;
                }
                &:nth-of-type(13){
                    left:65%;
                    @include raindrops;
                }
                &:nth-of-type(14){
                    left:70%;
                    @include raindrops;
                }
                &:nth-of-type(15){
                    left:75%;
                    @include raindrops;
                }
                &:nth-of-type(16){
                    left:80%;
                    @include raindrops;
                }
                &:nth-of-type(17){
                    left:85%;
                    @include raindrops;
                }
                &:nth-of-type(18){
                    left:90%;
                    @include raindrops;
                }
                &:nth-of-type(19){
                    left:95%;
                    @include raindrops;
                }
            }
        }
        &.back-row {
            .raindrop {
                &:nth-of-type(0) {
                    right:1%;
                    @include raindrops;
                }
                &:nth-of-type(1){
                    right:5%;
                    @include raindrops;
                }
                &:nth-of-type(2){
                    right:10%;
                    @include raindrops;
                }
                &:nth-of-type(3){
                    right:15%;
                    @include raindrops;
                }
                &:nth-of-type(4){
                    right:20%;
                    @include raindrops;
                }
                &:nth-of-type(5){
                    right:25%;
                    @include raindrops;
                }
                &:nth-of-type(6){
                    right:30%;
                    @include raindrops;
                }
                &:nth-of-type(7){
                    right:35%;
                    @include raindrops;
                }
                &:nth-of-type(8){
                    right:40%;
                    @include raindrops;
                }
                &:nth-of-type(9){
                    right:45%;
                    @include raindrops;
                }
                &:nth-of-type(10) {
                    right:50%;
                    @include raindrops;
                }
                &:nth-of-type(11){
                    right:55%;
                    @include raindrops;
                }
                &:nth-of-type(12){
                    right:60%;
                    @include raindrops;
                }
                &:nth-of-type(13){
                    right:65%;
                    @include raindrops;
                }
                &:nth-of-type(14){
                    right:70%;
                    @include raindrops;
                }
                &:nth-of-type(15){
                    right:75%;
                    @include raindrops;
                }
                &:nth-of-type(16){
                    right:80%;
                    @include raindrops;
                }
                &:nth-of-type(17){
                    right:85%;
                    @include raindrops;
                }
                &:nth-of-type(18){
                    right:90%;
                    @include raindrops;
                }
                &:nth-of-type(19){
                    right:95%;
                    @include raindrops;
                }
            }
            z-index: -1;
            bottom: 60px;
            opacity: 0.5;
    }
}
    .raindrop {
        bottom: 100%;
        width: 15px;
        height: 150px;
        pointer-events: none;
        animation: raindrop 0.5s linear infinite;
        .stem {
            width: 1px;
            height: 60%;
            margin-left: 7px;
            background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.25));
            animation: stem 0.5s linear infinite;
            animation-delay: (randomHundred()/100) *1s;
            animation-duration: (0.5 + randomHundred()/100)*1s;
        }
        .splat {
            width: 15px;
            height: 15px;
            border-top: 2px dotted rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            opacity: 1;
            transform: scale(0);
            animation: splat 0.5s linear infinite;
            animation-delay: (randomHundred()/100) *1s;
            animation-duration: (0.5 + randomHundred()/100)*1s;
        }
    }
}


@keyframes raindrop {
  0% {
    transform: translateY(0vh);
  }
  100% {
    transform: translateY(90vh);
  }
}

@keyframes stem {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}


@keyframes splat {
  0% {
    opacity: 1;
    transform: scale(0);
  }
  80% {
    opacity: 1;
    transform: scale(0);
  }
  90% {
    opacity: 0.5;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(1.5);
  }
}
</style>
