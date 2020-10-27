$(document).ready(function(){

  $('#mobile-menu-active').meanmenu({
    meanMenuContainer:'.mobile-menu',
    meanScreenWidth:"767",

  });
      
     new WOW().init();

    $('.advertise-active').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        autoplay:true,
        navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
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
    
       // magnificPopup
    $('.video').magnificPopup({
        type:'iframe',
     iframe: {
      markup: '<div class="mfp-iframe-scaler">'+
                '<div class="mfp-close"></div>'+
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
              '</div>', 
      patterns: {
        youtube: {
          index: 'youtube.com/', 
     
          id: 'v=',
          src: 'https://www.youtube.com/embed/%id%?autoplay=1' 
        },
        vimeo: {
          index: 'vimeo.com/',
          id: '/',
          src: '//player.vimeo.com/video/%id%?autoplay=1'
        },
        gmaps: {
          index: '//maps.google.',
          src: '%id%&output=embed'
        }
      },
      srcAction: 'iframe_src', 
     }  
     });
});