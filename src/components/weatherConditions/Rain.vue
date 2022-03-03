<template>
    <div class="back-row">
        <div class="rain front-row">
            <div class="drop">
                <div class="stem">
                </div>
                <div class="splat">
                </div>
            </div>
            <div class="drop">
                <div class="stem">
                </div>
                <div class="splat">
                </div>
            </div>
            <div class="drop">
                <div class="stem">
                </div>
                <div class="splat">
                </div>
            </div>
            <div class="drop">
                <div class="stem">
                </div>
                <div class="splat">
                </div>
            </div>
        </div>
        <div class="rain back-row">
            <div class="drop">
                <div class="stem">
                </div>
                <div class="splat">
                </div>
            </div>
            <div class="drop">
                <div class="stem">
                </div>
                <div class="splat">
                </div>
            </div>
            <div class="drop">
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
$increment: Math.floor(Math.random() * 100 + 1);
$randoHundo: (Math.floor(Math.random() * 98 + 1));
$randomFive: (Math.floor(Math.random() * 4 + 2));


.back-row {
    .rain {
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
        &.front-row {
            .drop {
                animation-delay: "0." + $randoHundo +"s";
                animation-duration: 0.5 + $randoHundo + "s";
                position: absolute;
                left: $increment + "%";
                bottom: ($randoFive + $randoFive - 1 + 100) + "%";
            }
        }
        &.back-row {
            .drop {
                right: $increment + "%";
                bottom: ($randoFive + $randoFive - 1 + 100) + "%";
                animation-delay: "0." + $randoHundo +"s";
                animation-duration: 0.5 + $randoHundo + "s";
            }
            display: none;
            z-index: 1;
            bottom: 60px;
            opacity: 0.5;
    }
}
    .drop {
        bottom: 100%;
        width: 15px;
        height: 120px;
        pointer-events: none;
        animation: drop 0.5s linear infinite;
        .stem {
            width: 1px;
            height: 60%;
            margin-left: 7px;
            background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.25));
            animation: stem 0.5s linear infinite;
            animation-delay: "0." + $randoHundo + "s";
            animation-duration: 0.5 + $randoHundo + "s";
        }
        .splat {
            width: 15px;
            height: 10px;
            border-top: 2px dotted rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            opacity: 1;
            transform: scale(0);
            animation: splat 0.5s linear infinite;
            display: none;
            animation-delay: "0." + $randoHundo + "s";
            animation-duration: 0.5 + $randoHundo + "s";
        }
    }
}


@keyframes drop {
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
  65% {
    opacity: 1;
  }
  75% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

.splat {
  width: 15px;
  height: 10px;
  border-top: 2px dotted rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  opacity: 1;
  transform: scale(0);
  animation: splat 0.5s linear infinite;
  display: none;
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
