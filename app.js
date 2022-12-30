const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')

const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#scores')
const restart = document.querySelector('#restart')


let result =0;
let hitPosition=-1;
let currentTime =10;
let timerId = null;

function randomSquare(){
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    const randomNum = Math.floor(Math.random()*9)
    const randombox = squares[randomNum]
    randombox.classList.add('mole')
    hitPosition =randombox.id;
    console.log(hitPosition,randombox.id)

}

squares.forEach(square => {
    square.addEventListener('click',() =>{
    
        if(square.id ===hitPosition){
            result++;
            score.textContent=result;
            hitPosition=-1;
        }
        
    })
})

function moveMole(){
    
    timerId = setInterval(randomSquare,1000)
}
moveMole()


function countDown(){
    
    currentTime--;
    
    timeLeft.textContent=currentTime;

    if (currentTime==0){
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert("Gamer OVer")

    }

}

let countDownTimerId = setInterval(countDown,1000)
