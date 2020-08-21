

$(document).ready(function(){
    $('.banner-area').owlCarousel({
        loop:true,
        dots:true,
        nav:false,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

      // Testimonial section codes goes here 
      $('.testimonial').owlCarousel({
        loop:true,
        dots:true,
        nav:false,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items: 2
            }
        }
    });

    // Testimonial section codes goes here 
    $('.clients').owlCarousel({
        loop:true,
        dots:true,
        nav:false,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items: 5
            }
        }
    });

    
    // Images Popup Codes Here 
    $('.popup-image').magnificPopup({
        type:'image',
        gallery:{
            enabled:true
          }
    });

    //Counter up codes here 
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

     // Images Popup Codes Here 
     $('.popup-video').magnificPopup({
        type:'iframe'
    });

    $('#nav').onePageNav();


});

$(window).on('scroll', function(){

    if($(this).scrollTop() > 1){
        $('.header-area').addClass("sticky");
    }
    else{
        $('.header-area').removeClass("sticky");
    }
});