const boxes = document.querySelectorAll('.box')
const player1Turn = 0
const player2Turn = 1
let turn = player1Turn

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        const redCoin = box.firstChild.nextSibling
        const yellowCoin = box.lastChild.previousSibling

        console.log(redCoin)
        console.log(yellowCoin)

        if(turn === player1Turn) {
            redCoin.classList.remove('view-none')
            turn = player2Turn
        }else {
            yellowCoin.classList.remove('view-none')
            turn = player1Turn
        }
        
    })
})