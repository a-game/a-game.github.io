export function smoothScroll() {
    // Add listener for all anchor links
    // for smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
};

export function ScrollToTopFade() {
    document.addEventListener('scroll', () => {
        const scrollButton = document.querySelector('.scroll-top');
        if (!scrollButton) {
            return;
        }
        if (window.scrollY >= 50) {
            scrollButton.style.opacity = 1;
        } else {
            scrollButton.style.opacity = 0;
        }
    })
};