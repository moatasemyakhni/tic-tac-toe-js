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
const totBoxes = 9
let nbOfSteps = 0 //when reached 9 and no wins, it means tie

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

const b1 = document.querySelector('.box-1')
const b2 = document.querySelector('.box-2')
const b3 = document.querySelector('.box-3')
const b4 = document.querySelector('.box-4')
const b5 = document.querySelector('.box-5')
const b6 = document.querySelector('.box-6')
const b7 = document.querySelector('.box-7')
const b8 = document.querySelector('.box-8')
const b9 = document.querySelector('.box-9')

const board = [
    [b1, b2, b3],
    [b4, b5, b6],
    [b7, b8, b9]
]

// console.log(board[0][0].childNodes)
// console.log(board[0][0].childNodes[3].classList.contains('view-hidden') == board[0][1].childNodes[3].classList.contains('view-hidden'))
// console.log(board[0][0](board[0][1]))

// ChildNodes[1] is red
// childNodes[3] is yellow
const isMovesLeft = () => {
    for(let i=0;i<3;i++) {
        for(let j=0;j<3;j++) {
            if(board[i][j].childNodes[1].classList.contains('view-hidden') && board[i][j].childNodes[3].classList.contains('view-hidden')) {
                // if at least one box have both its images hidden, then we still can play
                return true
            }
        }
    }
    return false
}//yellow

console.log("moves left:", isMovesLeft())
function evaluate() {
    for(let row=0; row<3;row++) {
        if(!board[row][0].childNodes[1].classList.contains('view-hidden') && !board[row][1].childNodes[1].classList.contains('view-hidden') && !board[row][2].childNodes[1].classList.contains('view-hidden')) {
            return 10 //red wins
        }else if(!board[row][0].childNodes[3].classList.contains('view-hidden') && !board[row][1].childNodes[3].classList.contains('view-hidden') && !board[row][2].childNodes[3].classList.contains('view-hidden')) {
            return -10 //yellow wins
        }
    }

    for(let col=0; col < 3; col++) {
        if(!board[0][col].childNodes[1].classList.contains('view-hidden') && !board[1][col].childNodes[1].classList.contains('view-hidden') && !board[2][col].childNodes[1].classList.contains('view-hidden')) {
            return 10 //red wins
        }else if(!board[0][col].childNodes[3].classList.contains('view-hidden') && !board[1][col].childNodes[3].classList.contains('view-hidden') && !board[2][col].childNodes[3].classList.contains('view-hidden')) {
            return -10 //yellow wins
        }
    }

    //diagonals
    if(!board[0][0].childNodes[1].classList.contains('view-hidden') && !board[1][1].childNodes[1].classList.contains('view-hidden') && !board[2][2].childNodes[1].classList.contains('view-hidden')) {
        return 10 //red wins
    }else if(!board[0][0].childNodes[3].classList.contains('view-hidden') && !board[1][1].childNodes[3].classList.contains('view-hidden') && !board[2][2].childNodes[3].classList.contains('view-hidden')) {
        return -10 //yellow wins
    }

    if(!board[0][2].childNodes[1].classList.contains('view-hidden') && !board[1][1].childNodes[1].classList.contains('view-hidden') && !board[2][0].childNodes[1].classList.contains('view-hidden')) {
        return 10 //red wins
    }else if(!board[0][2].childNodes[3].classList.contains('view-hidden') && !board[1][1].childNodes[3].classList.contains('view-hidden') && !board[2][0].childNodes[3].classList.contains('view-hidden')) {
        return -10 //yellow wins
    }

    //if now win
    return 0
}

