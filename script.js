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

// Team Info person container - change text content in mouseover
const teamCard1 = document.querySelector('.team-card-1');
const teamCard2 = document.querySelector('.team-card-2');
const teamCard3 = document.querySelector('.team-card-3');

changeInfo = (card) => {
   
    const infoName = document.querySelector('.info-name');
    const infoPosition = document.querySelector('.info-position');
    const photoshop = document.querySelector(".photoshop");
    const ilustrator = document.querySelector(".ilustrator");
    const indesign = document.querySelector(".indesign");
    const photoshopProcent = document.querySelector(".photoshop-procent");
    const ilustratorProcent = document.querySelector(".ilustrator-procent");
    const indesignProcent = document.querySelector(".indesign-procent");
    const text = document.querySelector('.info-container-text');
    if(card == "card1") {
        infoName.textContent = "Shanruk Rashid"
        infoPosition.textContent = "Senior Directour |  Critical Studio"
        photoshop.style.width = 90 +"%"
        ilustrator.style.width = 80 +"%"
        indesign.style.width = 95 +"%"
        photoshopProcent.textContent = "90%"
        ilustratorProcent.textContent = "80%"
        indesignProcent.textContent = "95%"
        text.textContent = "Shanruk Rashid Senior Directour |  Critical Studio consectetur, adipisicing elit. Deleniti repellat laboriosam laborum nulla vel, autem corporis perspiciatis, doloremque, enim cupiditate minus! Voluptatem impedit ullam tempora sit doloribus quaerat ad quo. ipsum dolor sit, amet consectetur adipisicing elit. Cumque vero officia ipsa, ex error accusantium sed ducimus, doloremque rem ab, repellat eveniet minus iste! Voluptatibus tenetur a distinctio odio maiores?"
    } else if (card == "card2") {
        infoName.textContent = "Mohammad Rasel"
        infoPosition.textContent = "CEO  |  Critical Studio"
        photoshop.style.width = 80 +"%"
        ilustrator.style.width = 85 +"%"
        indesign.style.width = 90 +"%"
        photoshopProcent.textContent = "80%"
        ilustratorProcent.textContent = "85%"
        indesignProcent.textContent = "90%"
        text.textContent = "Mohammad Rasel CEO  |  Critical Studio consectetur, adipisicing elit. Deleniti repellat laboriosam laborum nulla vel, autem corporis perspiciatis, doloremque, enim cupiditate minus! Voluptatem impedit ullam tempora sit doloribus quaerat ad quo. ipsum dolor sit, amet consectetur adipisicing elit. Cumque vero officia ipsa, ex error accusantium sed ducimus, doloremque rem ab, repellat eveniet minus iste! Voluptatibus tenetur a distinctio odio maiores?"

    } else if (card == "card3") {
        infoName.textContent = "Tahmid Hasan"
        infoPosition.textContent = "Key account manager |  Critical Studio"
        photoshop.style.width = 90 +"%"
        ilustrator.style.width = 70 +"%"
        indesign.style.width = 80 +"%"
        photoshopProcent.textContent = "90%"
        ilustratorProcent.textContent = "70%"
        indesignProcent.textContent = "80%"
        text.textContent = "Tahmid Hasan Key account manager |  Critical Studio  consectetur, repellat laboriosam laborum nulla vel, autem corporis perspiciatis, doloremque, enim cupiditate minus! Voluptatem impedit ullam tempora sit doloribus quaerat ad quo. ipsum dolor sit, amet consectetur adipisicing elit. Cumque vero officia ipsa, ex error accusantium sed ducimus, doloremque rem ab, repellat eveniet minus iste! Voluptatibus tenetur a distinctio odio maiores?"

    }     
}
    
    teamCard1.addEventListener('mouseover', () => changeInfo("card1"))
    teamCard2.addEventListener('mouseover', () => changeInfo("card2"))
    teamCard3.addEventListener('mouseover', () => changeInfo("card3"))
// End of info team container


// Slider customers
let images = [
    "./img/cust-1.png", 
    "./img/cust-2.png", 
    "./img/cust-3.png",
    "./img/cust-4.png"
 ];

 let sliderText = [
     "Awesome Design and great support ! Highly recommend",
     "Nice, Highly recommend So nisi elit consequat",
      "ipsum, nec sagittis sem nibh id elit duis",
      "sed odio sit amet nibh. sagittis sem"
 ]

 const next = document.querySelector('.next');
 const prev = document.querySelector('.prev');

 let num = 0;

 function nextSlide() {
     let slider = document.querySelector('.mySlider');
     let text = document.querySelector('.slider-text')
         num++;
     if ( num >= images.length ) {
        num = 0;
      }
      slider.src = images[num];
      text.textContent = sliderText[num]
    }
 
 function prevSlide() {
    let slider = document.querySelector('.mySlider');
    let text = document.querySelector('.slider-text')

    num--;
    if ( num < 0 ) {
      num = images.length-1;
    }
    slider.src = images[num];
    text.textContent = sliderText[num]

  }

  next.addEventListener('click', nextSlide)
  prev.addEventListener('click', prevSlide)

//   Koniec slidera

});
