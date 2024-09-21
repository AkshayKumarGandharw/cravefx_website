console.log("hello");

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

// carousel use autoplay

// swiper use for js
 new Swiper('.slider-wrapper', {
    // Optional parameters
   
    loop: true,
    gapCursor:true,
    spaceBetween:30,
    autoplay: {
        delay :1000,
        disableOnInteraction:false
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBultets:true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
breakpoints: {
    0: {
        slidesPerView:2
    },
    576: {
        slidesPerView:3
    },
    768: {
        slidesPerView:4
    },
    1200: {
        slidesPerView:6
    }
}  

  });