'use strict'

var ballHeight = 100
var ballWidth = 100
var ball2Height = 100
var ball2Width = 100
var ranNum = getRandomInt(20, 61)
var ranNum2 = getRandomInt(20, 61)
var ball1 = document.querySelector(".ball")
var ball2 = document.querySelector(".ball2")
var interval
var gState = []


function onBallClick(ball, maxDiameter) {
    if (ballHeight < maxDiameter) {
        ball.style.backgroundColor = getRandomColor()
        ballHeight += ranNum
        ballWidth += ranNum
        ball.style.width = ballHeight + 'px'
        ball.style.height = ballWidth + 'px'
        ball1.innerHTML = ballHeight
    } else {
        ballHeight = 100
        ballWidth = 100
        ball.style.width = ballHeight + 'px'
        ball.style.height = ballWidth + 'px'
        ball1.innerHTML = ballHeight
    } return { ballHeight, ballWidth }
}

function onBall2Click(ball, maxDiameter) {
    if (ball2Height < maxDiameter) {
        ball.style.backgroundColor = getRandomColor()
        ball2Height += ranNum2
        ball2Width += ranNum2
        ball.style.width = ball2Height + 'px'
        ball.style.height = ball2Width + 'px'
        ball2.innerHTML = ball2Height
    } else {
        ball2Height = 100
        ball2Width = 100
        ball.style.width = ball2Height + 'px'
        ball.style.height = ball2Width + 'px'
        ball2.innerHTML = ball2Height
    } return { ball2Height, ball2Width }
}


function onBall3Click() {
    var ball1Color = ball1.style.backgroundColor
    var ball1Width = ball1.style.width
    var ball1Height = ball1.style.height
    var ball1Text = ball1.innerHTML

    ball1.style.backgroundColor = ball2.style.backgroundColor
    ball1.style.width = ball2.style.width
    ball1.style.height = ball2.style.height
    ball1.innerHTML = ball2.innerHTML

    ball2.style.backgroundColor = ball1Color
    ball2.style.width = ball1Width
    ball2.style.height = ball1Height
    ball2.innerHTML = ball1Text

}

function onBall4Click(change, Reduced) {
    if (ballHeight > Reduced) {
        ballHeight -= ranNum
        ballWidth -= ranNum
        ball2Height -= ranNum2
        ball2Width -= ranNum2
        ball2.style.width = ball2Height + 'px'
        ball2.style.height = ball2Width + 'px'
        ball1.style.width = ballHeight + 'px'
        ball1.style.height = ballWidth + 'px'
        ball2.innerHTML = ball2Height
        ball1.innerHTML = ballHeight
    }
    else {
        ballHeight = 100
        ballWidth = 100
        ball2Height = 100
        ball2Width = 100
    }

}

function onBall5Click() {
    document.body.style.backgroundColor = getRandomColor()
}

function onBall6Click() {
    ballHeight = 100
    ballWidth = 100
    ball2Height = 100
    ball2Width = 100

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

function saveState() {
    var state = {}
    ball1 = {
        width: (ball1.style.width || ballHeight + 'px'),
        hight: (ball1.style.hight || ballHeight + 'px'),
        text: ball1.innerHTML,
        color: (ball1.style.backgroundColor || 'blanchedalmond')
    }
    ball2 = {
        width: (ball2.style.width || ball2Height + 'px'),
        hight: (ball2.style.hight || ball2Height + 'px'),
        text: ball2.innerHTML,
        color: (ball2.style.backgroundColor || 'rgb(205, 253, 255)')
    }
    state.backgroundColor = (document.body.style.backgroundColor || '#252525')
    gState.push(state)
}


function undo() {
    console.log('hh');
    if (!gState.length) return 'Make a move'


    var prevState = gState[gState.length - 1]

    ball1.style.width = prevState.ball1.width
    ball1.style.hight = prevState.ball1.hight
    ball1.style.backgroundColor = prevState.ball1.color
    ball1.innerHTML = prevState.ball1.text

    ball2.style.width = prevState.ball2.width
    ball2.style.hight = prevState.ball2.hight
    ball2.style.backgroundColor = prevState.ball2.color
    ball2.innerHTML = prevState.ball2.text


}


