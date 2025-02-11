// Function to play sound
function playSound(soundFile) {
    let audio = new Audio(soundFile);
    audio.play();
}

// Event listener for "Yes" button
document.getElementById("yesButton").addEventListener("click", function() {
    window.location.href = "yes.html"; // Redirect to new page
});

// Event listener for "No" button
document.getElementById("noButton").addEventListener("mouseover", function() {
    let button = this;
    let maxWidth = window.innerWidth - button.clientWidth; // Ensure it stays inside screen width
    let maxHeight = window.innerHeight - button.clientHeight; // Ensure it stays inside screen height

    let newX = Math.random() * maxWidth;
    let newY = Math.random() * maxHeight;

    button.style.position = "absolute";
    button.style.left = `${newX}px`;
    button.style.top = `${newY}px`;
});

// Make the "No" button move away when hovered
document.getElementById("noButton").addEventListener("mouseover", moveNoButton);
document.getElementById("noButton").addEventListener("click", moveNoButton); // Works for mobile taps

function moveNoButton() {
    let button = document.getElementById("noButton");
    let maxWidth = window.innerWidth - button.clientWidth; 
    let maxHeight = window.innerHeight - button.clientHeight;

    let newX = Math.random() * maxWidth;
    let newY = Math.random() * maxHeight;

    button.style.position = "absolute";
    button.style.left = `${newX}px`;
    button.style.top = `${newY}px`;
}
