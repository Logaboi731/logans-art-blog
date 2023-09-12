// Get the red button and blue overlay elements
const coolButton = document.getElementById('cool-button');
const blueOverlay = document.getElementById('blue-overlay');

// Add a click event listener to the red button
coolButton.addEventListener('click', () => {
    // Show the blue overlay
    blueOverlay.classList.remove('hidden');

    // Set a timeout to hide the blue overlay after 5.2763 seconds (5276.3 milliseconds)
    setTimeout(() => {
        blueOverlay.style.opacity = 0;
    }, 5276.3);
});
