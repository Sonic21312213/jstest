console.log("First mes.");
console.log("Second mes.");

const testbut = document.querySelector('.testbut');
const body = document.body;

testbut.addEventListener('click', () => {
    // Add the flashing effect to the button
    testbut.classList.add('flash');

    // Add the flashing background effect
    body.style.animation = 'background-flash 0.5s infinite';

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
            body.style.animation = ''; // Remove background flash
        }, 2000); // Flashing lasts for 2 seconds
    }, 500);
});
