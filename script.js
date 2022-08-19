const screen1 = document.querySelector('.screen1')
const screen2 =  document.querySelector('.screen2')
const buttontryagain = document.querySelector('#playagain')
const buttonTry = document.querySelector('#buttonTry')
const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// Eventos 
buttonTry.addEventListener('click', handleTryclick)
buttontryagain.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function(e) {
    if(e.key == 'Enter') {
        handleResetClick()
    }
})





function handleTryclick (event) {
    event.preventDefault()

    const inputNumber = document.querySelector('#Inputnumber')

if(Number(inputNumber.value) == randomNumber) {
    togglescreen()
   

    screen2.querySelector("h1").innerText = `Parabens! 
    Você acertou em ${xAttempts} tentativas`

    
}
inputNumber.value = ""

xAttempts++ 
}


function handleResetClick() {
    togglescreen()
    xAttempts = 1
    
}



function togglescreen () {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")

}










