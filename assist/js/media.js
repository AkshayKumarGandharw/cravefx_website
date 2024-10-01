// check for connectivity
console.log("connect successfully..");

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
        // 0: {
        //     slidesPerView: 2.35
        // },
        // 576: {
        //     slidesPerView: 2.35
        // }
        // ,
        // 1200: {
        //     slidesPerView: 2.35
        // }
    }

});
