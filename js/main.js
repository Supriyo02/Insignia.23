// change navbar styles on Scroll //

window.addEventListener('scroll', () => {

    document.querySelector('nav').classList.toggle
    ('window-scroll',window.scrollY > 0)
})

document.addEventListener("DOMContentLoaded", function() {
    const learnMoreLinks = document.querySelectorAll(".learn-more");

    learnMoreLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const card = this.closest(".card");
            card.classList.toggle("rotate");
        });
    });
});

// show/hide faq answer 

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        // change icon
        const icon = faq.querySelector('.faq_icon i');
        if(icon.className === 'uil uil-plus'){
            icon.className ='uil uil-minus';
        }else{
            icon.className = 'uil uil-plus';
        }
    })
})

// // Initialize Swiper 

// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 2,
//     spaceBetween: 30,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     // whenwindow width is >= 600px
//     breakpoints: {
//         600: {
//             slidesPerView: 3,
//         }
//     }
// });

// Initialize Nav menu 

const menu = document.querySelector('.nav_menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

// close nav menu
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)

// Loading Page

var loader = document.getElementById("loader-wrapper");

window.addEventListener("load", function() {
    loader.style.display ="none";
})

// Initialize Sliding

// 


/* Members ------*/
var swiper = new Swiper(".slide-content", {
    slidesPerView: 4,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    autoplay: {
        delay: 2000,
    },
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        400: {
            slidesPerView: 2,
        },
        800: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
    },
  });

  /* --------Members */