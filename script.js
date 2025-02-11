// Get button elements
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");

// Load sound files
const yesSound = new Audio("yes.mp3");
const noSound = new Audio("no.mp3");

// Play sound when clicking "Yes"
yesButton.addEventListener("click", function () {
    yesSound.play();
    window.location.href = "yes.html"; // Redirect to the new page
});

// Move "No" button & play sound
noButton.addEventListener("mouseover", moveNoButton);
noButton.addEventListener("click", function () {
    noSound.play();
    moveNoButton(); // Move button when clicked (for mobile)
});

function moveNoButton() {
    let maxWidth = window.innerWidth - noButton.clientWidth;
    let maxHeight = window.innerHeight - noButton.clientHeight;

    let newX = Math.random() * maxWidth;
    let newY = Math.random() * maxHeight;

    noButton.style.position = "absolute";
    noButton.style.left = `${newX}px`;
    noButton.style.top = `${newY}px`;
}
