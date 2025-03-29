document.addEventListener('DOMContentLoaded', () => {
    const menuLinks = document.querySelectorAll('.menu-bar a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            alert(`You clicked on ${link.textContent}`);
        });
    });
});

