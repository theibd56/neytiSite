const nextBtns = document.querySelectorAll('.ios-toggle label')
const screens = document.querySelectorAll('.screen')

nextBtns[0].addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')
})

nextBtns[1].addEventListener('click', (event) => {
    event.preventDefault()
    screens[1].classList.add('up')
})

// nextBtns[2].addEventListener('click', (event) => {
//     event.preventDefault()
//     screens[0 , 1].classList.remove('up')
// })