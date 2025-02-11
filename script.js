document.getElementById("yes-btn").addEventListener("click", function() {
    document.getElementById("message").textContent = "Yay! Can't wait for prom with you! 🎉💕";
    document.getElementById("message").classList.remove("hidden");
});

document.getElementById("no-btn").addEventListener("mouseover", function() {
    let x = Math.random() * window.innerWidth - 100;
    let y = Math.random() * window.innerHeight - 50;
    this.style.position = "absolute";
    this.style.left = `${x}px`;
    this.style.top = `${y}px`;
});
