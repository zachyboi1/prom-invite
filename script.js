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
document.getElementById("noButton").addEventListener("click", function() {
    playSound("no.mp3"); // Play funny/sad sound
    alert("Oh no! But I still think you're amazing! 😢");
});

// Make the "No" button move away when hovered
document.getElementById("noButton").addEventListener("mouseover", function() {
    let button = document.getElementById("noButton");
    let randomX = Math.floor(Math.random() * 300) - 150; // Random X movement
    let randomY = Math.floor(Math.random() * 300) - 150; // Random Y movement

    button.style.position = "absolute";
    button.style.left = `${button.offsetLeft + randomX}px`;
    button.style.top = `${button.offsetTop + randomY}px`;
});
