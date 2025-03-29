document.addEventListener('DOMContentLoaded', () => {
    // Toggle Menu Functionality
    const toggleButton = document.querySelector('.menu-toggle');
    const menuBar = document.querySelector('.menu-bar');
    const siteHeader = document.querySelector('header');

    toggleButton.addEventListener('click', () => {
        menuBar.classList.toggle('show'); // Toggle "show" class
    });

    // Scroll to Top Button (Optional)
    const scrollTopButton = document.createElement('button');
    scrollTopButton.textContent = '↑';
    scrollTopButton.setAttribute('aria-label', 'Scroll to top');
    scrollTopButton.style.position = 'fixed';
    scrollTopButton.style.bottom = '20px';
    scrollTopButton.style.right = '20px';
    scrollTopButton.style.padding = '10px 15px';
    scrollTopButton.style.background = '#007BFF';
    scrollTopButton.style.color = 'white';
    scrollTopButton.style.border = 'none';
    scrollTopButton.style.borderRadius = '5px';
    scrollTopButton.style.cursor = 'pointer';
    scrollTopButton.style.display = 'none'; // Hidden by default
    document.body.appendChild(scrollTopButton);

    // Show/Hide "Scroll to Top" Button
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopButton.style.display = 'block';
        } else {
            scrollTopButton.style.display = 'none';
        }
    });

    // Scroll to Top Action
    scrollTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });

    // Highlight Active Section in Menu
    const menuLinks = document.querySelectorAll('.menu-bar a');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY + siteHeader.offsetHeight + 10; // Adjust for header height

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (currentScroll >= sectionTop && currentScroll < sectionTop + sectionHeight) {
                menuLinks.forEach(link => link.classList.remove('active'));
                const activeLink = document.querySelector(`.menu-bar a[href="#${section.id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    });

    // Add smooth scrolling behavior for menu links
    menuLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const targetId = link.getAttribute('href').slice(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - siteHeader.offsetHeight,
                    behavior: 'smooth',
                });
            }
        });
    });
});
