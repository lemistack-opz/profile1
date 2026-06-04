// Typing Effect
const roles = ["Web Developer", "Technical Writer", "Content Creator", "Problem Solver"];
let i = 0, j = 0, current = "", isDeleting = false;
const el = document.querySelector(".typing");

function type() {
    current = roles[i];
    if (!isDeleting) {
        el.textContent = current.substring(0, j++);
        if (j > current.length) {
            isDeleting = true;
            setTimeout(type, 1200);
            return;
        }
    } else {
        el.textContent = current.substring(0, j--);
        if (j < 0) {
            isDeleting = false;
            i = (i + 1) % roles.length;
        }
    }
    setTimeout(type, isDeleting ? 60 : 100);
}

document.addEventListener('DOMContentLoaded', () => {
    type();
    console.log('%cPortfolio loaded successfully!', 'color:#6a11cb; font-size:14px;');
});

