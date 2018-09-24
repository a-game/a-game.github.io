// The whole document (HTML) has been loaded.
// Excluding images, js, and css
document.addEventListener('DOMContentLoaded', function () {
    addSmoothScrolling();
    setAge();
    setCopyRightYear();
});

document.addEventListener('load', function() {
    // remove loader.
})

function addSmoothScrolling() {
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

function setAge() {
    var ageDifMs = Date.now() - new Date(1985, 6, 26).getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    document.getElementById('age').textContent = Math.abs(ageDate.getUTCFullYear() - 1970);
};

function setCopyRightYear() {
    document.getElementById('thisYear').textContent = new Date().getFullYear();
};