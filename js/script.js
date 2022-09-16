const boxes = document.querySelectorAll('.box')
const resetBtn = document.getElementById('reset')
const player1Turn = 0
const player2Turn = 1
let turn = player1Turn

resetBtn.addEventListener('click', () => {
    const redImages = document.querySelectorAll('.red')
    const yellowImages = document.querySelectorAll('.yellow')

    redImages.forEach(redImage => redImage.classList.add('view-hidden'))
    yellowImages.forEach(yellowImage => yellowImage.classList.add('view-hidden'))
})

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
            redCoin.classList.remove('view-hidden')
            turn = player2Turn
        }else {
            if(!redCoin.classList.contains('view-hidden')) {
                return //if red here we cant put yellow
             }
            yellowCoin.classList.remove('view-hidden')
            turn = player1Turn
        }     
    })
})