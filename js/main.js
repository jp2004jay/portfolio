const toggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

window.addEventListener('load', () => {
    document.querySelector('.home').classList.add('animate');
});

const observerAbout = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        } else {
            entry.target.classList.remove('animate');
        }
    });
}, { threshold: 0.2 });

observerAbout.observe(document.querySelector('.about'));

const cards = document.querySelectorAll('.project-card');

const observerProject = new IntersectionObserver((entries) => {
    let delay = 0;

    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('animate');
            }, delay);
            delay += 150; // delay between each card
        } else {
            entry.target.classList.remove('animate'); // remove for repeat on re-entry
        }
    });
}, {
    threshold: 0.3
});

cards.forEach(card => observerProject.observe(card));

const skillCards = document.querySelectorAll('.skill-card');

const skillObserver = new IntersectionObserver((entries) => {
    let delay = 0;

    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('animate');
            }, delay);
            delay += 150; // 150ms delay between each card
        } else {
            entry.target.classList.remove('animate'); // optional for re-animating on scroll
        }
    });
}, { threshold: 0.3 });

skillCards.forEach(card => skillObserver.observe(card));

const contactObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        } else {
            entry.target.classList.remove('animate'); // Optional: for re-animation
        }
    });
}, {
    threshold: 0.3
});

contactObserver.observe(document.querySelector('.contact-info'));
contactObserver.observe(document.querySelector('.contact-map'));
