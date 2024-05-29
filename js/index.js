'use strict'

var ballHeight = 100
var ballWidth = 100
var ranNum = getRandomInt(20, 61)
var ball1 = document.querySelector(".ball")
var ball2 = document.querySelector(".ball2")
var interval

function onBallClick(ball, maxDiameter) {
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

function onBall3Click() {
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

function onBall4Click(change, Reduced) {
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

function onBall5Click() {
    document.body.style.backgroundColor = getRandomColor()
}

function onBall6Click() {
    ballHeight = 100
    ballWidth = 100

    ball1.style.width = "100px"
    ball1.style.height = "100px"
    ball1.style.backgroundColor = "blanchedalmond"

    ball2.style.width = "100px"
    ball2.style.height = "100px"
    ball2.style.backgroundColor = "rgb(205, 253, 255)"

    document.body.style.backgroundColor = "#252525"
}


var intervalCount = 0
function onBall6() {
    console.log('hhh');
    interval = setTimeout(function () {
        interval = setInterval(function () {
            if (intervalCount > 10) {
                clearInterval(interval)
                return
            }
            console.log("interval", intervalCount)
            onBallClick(ball1, 200)
            onBallClick(ball2, 400)
            onBall3Click()
            onBall4Click()
            intervalCount++
        }, 2000)
    }, 2000)
}


function undo(){
var currUndo = []

}
