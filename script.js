const clickMeButton = document.getElementById("clickMe");
const container = document.querySelector(".container");

if (clickMeButton) {
    clickMeButton.addEventListener("click", () => {
        const message = document.createElement("div");
        message.className = "action-message";
        message.textContent = "Terima kasih telah mencoba halaman portfolio ini!";
        container.appendChild(message);

        setTimeout(() => {
            message.classList.add("visible");
        }, 10);

        setTimeout(() => {
            message.classList.remove("visible");
            message.addEventListener("transitionend", () => {
                message.remove();
            }, { once: true });
        }, 2500);
    });
}
