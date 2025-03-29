document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.menu-toggle');
    const menuBar = document.querySelector('.menu-bar');
    const secondaryMenu = document.querySelector('.secondary-menu');

    toggleButton.addEventListener('click', () => {
        // Hide secondary menu on toggle
        secondaryMenu.style.display = secondaryMenu.style.display === 'none' ? 'flex' : 'none';

        // Toggle visibility of the menu-bar
        menuBar.classList.toggle('show');
    });
});
