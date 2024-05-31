'use strict'

function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
}


function getRandomColor() {
    const letters = '0123456789ABCDEF'
    var color = '#'
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

function startTimer() {
    gStartTime = Date.now()
    gTimerInterval = setInterval(() => {
        var elapsedTime = Date.now() - gStartTime
        var minutes = Math.floor(elapsedTime / 60000)
        var seconds = Math.floor((elapsedTime % 60000) / 1000)
        var formattedTime = minutes + ':' + (seconds < 10 ? '0' : '') + seconds
        var elSpan = document.querySelector('.time')
        elSpan.innerText = formattedTime
    }, 1000)
}

function resetTimer() {
    gFirstClick = true
    clearInterval(gTimerInterval)
    var elSpan = document.querySelector('.time')
    elSpan.innerText = '0.00'
}
