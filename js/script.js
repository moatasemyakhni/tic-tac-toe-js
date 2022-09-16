const boxes = document.querySelectorAll('.box')
const resetBtn = document.getElementById('reset')
const displayWinner = document.getElementById('display-winner')
const player1Turn = 0
const player2Turn = 1
const flipCoins = document.querySelectorAll('.turn-coin')
let turn = player1Turn
let winnerExist = false
const displayP1Score = document.getElementById('p1')
const displayP2Score = document.getElementById('p2')
let p1Score = 0
let p2Score = 0

const y1 = document.querySelector('.y-1')
const y2 = document.querySelector('.y-2')
const y3 = document.querySelector('.y-3')
const y4 = document.querySelector('.y-4')
const y5 = document.querySelector('.y-5')
const y6 = document.querySelector('.y-6')
const y7 = document.querySelector('.y-7')
const y8 = document.querySelector('.y-8')
const y9 = document.querySelector('.y-9')

const r1 = document.querySelector('.r-1')
const r2 = document.querySelector('.r-2')
const r3 = document.querySelector('.r-3')
const r4 = document.querySelector('.r-4')
const r5 = document.querySelector('.r-5')
const r6 = document.querySelector('.r-6')
const r7 = document.querySelector('.r-7')
const r8 = document.querySelector('.r-8')
const r9 = document.querySelector('.r-9')

