document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    const yearEl = document.getElementById('currentYear');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                const navbarToggler = document.querySelector('.navbar-toggler');
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    navbarToggler.click();
                }

                // Scroll to target
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Form Validation and Submission Simulation
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                event.preventDefault();
                
                // Simulate form submission process
                const btn = form.querySelector('button[type="submit"]');
                const originalText = btn.innerHTML;
                
                // Loading state
                btn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Sending...';
                btn.disabled = true;

                // Simulate network request delay (1.5s)
                setTimeout(() => {
                    // Success state
                    btn.innerHTML = '<i class="fas fa-check me-2"></i>Sent Successfully!';
                    btn.classList.remove('btn-accent');
                    btn.classList.add('btn-success');
                    
                    form.reset();
                    form.classList.remove('was-validated');
                    
                    // Reset button after 3 seconds
                    setTimeout(() => {
                        btn.innerHTML = originalText;
                        btn.classList.remove('btn-success');
                        btn.classList.add('btn-accent');
                        btn.disabled = false;
                    }, 3000);
                }, 1500);
            }
            form.classList.add('was-validated');
        }, false);
    }

    // Scroll Reveal Animation Engine
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
    
    const reveal = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };

    // Attach scroll listener and trigger once on load
    window.addEventListener('scroll', reveal);
    reveal();
});
