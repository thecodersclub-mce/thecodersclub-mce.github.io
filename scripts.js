document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.menu-toggle');
    const menuBar = document.querySelector('.menu-bar');
    const secondaryMenu = document.querySelector('.secondary-menu');

    toggleButton.addEventListener('click', () => {
        secondaryMenu.style.display = secondaryMenu.style.display === 'none' ? 'flex' : 'none';

        menuBar.classList.toggle('show');
    });
});