function minimax(depth, isMax) {
    let score = evaluate()

    if(score == 10) {
        return score
    }
    if(score == -10) {
        return score
    }
    if(isMovesLeft() == false) {
        return 0
    }

    //maximizer move
    if(isMax) {
        let best = -1000

        for(let i=0;i<3;i++) {
            for(let j=0;j<3;j++) {
                if(board[i][j].childNodes[1].classList.contains('view-hidden') && board[i][j].childNodes[3].classList.contains('view-hidden')) {
                    board[i][j].childNodes[1].classList.remove('view-hidden') //player

                    best = Math.max(best, minimax(depth+1, !isMax))
                    
                    //undo
                    board[i][j].childNodes[1].classList.add('view-hidden') //player
                }
            }
        }
        return best
    }else {
        let best = 1000
        for(let i=0;i<3;i++) {
            for(let j=0;j<3;j++) {
                if(board[i][j].childNodes[1].classList.contains('view-hidden') && board[i][j].childNodes[3].classList.contains('view-hidden')) {
                    board[i][j].childNodes[3].classList.remove('view-hidden') //ai

                    best = Math.min(best, minimax(depth+1, !isMax))
                    
                    //undo
                    board[i][j].childNodes[3].classList.add('view-hidden') //ai
                }
            }
        }
        return best
    }
}
let rowCol = {
    row: -1,
    col: -1
}
function findBestMove() {
    bestVal = -1000
    rowCol.row = -1
    rowCol.col = -1

    for(let i=0;i<3;i++) {
        for(let j=0;j<3;j++) {
            if(board[i][j].childNodes[1].classList.contains('view-hidden') && board[i][j].childNodes[3].classList.contains('view-hidden')) {
                
                board[i][j].childNodes[1].classList.remove('view-hidden') //player

                let moveVal = minimax(0, false)

                board[i][j].childNodes[1].classList.add('view-hidden') //player

                if(moveVal > bestVal) {
                    rowCol.row = i
                    rowCol.col = j
                    bestVal = moveVal
                }
            }
        }
    }
    // console.log("The value of the best Move is :", bestVal)
    // console.log("Column:", rowCol.col, "Row:", rowCol.row)
    board[rowCol.row][rowCol.col].childNodes[3].classList.add('yellow') // this will decide if yellow will win or not
    return rowCol
}

// console.log(findBestMove())

//board[0][0].childNodes[1].classList.remove('view-hidden')
const declareYellowWinner = "Yellow Won!"
const declareRedWinner = "Red Won!"

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        const redCoin = box.firstChild.nextSibling
        const yellowCoin = box.lastChild.previousSibling

        // console.log(redCoin)
        // console.log(yellowCoin)
        if(turn === player1Turn) {
            if(!yellowCoin.classList.contains('view-hidden') || !redCoin.classList.contains('view-hidden')) {
               return // if yellow here we cant put red
            }
            if(!winnerExist) {// prevent adding more coins when game finish(someone wins)
                redCoin.classList.remove('view-hidden')
                redCoin.classList.add('red')
                flipCoins.forEach(coin => coin.classList.toggle('view-hidden'))
                //turn = player2Turn // no need for player 2
                //nbOfSteps++
            }
        }
        //player 2
        // else {
        //     if(!redCoin.classList.contains('view-hidden')) {
        //         return //if red here we cant put yellow
        //      }
        //      if(!winnerExist) {
        //         yellowCoin.classList.remove('view-hidden')
        //         yellowCoin.classList.add('yellow')
        //         flipCoins.forEach(coin => coin.classList.toggle('view-hidden'))
        //         turn = player1Turn
        //         nbOfSteps++
        //      }
        // }

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

        //ai
        
        if(isMovesLeft()) {
            if(!winnerExist) {
                const aiYellow = findBestMove()
                board[aiYellow.row][aiYellow.col].childNodes[3].classList.remove('view-hidden')
            }
        }
        //console.log("moves left:", isMovesLeft())

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
        nbOfSteps += 2
        console.log("nb of steps", nbOfSteps)
        if(nbOfSteps >= totBoxes)
            displayWinner.textContent = "Tie"
        // console.log(findBestMove())

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
    flipCoins[0].classList.remove('view-hidden')
    flipCoins[1].classList.add('view-hidden')
    nbOfSteps = 0
})