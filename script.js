// ==========================
// LOKUM BROWSER
// script.js
// ==========================

// Header effect
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.style.background = "rgba(9,9,11,.9)";
        header.style.borderBottom = "1px solid rgba(255,255,255,.08)";

    } else {

        header.style.background = "rgba(9,9,11,.65)";
        header.style.borderBottom = "1px solid rgba(255,255,255,.05)";

    }

});

// Reveal animation
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");
    observer.observe(section);

});

// Browser tilt
const browser = document.querySelector(".browser");

if (browser) {

    browser.addEventListener("mousemove", (e) => {

        const rect = browser.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = (x - rect.width / 2) / 35;
        const rotateX = -(y - rect.height / 2) / 35;

        browser.style.transform =
            `perspective(1200px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-6px)`;

    });

    browser.addEventListener("mouseleave", () => {

        browser.style.transform =
            "perspective(1200px) rotateX(0deg) rotateY(0deg)";

    });

}

// Address typing
const address = document.querySelector(".address");

if (address) {

    const text = "lokumbrowser.site";

    address.textContent = "";

    let i = 0;

    function type() {

        if (i < text.length) {

            address.textContent += text.charAt(i);

            i++;

            setTimeout(type, 70);

        } else {

            address.innerHTML += '<span class="cursor">|</span>';

        }

    }

    setTimeout(type, 600);

}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// Fade in
window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});

// ==========================
// Tester Form
// ==========================

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function () {

        const button = form.querySelector("button");

        button.disabled = true;
        button.textContent = "Submitting...";

        const popup = document.createElement("div");

        popup.className = "popup";

        popup.innerHTML = `
            <strong>✅ Application sent!</strong><br>
            Thanks for applying to become a Lokum Browser tester.
        `;

        document.body.appendChild(popup);

        setTimeout(() => {

            popup.classList.add("show-popup");

        }, 10);

    });

}
