'use strik'

var ballHight = 50
var ballWidth = 50

function onBallClick() {
    var ball = document.querySelector('.ball')
    if (ballHight + 50 <= 400 && ballWidth + 50 <= 400) {
        ballHight += 50
        ballWidth += 50
    } else {
        ballHight = 100
        ballWidth = 100
    }

    ball.style.width = ballHight + 'px'
    ball.style.height = ballWidth + 'px'
}

