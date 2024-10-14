console.log("hello");

//code for preloader 

var preloader = document.getElementById('preloader')
window.addEventListener('load',() => {

    setTimeout('l()', 1000)
})
function l(){
    preloader.style.display = "none";
}

// code for navbar
const mynav = document.querySelector('.navbar');

window.addEventListener('scroll',()=>{

    if(window.scrollY >= 1){

        mynav.classList.add('my_scroll_up_down');
    
    }
    else if(window.scrollY <= 1){
        mynav.classList.remove('my_scroll_up_down');
        
    }
});

AOS.init();

//   ------------------------------------------

new Swiper('.slider-wrapper', {
    // Optional parameters

    loop: true,
    gapCursor: true,
    spaceBetween: 50,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBultets: true
    },

    breakpoints: {
        0: {
            slidesPerView: 2
        },
        576: {
            slidesPerView: 3
        },
        768: {
            slidesPerView: 4
        }
        ,
        1200: {
            slidesPerView: 6
        }
    }

});




