console.log("First mes.");
console.log("Second mes.");

const testbut = document.querySelector('.testbut');
const body = document.body;

testbut.addEventListener('click', () => {
    // Add the flashing effect to the button
    testbut.classList.add('flash');
    
    // Add the flashing background effect
    body.classList.add('background-flash');

    // Go fullscreen
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
    }

    setTimeout(() => {
        const audio = new Audio('./sounds/test.mp3');
        audio.play();

        // Stop the flashing effect after a few seconds
        setTimeout(() => {
            testbut.classList.remove('flash');
            body.classList.remove('background-flash'); // Remove background flash
        }, 2000); // Flashing lasts for 2 seconds
    }, 500);
});
