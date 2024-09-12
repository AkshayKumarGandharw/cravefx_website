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