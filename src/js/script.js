window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu-item'),
    hamburger = document.querySelector('.gamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('gamburger-active');
        menu.classList.toggle('menu-active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('gamburger-active');
            menu.classList.toggle('menu-active');
        })
    })
})
