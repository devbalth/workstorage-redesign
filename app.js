// Selector

const menu = document.querySelector('.menu-toggle')
const close = document.querySelector('.nav-menu-close');
const showcase = document.querySelector('.showcase')
const links = document.querySelector('.menu');
const navLinks = document.querySelectorAll('.menu a');



// Function

const toggle = () => {
    menu.classList.toggle('active');
    showcase.classList.toggle('active');
    links.classList.toggle('nav-toggle');
}



// Event Listener

menu.addEventListener('click', e => {
    e.stopPropagation();
    toggle();
})

close.addEventListener('click', e => {
    e.stopPropagation();
    toggle();
})

navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.stopPropagation();
        toggle();
    })
})