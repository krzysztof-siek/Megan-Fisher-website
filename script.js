const btn = document.querySelector(".hamburger-menu")
const toggle = document.querySelectorAll(".toggle")
const nav = document.querySelector('.nav')



btn.addEventListener("click", () => {
    for (let i = 0; i < toggle.length; i++) {
        toggle[i].classList.toggle("open");
    }
    nav.classList.toggle('open')
})
