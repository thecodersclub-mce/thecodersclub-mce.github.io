document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.menu-toggle');
    const menuBar = document.querySelector('.menu-bar');

    toggleButton.addEventListener('click', () => {
        menuBar.classList.toggle('show'); // Toggles the "show" class
    });
});
