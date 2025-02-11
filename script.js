function playNoSound() {
    let noSound = new Audio("media/no-sfx.mp3");
    noSound.play();
}

function showNoVideo() {
    let popup = document.getElementById("videoPopup");
    let video = document.getElementById("noVideo");

    popup.style.display = "block";
    video.play();

    video.onended = function() {
        popup.style.display = "none";
    };
}

document.addEventListener("DOMContentLoaded", function () {
    const noButton = document.getElementById("noButton");

    noButton.addEventListener("click", function () {
        // Generate random small offsets (-50px to 50px)
        const randomX = (Math.random() * 100) - 50;
        const randomY = (Math.random() * 100) - 50;

        // Apply the new position
        noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
    });
});
