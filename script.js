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

//  TO CALE DO DOKONCZENIA, ZEBY POBIERALO INFO Z OSOBNEGO JSONA O OSOBIE I WYSWIETLALO
//  info-open team card
// const cards = document.querySelectorAll('.team-card');

// Pobrać każdą kartę osobno żeby łatwiej czytać z której karty jest kliknięcie i text wyświetlać

// hoverIn = (e) => {
//     const infoCont = document.querySelector('.info-container');
//     infoCont.classList.add('info-open')
//     let contText = document.querySelector(".info-cont-text")
//     console.log(e.target)
    // if(e.target.classList.value.includes("team-card-3")) {
    //     contText.textContent = "Tahmid"
    //     console.log(e.target.classList.value)
    // } else if(e.target.classList.value.includes("team-card-2")) {
    //     contText.textContent = "Mohammad"
    //     console.log(e.target.classList.value)

    // } else if (e.target.classList.value.includes("team-card-1")) {
    //     contText.textContent = "Shanruk"
    //     console.log(e.target.classList.value)

    // } else {
    //     contText.textContent = "Somethink wrong"
    //     console.log(e.target.classList.value)


    // }
    
// }

// hoverOut = () => {
//     const infoCont = document.querySelector('.info-container');
//     infoCont.classList.remove('info-open')
// }

// cards.forEach(card => card.addEventListener('click', hoverIn));
// cards.forEach(card => card.addEventListener('mouseout', hoverOut));
    
// KONIEC!!!




});
