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

document.addEventListener("DOMContentLoaded", () => {
            const audio = document.getElementById("bg-music");
            // Try to play the audio after a user interaction
            document.body.addEventListener("click", () => {
                audio.play();
            }, { once: true }); // Ensures it only runs once
        });
