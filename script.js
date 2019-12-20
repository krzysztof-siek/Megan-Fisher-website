window.addEventListener('DOMContentLoaded', (event) => {

    window.addEventListener('resize', () => {
        let windowWidth = window.innerWidth;
        if (windowWidth > 768) {
            const navLinks = document.querySelector('.nav-links');
            const navButton = document.querySelector('.nav-button');
            navLinks.classList.remove('nav-open')
            navButton.classList.remove("isOpen")
        }

    })

    const navButton = document.querySelector('.nav-button');
    navButton.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        navButton.classList.toggle("isOpen")
        navLinks.classList.toggle('nav-open')
    })


    window.addEventListener('scroll', () => {
        let scrollY = window.scrollY;
        const nav = document.querySelector('#nav')
        const navButton = document.querySelector('.nav-button');
        if (scrollY > 50) {
            nav.classList.add('fixed')
            navButton.classList.add('button-fixed')
        } else {
            nav.classList.remove('fixed')
            navButton.classList.remove('button-fixed')
        }

    })





});
