'use strict'

var ballHight
var ballWidth
var ranNum = getRandomInt(20, 61)

function onBallClick() {
    var ball = document.querySelector('.ball')
    if (ballHight + 50 <= 400 && ballWidth + 50 <= 400) {
        ballHight += ranNum
        ballWidth += ranNum
    } else {
        ballHight = 100
        ballWidth = 100
    }
    // console.log(ball);
    ball.style.width = ballHight + 'px'
    ball.style.height = ballWidth + 'px'
}

