export function setAge() {
    const ageDifMs = Date.now() - new Date(1985, 6, 26).getTime();
    const ageDate = new Date(ageDifMs); // milliseconds from epoch
    const ageDiv = document.querySelector('#age');
    if (ageDiv) {
        ageDiv.textContent = Math.abs(ageDate.getUTCFullYear() - 1970);
    }
};

export function setCopyRightYear() {
    const yearDiv = document.querySelector('#thisYear');
    if (yearDiv) {
        yearDiv.textContent = new Date().getFullYear();
    }
};

export function smoothScroll() {
    // Add listener for all anchor links
    // for smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
};
