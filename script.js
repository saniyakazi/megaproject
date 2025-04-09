// let navbar = document.querySelector('.header .navbar');
// let menuBar = document.querySelector('#menu');

// menuBtn.onclick = () => {
//     menuBtn.classList.toggle('fa-times');
//     navbar.classList.toggle('active');
// }

// window.onscroll = () =>{
//     menuBtn.classList.toggle('fa-times');
//     navbar.classList.toggle('active');
// }



let themeBtn = document.querySelector('#theme-btn');

themeBtn.onclick = () => {
    themeBtn.classList.toggle('fa-sun');

    if(themeBtn.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }
    else{
        document.body.classList.remove('active');
    }
};


var swiper = new Swiper(".gallery-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 20,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    loop: true,
    autoplay:{
        delay:1500,
        disableOnInteraction:false,
    }
});

var swiper = new Swiper(".review-slider", {
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    spaceBetween:20,
    autoplay:{
        delay:500,
        disableOnInteraction:false,
    },
     pagination: {
        el: ".swiper-pagination",
    },
});

// AOS.init({
//     delay: 400, 
//   duration: 800,
// });
AOS.init( {
    delay: 400, 
    duration: 800
});

