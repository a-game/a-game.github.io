export default function setAge() {
    const ageDifMs = Date.now() - new Date(1985, 6, 26).getTime();
    const ageDate = new Date(ageDifMs); // milliseconds from epoch
    const ageDiv = document.querySelector('#age');
    if (ageDiv) {
        ageDiv.textContent = Math.abs(ageDate.getUTCFullYear() - 1970);
    }
};