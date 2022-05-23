const startButton = document.getElementById('start')
const pauseButton = document.getElementById('pause')
const resetButton = document.getElementById('reset')
const recordBlock = document.getElementById('record')
const cronometro = document.getElementById('cronometro')

let minute = 0
let second = 0
let miliSecond = 0

let time
let records = []
let record = 0

function start() {
  time = setInterval(() => {
    timer()
  }, 10)
}

function pause() {
  clearInterval(time)
  records.push(timer())
  recordBlock.innerText = records[record]
  record++
}

function reset() {
  clearInterval(time)
  minute = 0
  second = 0
  miliSecond = 0
  record = 0
  records = []

  cronometro.innerText = '00:00:00'
  recordBlock.innerText = ''
}

function timer() {
  let format =
    (minute < 10 ? '0' + minute : minute) +
    ':' +
    (second < 10 ? '0' + second : second) +
    ':' +
    (miliSecond < 10 ? '0' + miliSecond : miliSecond)

  miliSecond++

  if (miliSecond > 99) {
    miliSecond = 0
    second++

    if (second > 59) {
      second = 0
      minute++
    }
  }

  cronometro.innerHTML = format

  return format
}

startButton.addEventListener('click', start)
pauseButton.addEventListener('click', pause)
resetButton.addEventListener('click', reset)
