document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.menu-toggle');
    const menuBar = document.querySelector('.menu-bar');
    const header = document.querySelector('header');

    toggleButton.addEventListener('click', () => {
        menuBar.classList.toggle('show'); // Toggles the "show" class
    });

    // Hide menu bars below container 1 when toggle is pressed
    toggleButton.addEventListener('click', () => {
        if (menuBar.classList.contains('show')) {
            header.style.marginBottom = '0'; // Remove spacing for hidden bars
        } else {
            header.style.marginBottom = '20px'; // Restore spacing when menu closes
        }
    });
});
