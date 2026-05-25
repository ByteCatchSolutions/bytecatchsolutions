/* ================================================
BYTECATCH SOLUTIONS — script.js
================================================ */

/* ── SCROLL REVEAL ── */
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 80);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

reveals.forEach(el => observer.observe(el));


/* ── ACTIVE NAV HIGHLIGHT ── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 130) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === `#${current}`) {
            link.style.color = '#3d9eff';
        }
    });
});


/* ── CONTACT FORM ── */
const sendBtn = document.querySelector('.send-btn');

if (sendBtn) {
    sendBtn.addEventListener('click', () => {
        const inputs = document.querySelectorAll('.contact-form .form-input');
        const name = inputs[0].value.trim();
        const email = inputs[1].value.trim();
        const service = inputs[2].value.trim();
        const message = document.querySelector('.contact-form .form-textarea').value.trim();

        if (!name || !email || !message) {
            alert('Please fill in your name, email and message before sending.');
            return;
        }

        const subject = encodeURIComponent(`New Enquiry from ${name} — ${service || 'ByteCatch Solutions'}`);
        const body = encodeURIComponent(
            `Hi ByteCatch Solutions,\n\nMy name is ${name}.\nEmail: ${email}\nService Needed: ${service || 'Not specified'}\n\nMessage:\n${message}\n\nThank you.`
        );

        window.open(`mailto:info@bytecatchsolutions.co.za?subject=${subject}&body=${body}`, '_blank');
    });
}


/* ── PACKAGE BUTTON SMOOTH SCROLL ── */
document.querySelectorAll('.pkg-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
    });
});


/* ── NAV MOBILE TOGGLE ── */
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-links');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });
}


/* ── YEAR AUTO UPDATE ── */
const yearEl = document.querySelector('.footer-year');
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}
