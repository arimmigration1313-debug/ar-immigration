// ============================================
// Main JavaScript Functionality
// ============================================

// Theme Toggle Functionality
function initThemeToggle() {
    // Check for saved theme preference or default to 'light'
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    // Update toggle icon
    updateThemeIcon(savedTheme);

    // Add click event to theme toggle button
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';

            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);

            // Refresh AOS on theme change
            if (typeof AOS !== 'undefined') {
                AOS.refresh();
            }
        });
    }
}

function updateThemeIcon(theme) {
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        const icon = themeToggle.querySelector('i');
        if (icon) {
            if (theme === 'dark') {
                icon.className = 'fas fa-sun';
            } else {
                icon.className = 'fas fa-moon';
            }
        }
    }
}

// ============================================

// Sticky Navigation on Scroll
function initStickyNav() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Mobile Menu Toggle
function initMobileMenu() {
    const toggle = document.querySelector('.navbar-toggle');
    const menu = document.querySelector('.navbar-menu');
    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            menu.classList.toggle('active');
            toggle.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const menuLinks = menu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('active');
                toggle.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!toggle.contains(e.target) && !menu.contains(e.target)) {
                menu.classList.remove('active');
                toggle.classList.remove('active');
            }
        });
    }
}

// Smooth Scroll to Sections
// function initSmoothScroll() {
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//         anchor.addEventListener('click', function (e) {
//             const href = this.getAttribute('href');
//             if (href !== '#' && href !== '#!') {
//                 e.preventDefault();
//                 const target = document.querySelector(href);
//                 if (target) {
//                     const offsetTop = target.offsetTop - 80; // Account for navbar height
//                     window.scrollTo({
//                         top: offsetTop,
//                         behavior: 'smooth'
//                     });
//                 }
//             }
//         });
//     });
// }

// Counter Animation
function initCounters() {
    const counters = document.querySelectorAll('[data-counter]');

    const animateCounter = (counter) => {
        const target = parseInt(counter.getAttribute('data-counter'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };

        updateCounter();
    };

    // Intersection Observer to trigger when in viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                animateCounter(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

// FAQ Accordion
function initAccordion() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const accordionItem = header.parentElement;
            const accordionBody = accordionItem.querySelector('.accordion-body');
            const isActive = accordionItem.classList.contains('active');

            // Close all accordion items
            document.querySelectorAll('.accordion-item').forEach(item => {
                item.classList.remove('active');
                item.querySelector('.accordion-body').style.maxHeight = null;
            });

            // Open clicked item if it wasn't active
            if (!isActive) {
                accordionItem.classList.add('active');
                accordionBody.style.maxHeight = accordionBody.scrollHeight + 'px';
            }
        });
    });
}

// Active Navigation Link
// function initActiveNav() {
//     const sections = document.querySelectorAll('section[id]');
//     const navLinks = document.querySelectorAll('.navbar-menu a');

//     window.addEventListener('scroll', () => {
//         let current = '';

//         sections.forEach(section => {
//             const sectionTop = section.offsetTop - 100;
//             const sectionHeight = section.clientHeight;

//             if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
//                 current = section.getAttribute('id');
//             }
//         });

//         navLinks.forEach(link => {
//             link.classList.remove('active');
//             if (link.getAttribute('href') === `#${current}`) {
//                 link.classList.add('active');
//             }
//         });
//     });
// }

// WhatsApp Floating Button
function initWhatsAppButton() {
    const whatsappBtn = document.querySelector('.whatsapp-float');

    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const phoneNumber = whatsappBtn.getAttribute('data-phone');
            const message = encodeURIComponent('Hello, I would like to inquire about your immigration services.');
            window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
        });
    }
}

// Form Validation
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }

        // Email validation
        if (input.type === 'email' && input.value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value)) {
                isValid = false;
                input.classList.add('error');
            }
        }
    });

    return isValid;
}

// Initialize AOS (Animate On Scroll)
function initAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100,
            easing: 'ease-out'
        });
    }
}


window.initMainScripts = function () {
    // initThemeToggle();
    initStickyNav();
    // initMobileMenu();
    // initSmoothScroll();
    initCounters();
    initAccordion();
    // initActiveNav();
    initWhatsAppButton();
    // initAOS();
};

