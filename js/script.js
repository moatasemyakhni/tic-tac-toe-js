const boxes = document.querySelectorAll('.box')
const resetBtn = document.getElementById('reset')
const player1Turn = 0
const player2Turn = 1
let turn = player1Turn

resetBtn.addEventListener('click', () => {
    const redImages = document.querySelectorAll('.red')
    const yellowImages = document.querySelectorAll('.yellow')

    redImages.forEach(redImage => redImage.classList.add('view-none'))
    yellowImages.forEach(yellowImage => yellowImage.classList.add('view-none'))
})

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        const redCoin = box.firstChild.nextSibling
        const yellowCoin = box.lastChild.previousSibling

        // console.log(redCoin)
        // console.log(yellowCoin)

        if(turn === player1Turn) {
            if(!yellowCoin.classList.contains('view-none')) {
               return 
            }
            redCoin.classList.remove('view-none')
            turn = player2Turn
        }else {
            if(!redCoin.classList.contains('view-none')) {
                return 
             }
            yellowCoin.classList.remove('view-none')
            turn = player1Turn
        }     
    })
})