const declareYellowWinner = "Yellow Won!"
const declareRedWinner = "Red Won!"

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        const redCoin = box.firstChild.nextSibling
        const yellowCoin = box.lastChild.previousSibling

        // console.log(redCoin)
        // console.log(yellowCoin)
        if(turn === player1Turn) {
            if(!yellowCoin.classList.contains('view-hidden')) {
               return // if yellow here we cant put red
            }
            if(!winnerExist) {// prevent adding more coins when game finish(someone wins)
                redCoin.classList.remove('view-hidden')
                redCoin.classList.add('red')
                flipCoins.forEach(coin => coin.classList.toggle('view-hidden'))
                turn = player2Turn
            }
        }else {
            if(!redCoin.classList.contains('view-hidden')) {
                return //if red here we cant put yellow
             }
             if(!winnerExist) {
                yellowCoin.classList.remove('view-hidden')
                yellowCoin.classList.add('yellow')
                flipCoins.forEach(coin => coin.classList.toggle('view-hidden'))
                turn = player1Turn
             }
        }

        // For Red
        // total winning conditions => 8 cases:
        // winning by rows => 3 cases
        if(r1.classList.contains('red') && r2.classList.contains('red') && r3.classList.contains('red')) {
            displayWinner.textContent = declareRedWinner
            if(!winnerExist) { // prevent incrementing score after winning
                p1Score++
            }
            displayP1Score.textContent = p1Score
            winnerExist = true
            return
        }else if(r4.classList.contains('red') && r5.classList.contains('red') && r6.classList.contains('red')) {
            displayWinner.textContent = declareRedWinner
            if(!winnerExist) {
                p1Score++
            }
            displayP1Score.textContent = p1Score
            winnerExist = true
            return
        }else if(r7.classList.contains('red') && r8.classList.contains('red') && r9.classList.contains('red')) {
            displayWinner.textContent = declareRedWinner
            if(!winnerExist) {
                p1Score++
            }
            displayP1Score.textContent = p1Score
            winnerExist = true
            return
        }
        // winning br columns => 3 cases
        else if(r1.classList.contains('red') && r4.classList.contains('red') && r7.classList.contains('red')) {
            displayWinner.textContent = declareRedWinner
            if(!winnerExist) {
                p1Score++
            }
            displayP1Score.textContent = p1Score
            winnerExist = true
            return
        }else if(r2.classList.contains('red') && r5.classList.contains('red') && r8.classList.contains('red')) {
            displayWinner.textContent = declareRedWinner
            if(!winnerExist) {
                p1Score++
            }
            displayP1Score.textContent = p1Score
            winnerExist = true
            return
        }else if(r3.classList.contains('red') && r6.classList.contains('red') && r9.classList.contains('red')) {
            displayWinner.textContent = declareRedWinner
            if(!winnerExist) {
                p1Score++
            }
            displayP1Score.textContent = p1Score
            winnerExist = true
            return
        }
        // winning by diagonals
        else if(r1.classList.contains('red') && r5.classList.contains('red') && r9.classList.contains('red')) {
            displayWinner.textContent = declareRedWinner
            if(!winnerExist) {
                p1Score++
            }
            displayP1Score.textContent = p1Score
            winnerExist = true
            return
        }else if(r3.classList.contains('red') && r5.classList.contains('red') && r7.classList.contains('red')) {
            displayWinner.textContent = declareRedWinner
            if(!winnerExist) {
                p1Score++
            }
            displayP1Score.textContent = p1Score
            winnerExist = true
            return
        } 

        //For yellow
        // total winning conditions => 8 cases:
        // winning by rows => 3 cases
        if(y1.classList.contains('yellow') && y2.classList.contains('yellow') && y3.classList.contains('yellow')) {
            displayWinner.textContent = declareYellowWinner
            if(!winnerExist) {
                p2Score++
            }
            displayP2Score.textContent = p2Score
            winnerExist = true
            return
        }else if(y4.classList.contains('yellow') && y5.classList.contains('yellow') && y6.classList.contains('yellow')) {
            displayWinner.textContent = declareYellowWinner
            if(!winnerExist) {
                p2Score++
            }
            displayP2Score.textContent = p2Score
            winnerExist = true
            return
        }else if(y7.classList.contains('yellow') && y8.classList.contains('yellow') && y9.classList.contains('yellow')) {
            displayWinner.textContent = declareYellowWinner
            if(!winnerExist) {
                p2Score++
            }
            displayP2Score.textContent = p2Score
            winnerExist = true
            return
        }
        // winning by columns => 3 cases
        else if(y1.classList.contains('yellow') && y4.classList.contains('yellow') && y7.classList.contains('yellow')) {
            displayWinner.textContent = declareYellowWinner
            if(!winnerExist) {
                p2Score++
            }
            displayP2Score.textContent = p2Score
            winnerExist = true
            return
        }else if(y2.classList.contains('yellow') && y5.classList.contains('yellow') && y8.classList.contains('yellow')) {
            displayWinner.textContent = declareYellowWinner
            if(!winnerExist) {
                p2Score++
            }
            displayP2Score.textContent = p2Score
            winnerExist = true
            return
        }else if(y3.classList.contains('yellow') && y6.classList.contains('yellow') && y9.classList.contains('yellow')) {
            displayWinner.textContent = declareYellowWinner
            if(!winnerExist) {
                p2Score++
            }
            displayP2Score.textContent = p2Score
            winnerExist = true
            return
        }
        // winning by diagonals
        else if(y1.classList.contains('yellow') && y5.classList.contains('yellow') && y9.classList.contains('yellow')) {
            displayWinner.textContent = declareYellowWinner
            if(!winnerExist) {
                p2Score++
            }
            displayP2Score.textContent = p2Score
            winnerExist = true
            return
        }else if(y3.classList.contains('yellow') && y5.classList.contains('yellow') && y7.classList.contains('yellow')) {
            displayWinner.textContent = declareYellowWinner
            if(!winnerExist) {
                p2Score++
            }
            displayP2Score.textContent = p2Score
            winnerExist = true
            return
        }

    })
})

resetBtn.addEventListener('click', () => {
    const redImages = document.querySelectorAll('.red-images')
    const yellowImages = document.querySelectorAll('.yellow-images')

    redImages.forEach(redImage => {
        redImage.classList.add('view-hidden')
        redImage.classList.remove('red')
    })
    yellowImages.forEach(yellowImage => {
        yellowImage.classList.add('view-hidden')
        yellowImage.classList.remove('yellow')
    })
    turn = player1Turn
    displayWinner.textContent = null
    winnerExist = false
})