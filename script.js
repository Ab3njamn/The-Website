// Your JavaScript code goes here
document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');

    // Toggle navigation links on menu icon click
    menuIcon.addEventListener('click', function () {
        navLinks.classList.toggle('show');
    });

    // Close navigation links when clicking outside the menu on small screens
    document.addEventListener('click', function (event) {
        const isMenuIconClicked = menuIcon.contains(event.target);
        const isNavLinksClicked = navLinks.contains(event.target);

        if (!isMenuIconClicked && !isNavLinksClicked && window.innerWidth <= 768) {
            navLinks.classList.remove('show');
        }
    });

    // Close navigation links when window is resized to more than 768px
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('show');
        }
    });
});
