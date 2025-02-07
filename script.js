document.addEventListener("DOMContentLoaded", function() {
    let yesButton = document.getElementById("yesButton");
    let noButton = document.getElementById("noButton");
    let message = document.getElementById("message");

    yesButton.addEventListener("click", function() {
        message.textContent = "Теперь ты навсегда мой Веном 💘";
        noButton.style.display = "none";
    });

    noButton.addEventListener("mouseover", function() {
        let x = Math.random() * (window.innerWidth - noButton.clientWidth);
        let y = Math.random() * (window.innerHeight - noButton.clientHeight);
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    });
});
