
const images = document.querySelectorAll(".gallery-image");

let currentIndex = 0;

const preview = document.createElement("div");
preview.id = "imagePreview";

preview.innerHTML = `
    <button id="closePreview" aria-label="Close">&times;</button>
    <button id="previousImage">P</button>
    <img id="largeImage" src="" alt="Large gallery preview">
    <button id="nextImage">F</button>
`;

document.body.appendChild(preview);

images.forEach((image, index) => {
    image.style.cursor = "pointer";

    image.addEventListener("click", function () {
        currentIndex = index;
        showImage();
        preview.style.display = "flex";
    });
});

function showImage() {
    document.getElementById("largeImage").src =
        images[currentIndex].src;

    document.getElementById("largeImage").alt =
        images[currentIndex].alt;
}

document.getElementById("previousImage").addEventListener("click", () => {
    currentIndex =
        (currentIndex - 1 + images.length) % images.length;
    showImage();
});

document.getElementById("nextImage").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
});

document.getElementById("closePreview").addEventListener("click", () => {
    preview.style.display = "none";
});
 
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const message = document.getElementById("formMessage");

    if (!form || !message) {
        console.error("Contact form or message area not found.");
        return;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const firstName = document.getElementById("Name")?.value.trim();
        const surname = document.getElementById("Surname")?.value.trim();
        const phone = document.getElementById("Contact")?.value.trim();
        const email = document.getElementById("Email")?.value.trim();

        if (!firstName || !surname || !phone || !email) {
            showMessage("Please fill in all required fields.", false);
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            showMessage("Please enter a valid email address.", false);
            return;
        }

        showMessage("Success! Your form passed validation.", true);
    });

    function showMessage(text, success) {
        message.textContent = text;
        message.style.display = "block";
        message.style.padding = "12px";
        message.style.marginTop = "15px";
        message.style.borderRadius = "6px";
        message.style.backgroundColor = success ? "#d1e7dd" : "#f8d7da";
        message.style.color = success ? "#0f5132" : "#842029";
        message.style.border = success
            ? "1px solid #badbcc"
            : "1px solid #f5c2c7";
    }
});

