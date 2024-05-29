'use strict'

var ballHeight = 100
var ballWidth = 100
var ranNum = getRandomInt(20, 61)

function onBallClick(ball,maxDiameter) {
    if (ballHeight < maxDiameter) {
        ball.style.backgroundColor = getRandomColor()
        ballHeight += ranNum
        ballWidth += ranNum
        ball.style.width = ballHeight + 'px'
        ball.style.height = ballWidth + 'px'
    } else {
        ballHeight = 100
        ballWidth = 100
    }
    console.log(ball,maxDiameter);
}

function onBall3Click(){
    
}