
$(document).ready(function($){
	"use strict";

	// WOW Js Active
	new WOW().init();

	// ---- Active
    $(".hero-carosel").owlCarousel({
            items:1,
            nav:true,
            margin:0,
            loop:true,
            autoplay:false,
            dots:true,
            smartSpeed:2000,
            navText: [
                "<i class='fa fa-long-arrow-left'></i>",
                "<i class='fa fa-long-arrow-right'></i>"
            ],
          
        });
// ---- Active
    $(".project-carousel").owlCarousel({
            items:3,
            nav:true,
            margin:30,
            center:true,
            loop:true,
            autoplay:false,
            dots:true,
            smartSpeed:2000,
            navText: [
                "<i class='fa fa-long-arrow-left'></i>",
                "<i class='fa fa-long-arrow-right'></i>"
            ],
            responsive:{
                    0:{
                        items:1,
                        nav:true,
                         loop:true
                    },
                    450:{
                        items:1,
                        nav:true,
                         loop:true
                    },
                    600:{
                        items:2,
                        nav:true,
                         loop:true
                    },
                    1000:{
                        items:3,
                        nav:true,
                        loop:true
                    }
                }

           
          
        });

        // ---- Active
    $(".fideback-carousel").owlCarousel({
            items:1,
            nav:false,
            margin:0,
            loop:true,
            autoplay:false,
            dots:true,
            smartSpeed:2000
          
        });        

        // ---- Active
    $(".clints-carosel").owlCarousel({
            items:4,
            nav:false,
            margin:30,
            loop:true,
            autoplay:false,
            dots:true,
            smartSpeed:2000,

             responsive:{
                    0:{
                        items:1,
                        nav:false,
                         loop:true
                    },
                    450:{
                        items:1,
                        nav:false,
                         loop:true
                    },
                    600:{
                        items:2,
                        nav:false,
                         loop:true
                    },
                    1000:{
                        items:3,
                        nav:false,
                        loop:true
                    }
                }
          
        });


      
        
    // Closes the Responsive Menu on Menu Item Click
     $('.navbar-collapse ul li a:not(.dropdown-toggle)').on('click', function() {
            $('.navbar-toggle:visible').click();
        });


     // Active Back to top 
  if ($('#back-to-top').length) {
    var scrollTrigger = window.innerHeight, // px
    backToTop = function () {
      var scrollTop = $(window).scrollTop();
      if (scrollTop > scrollTrigger) {
        $('#back-to-top').addClass('show');
      } else {
        $('#back-to-top').removeClass('show');
      }
    };
    backToTop();
    $(window).on('scroll', function () {
      backToTop();
    });
    $('#back-to-top').on('click', function (e) {
      e.preventDefault();
      $('html,body').animate({
        scrollTop: 0
      }, 700);
    });
  }



}(jQuery));


   
