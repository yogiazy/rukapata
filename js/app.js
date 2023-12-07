const hams = document.getElementById('hamburger');
const nav = document.getElementById('nav-menu');
hams.addEventListener('click', function () {
    hams.classList.toggle('hamburger-active');
    nav.classList.toggle('hidden');
});