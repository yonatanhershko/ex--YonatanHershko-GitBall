'use strik'

var ballHight = 50
var ballWidth = 50

function onBallClick(ball) {
    ballHight = ballHight + 50
    ballWidth = ballWidth + 50
    ball.style.width = ballHight + 'px'
    ball.style.height = ballWidth + 'px'
}

