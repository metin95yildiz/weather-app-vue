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
                    left:10%;
                    @include raindrops;
                }
                &:nth-of-type(2){
                    left:20%;
                    @include raindrops;
                }
                &:nth-of-type(3){
                    left:30%;
                    @include raindrops;
                }
                &:nth-of-type(4){
                    left:40%;
                    @include raindrops;
                }
                &:nth-of-type(5){
                    left:50%;
                    @include raindrops;
                }
                &:nth-of-type(6){
                    left:60%;
                    @include raindrops;
                }
                &:nth-of-type(7){
                    left:70%;
                    @include raindrops;
                }
                &:nth-of-type(8){
                    left:80%;
                    @include raindrops;
                }
                &:nth-of-type(9){
                    left:90%;
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
                    right:10%;
                    @include raindrops;
                }
                &:nth-of-type(2){
                    right:20%;
                    @include raindrops;
                }
                &:nth-of-type(3){
                    right:30%;
                    @include raindrops;
                }
                &:nth-of-type(4){
                    right:40%;
                    @include raindrops;
                }
                &:nth-of-type(5){
                    right:50%;
                    @include raindrops;
                }
                &:nth-of-type(6){
                    right:60%;
                    @include raindrops;
                }
                &:nth-of-type(7){
                    right:70%;
                    @include raindrops;
                }
                &:nth-of-type(8){
                    right:80%;
                    @include raindrops;
                }
                &:nth-of-type(9){
                    right:90%;
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
        height: 120px;
        pointer-events: none;
        animation: raindrop 0.5s linear infinite;
        .stem {
            width: 1px;
            height: 60%;
            margin-left: 7px;
            background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.25));
            animation: stem 0.5s linear infinite;
            animation-delay: (randomHundred()/100) *1s;
            animation-duration: (0.5 + randomHundred()/100)*1s;
        }
        .splat {
            width: 15px;
            height: 10px;
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
  75% {
    transform: translateY(90vh);
  }
  100% {
    transform: translateY(90vh);
  }
}

@keyframes stem {
  0% {
    opacity: 1;
  }
  75% {
    opacity: 0;
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
