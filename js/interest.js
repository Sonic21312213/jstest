console.log("First mes.");


console.log("Second mes.");

const testbut = document.querySelector('.testbut')


testbut.addEventListener('click', () => {
    setTimeout(() => {
        const audio = new Audio('./sounds/test.mp3');
        audio.play();
    }, 500)
});
