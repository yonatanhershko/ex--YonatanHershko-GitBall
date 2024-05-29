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
    var ball1 = document.querySelector(".ball")
    var ball2 = document.querySelector(".ball2")

     var tempColor = ball1.style.backgroundColor
     var tempWidth = ball1.style.width
     var tempHeight = ball1.style.height
 
     ball1.style.backgroundColor = ball2.style.backgroundColor
     ball1.style.width = ball2.style.width
     ball1.style.height = ball2.style.height
 
     ball2.style.backgroundColor = tempColor
     ball2.style.width = tempWidth
     ball2.style.height = tempHeight

}

function onBall4Click() {
    
}