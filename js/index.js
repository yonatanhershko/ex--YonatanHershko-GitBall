'use strict'

var gBall1size = 100
var gBall2size = 100

var ranNum = getRandomInt(20, 61)
var ranNum2 = getRandomInt(20, 61)

var ball1 = document.querySelector(".ball")
var ball2 = document.querySelector(".ball2")

var interval

var gState = []
var gRedoState = []



saveState()
function saveState() {
    var state = {}
    state.ball1 = {
        width: (ball1.style.width || gBall1size + 'px'),
        height: (ball1.style.height || gBall1size + 'px'),
        text: ball1.innerHTML,
        color: (ball1.style.backgroundColor || 'blanchedalmond')
    }
    state.ball2 = {
        width: (ball2.style.width || gBall2size + 'px'),
        height: (ball2.style.height || gBall2size + 'px'),
        text: ball2.innerHTML,
        color: (ball2.style.backgroundColor || 'rgb(205, 253, 255)')
    }
    state.backgroundColor = (document.body.style.backgroundColor || '#252525')
    gState.push(state)
}


function undo() {
    if (!gState.length) return 

    var prevState = gState.pop()
    gRedoState.push(prevState)

    ball1.style.width = prevState.ball1.width
    ball1.style.height = prevState.ball1.height
    ball1.style.backgroundColor = prevState.ball1.color
    ball1.innerHTML = prevState.ball1.text

    ball2.style.width = prevState.ball2.width
    ball2.style.height = prevState.ball2.height
    ball2.style.backgroundColor = prevState.ball2.color
    ball2.innerHTML = prevState.ball2.text
    document.body.style.backgroundColor = prevState.backgroundColor;

    console.log('undo successful.');
    return 'Undo successful.'
}


function redo() {
    if (!gRedoState.length) return 
    var lastState = gRedoState.pop()

    ball1.style.width = lastState.ball1.width
    ball1.style.height = lastState.ball1.height
    ball1.style.backgroundColor = lastState.ball1.color
    ball1.innerHTML = lastState.ball1.text

    ball2.style.width = lastState.ball2.width
    ball2.style.height = lastState.ball2.height
    ball2.style.backgroundColor = lastState.ball2.color
    ball2.innerHTML = lastState.ball2.text
    document.body.style.backgroundColor = lastState.backgroundColor;

    gState.push(lastState)
    console.log('redo successful.')
    return 'Redo successful.'
}


function onBallClick(ball, maxDiameter) {
    if (gBall1size < maxDiameter) {
        ball.style.backgroundColor = getRandomColor()
        gBall1size += ranNum
        ball.style.width = gBall1size + 'px'
        ball.style.height = gBall1size + 'px'
        ball1.innerHTML = gBall1size

    } else {
        gBall1size = 100
        ball.style.width = gBall1size + 'px'
        ball.style.height = gBall1size + 'px'
        ball1.innerHTML = gBall1size
    }
    saveState()
}

function onBall2Click(ball, maxDiameter) {
    if (gBall2size < maxDiameter) {
        ball.style.backgroundColor = getRandomColor()
        gBall2size += ranNum2
        ball.style.width = gBall2size + 'px'
        ball.style.height = gBall2size + 'px'
        ball2.innerHTML = gBall2size

    } else {
        gBall2size = 100
        ball.style.width = gBall2size + 'px'
        ball.style.height = gBall2size + 'px'
        ball2.innerHTML = gBall2size
    }
    saveState()
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
    saveState()
}

function onBall4Click(change, Reduced) {
    if (gBall1size > Reduced) {
        gBall1size -= ranNum
        gBall1size -= ranNum
        gBall2size -= ranNum2
        gBall2size -= ranNum2
        ball2.style.width = gBall2size + 'px'
        ball2.style.height = gBall2size + 'px'
        ball1.style.width = gBall1size + 'px'
        ball1.style.height = gBall1size + 'px'
        ball2.innerHTML = gBall2size
        ball1.innerHTML = gBall1size
    }
    else {
        gBall1size = 100
        gBall1size = 100
        gBall2size = 100
        gBall2size = 100
    }

}

function onBall5Click() {
    document.body.style.backgroundColor = getRandomColor()
    saveState()
}

function onBall6Click() {
    gBall1size = 100
    gBall1size = 100
    gBall2size = 100
    gBall2size = 100

    ball1.style.width = "100px"
    ball1.style.height = "100px"
    ball1.style.backgroundColor = "blanchedalmond"

    ball2.style.width = "100px"
    ball2.style.height = "100px"
    ball2.style.backgroundColor = "rgb(205, 253, 255)"

    document.body.style.backgroundColor = "#252525"
    saveState()
}


var intervalCount = 0
function onBall6() {
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

