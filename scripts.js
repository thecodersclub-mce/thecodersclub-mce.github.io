document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.menu-toggle');
    const menuBar = document.querySelector('.menu-bar');

    toggleButton.addEventListener('click', () => {
        menuBar.style.display = menuBar.style.display === 'none' ? 'flex' : 'none';
    });
});
