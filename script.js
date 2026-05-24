const clickMeButton = document.getElementById("clickMe");
const container = document.querySelector(".container");

if (container) {
    const resetTilt = () => {
        container.style.setProperty("--rotate-x", "0deg");
        container.style.setProperty("--rotate-y", "0deg");
    };

    container.addEventListener("mousemove", (event) => {
        const rect = container.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;

        container.style.setProperty("--rotate-x", `${-y * 6}deg`);
        container.style.setProperty("--rotate-y", `${x * 6}deg`);
    });

    container.addEventListener("mouseleave", resetTilt);
}

if (clickMeButton) {
    clickMeButton.addEventListener("click", (event) => {
        const button = event.currentTarget;
        const rect = button.getBoundingClientRect();
        const ripple = document.createElement("span");
        const size = Math.max(rect.width, rect.height);

        ripple.className = "ripple";
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
        ripple.style.top = `${event.clientY - rect.top - size / 2}px`;

        button.appendChild(ripple);
        setTimeout(() => ripple.remove(), 700);

        const message = document.createElement("div");
        message.className = "action-message";
        message.textContent = "Terima kasih telah mencoba halaman portfolio ini!";
        container.appendChild(message);

        requestAnimationFrame(() => {
            message.classList.add("visible");
        });

        setTimeout(() => {
            message.classList.remove("visible");
            message.addEventListener("transitionend", () => {
                message.remove();
            }, { once: true });
        }, 2600);
    });
}
