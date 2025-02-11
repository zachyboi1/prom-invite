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

 document.addEventListener("DOMContentLoaded", function() {
        const music = document.getElementById("bg-music");
        music.muted = true; // Start muted to allow autoplay
        music.play().then(() => {
            music.muted = false; // Unmute after it starts
        }).catch(error => {
            console.log("Autoplay blocked:", error);
        });
    });
