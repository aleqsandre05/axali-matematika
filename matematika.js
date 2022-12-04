let buttons = document.querySelectorAll('.first')
let firstQuestion = document.querySelector('.firstQuestion')
let secondQuestion = document.querySelector('.secondQuestion')
let button = document.querySelectorAll('.seconde')
let fourthQuestion = document.querySelector('.fourthQuestion')
let bt = document.querySelectorAll('.third')
let  thirdQuestion= document.querySelector('.thirdQuestion')
let fifthQuestion = document.querySelector('.fifthQuestion')
let but = document.querySelectorAll('.four')
let bit = document.querySelectorAll('.fifve')

buttons.forEach(btn => {
    btn.addEventListener('click', function(){
        firstQuestion.style.display = 'none'
        secondQuestion.style.display = 'block'
    })
})






button.forEach(btn => {
    btn.addEventListener('click', function(e){
        secondQuestion.style.display = 'none'
        thirdQuestion.style.display = 'block'
    })
})


bt.forEach(btn => {
    btn.addEventListener('click', function(){
        
        
        thirdQuestion.style.display = 'none'
        fourthQuestion.style.display = 'block'
        
    })
})

but.forEach(btn => {
    btn.addEventListener('click', function(){
    
        fourthQuestion.style.display = 'none'
        fifthQuestion.style.display = 'block'
    })
})


// bit.forEach(btn => {
//     btn.addEventListener('click', function(){
    
        
//         fifthQuestion.style.display = 'none'
//     })
// })

// let buton=document.querySelectorAll('.fifve');

// buton.forEach(btn => {
//     btn.addEventListener('click', function(){
    
//         fourthQuestion.style.display = 'none'
//         fifthQuestion.style.display = 'none'
//     })
// })
