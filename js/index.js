'use strict'

var ballHeight = 100
var ballWidth = 100
var ranNum = getRandomInt(20, 61)

function onBallClick(ball) {
    
    if (ballHeight <= 400 && ballWidth <= 400) {
        ball.style.backgroundColor = getRandomColor()
        ballHeight += ranNum
        ballWidth += ranNum
        ball.style.width = ballHeight + 'px'
        ball.style.height = ballWidth + 'px'
    } else {
        ballHeight = 100
        ballWidth = 100
    }
}