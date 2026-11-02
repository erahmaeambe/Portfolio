// Mobile navigation
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
    );
});

// OPEN CERTIFICATE
function openCertificate(imageSrc) {
    const modal = document.getElementById("certificateModal");
    const preview = document.getElementById("certificatePreview");

    preview.src = imageSrc;
    modal.classList.add("active");
}

// CLOSE CERTIFICATE
function closeCertificate() {
    const modal = document.getElementById("certificateModal");

    modal.classList.remove("active");
}

// CLOSE WHEN CLICKING OUTSIDE THE IMAGE
document.getElementById("certificateModal").addEventListener("click", function(event) {
    if (event.target === this) {
        closeCertificate();
    }
});

// CLOSE USING ESCAPE KEY
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeCertificate();
    }
});

// Close navigation after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        document.querySelectorAll(".nav-links a")
            .forEach(item => item.classList.remove("active"));

        link.classList.add("active");
    });
});

// Toggle glow intensity
document.querySelector(".theme-button")
    .addEventListener("click", () => {
        document.body.classList.toggle("low-glow");
    });

// Technical and soft skills tabs
document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", () => {
        document.querySelectorAll(".tab")
            .forEach(item => item.classList.remove("active"));

        tab.classList.add("active");

        document.body.classList.toggle(
            "soft-mode",
            tab.dataset.tab === "soft"
        );
    });
});

// Automatically update copyright year
document.getElementById("year").textContent =
    new Date().getFullYear();

// Contact form
document.getElementById("contact-form")
    .addEventListener("submit", event => {
        event.preventDefault();

        const name = document.getElementById("name")
            .value.trim();

        const email = document.getElementById("email")
            .value.trim();

        const message = document.getElementById("message")
            .value.trim();

        const subject = encodeURIComponent(
            `Portfolio contact from ${name}`
        );

        const body = encodeURIComponent(
            `Name: ${name}\n` +
            `Email: ${email}\n\n` +
            `Message:\n${message}`
        );

        const note = document.getElementById("form-note");

        note.style.display = "block";
        note.textContent = "Opening your email application...";

        window.location.href =
            `mailto:erahmae.ambe@gmail.com` +
            `?subject=${subject}&body=${body}`;
    });