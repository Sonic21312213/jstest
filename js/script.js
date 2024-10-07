// sync

///console.log("First mes.");
///console.log("Second mes.");
///console.log("Third mes.");


// unsync

///console.log("First mes.");


///setTimeout(() => {
  ///  console.log("Second mes.");
///}, 1000)


/// console.log("Third mes.");




const testbut = document.querySelector('.testbut')


testbut.addEventListener('click', () => {
    setTimeout(() => {
        const audio = new Audio('./sounds/test.mp3');
        audio.play();
    }, 500)
});


// 


const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
let timerID


startbut.addEventListener('click', () => {
    setTimeout(() => {
        console.log("setInterval");
    }, 2000)
})


stopBtn.addEventListener('click', () => {
    setTimeout(() => {
        clearInterval(timerID); 
})
