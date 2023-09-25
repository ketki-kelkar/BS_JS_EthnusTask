document.addEventListener('DOMContentLoaded', function () {
    const train = document.getElementById('train');
    const startButton = document.getElementById('startButton');
    const stopButton = document.getElementById('stopButton');

    let isMoving = false;
    let animationInterval;

    // Function to start the train animation
    function startAnimation() {
        if (!isMoving) {
            isMoving = true;
            animationInterval = setInterval(moveTrain, 10);
        }
    }

    // Function to move the train
    function moveTrain() {
        const currentLeft = parseInt(train.style.left) || 0;
        train.style.left = (currentLeft + 1) + 'px';
    }

    // Function to stop the train animation
    function stopAnimation() {
        if (isMoving) {
            isMoving = false;
            clearInterval(animationInterval);
        }
    }

    // Event listeners for the buttons
    startButton.addEventListener('click', startAnimation);
    stopButton.addEventListener('click', stopAnimation);
});
