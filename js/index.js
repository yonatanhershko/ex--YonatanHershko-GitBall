'use strict'

var ballHeight = 100
var ballWidth = 100
var ranNum = getRandomInt(20, 61)
var ball1 = document.querySelector(".ball")
var ball2 = document.querySelector(".ball2")

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
}

function onBall3Click(){
     var ball1Color = ball1.style.backgroundColor
     var ball1Width = ball1.style.width
     var ball1Height = ball1.style.height
 
     ball1.style.backgroundColor = ball2.style.backgroundColor
     ball1.style.width = ball2.style.width
     ball1.style.height = ball2.style.height
 
     ball2.style.backgroundColor = ball1Color
     ball2.style.width = ball1Width
     ball2.style.height = ball1Height

}

function onBall4Click(change,Reduced) {
    if (ballHeight > Reduced) {
        ballHeight -= ranNum
        ballWidth -= ranNum
        ball2.style.width = ballHeight + 'px'
        ball2.style.height = ballWidth + 'px'
        ball1.style.width = ballHeight + 'px'
        ball1.style.height = ballWidth + 'px'
    }
    else {
        ballHeight = 100
        ballWidth = 100
    }

}

function onBall5Click(){
    document.body.style.backgroundColor = getRandomColor()
}

function onBall6Click(){
    
}