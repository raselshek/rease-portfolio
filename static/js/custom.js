/*========================================================================
EXCLUSIVE ON themeforest.net
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Template Name   : reese
Author          : themepaa
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Copyright (c) 2019 - themepaa
========================================================================*/
  

(function($){
    "use strict"
    var RES = {};

    /*--------------------
      * Pre Load
    ----------------------*/
    RES.WebLoad = function(){
      document.getElementById("loading").style.display = "none"; 
    }

    RES.MenuTogglerClose = function(){
      $(".toggler-menu").on('click', function () {
          $(this).addClass("open");
          $(".top-side-nav").addClass("menu-open");
      });
      $(".toggler-menu-close, .menu-overlay, .top-side-nav li a").on('click', function () {
          $(".toggler-menu").removeClass("open");
          $(".top-side-nav").removeClass("menu-open");
      });
    }
    /*--------------------
        * Menu Close
    ----------------------*/
    RES.MenuClose = function(){
      $('.navbar-nav .nav-link').on('click', function() {
       var toggle = $('.navbar-toggler').is(':visible');
       if (toggle) {
         $('.navbar-collapse').collapse('hide');
       }
      });
    }

    /*--------------------
        * Smooth Scroll
    ----------------------*/
    RES.HeaderScroll = function(){
        $('.top-side-nav a[href*="#"]:not([href="#"]), .scroll-top a[href*="#"]:not([href="#"])').on('click', function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
              var target = $(this.hash);
                  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                  if (target.length) {
                    $('html,body').animate({
                      scrollTop: target.offset().top - 65,
                      }, 1000);
                      return false;
                  }
            }
        });
    }

    /*--------------------
        * Header Fixed
    ----------------------*/
    RES.HeaderFixed = function(){
      if ($(window).scrollTop() >= 200) {
           $('.header-nav').addClass('fixed-header');
        }
        else {
           $('.header-nav').removeClass('fixed-header');
        }
    }    

    /*--------------------
        * Progress Bar 
    ----------------------*/
    RES.ProgressBar = function(){
        $(".progress .progress-bar").each(function () {
          var bottom_object = $(this).offset().top + $(this).outerHeight();
          var bottom_window = $(window).scrollTop() + $(window).height();
          var progressWidth = $(this).attr('aria-valuenow') + '%';
          if(bottom_window > bottom_object) {
            $(this).css({
              width : progressWidth
            });
          }
        });
    }
   

    /*--------------------
    * owl Slider
    ----------------------*/

    RES.ClientSlider = function(){
      var testimonials_slider = $('#client-slider-single');
        testimonials_slider.owlCarousel({
            loop: true,
            margin: 0,
            nav:false,
            items:1
        });
    }
    /*--------------------
    * owl Slider
    ----------------------*/
    RES.PortfolioSlider = function(){
      var Portfolio_Slider = $('#portfolio-slider-single');
        Portfolio_Slider.owlCarousel({
            loop: true,
            margin: 30,
            nav:false,
            responsive: {
              0: {
                items: 1
              },
              768: {
                items: 2
              },
              991: {
                items: 3
              },
              1140: {
                items: 3
              }
            }
        });
    }
   


    RES.PopupVideo = function(){
      $('.popup-video').magnificPopup({
              disableOn: 700,
              type: 'iframe',
              mainClass: 'mfp-fade',
              removalDelay: 160,
              preloader: false,
              fixedContentPos: false
        });
    }

    RES.PopupContent = function(){
      $('.popup-content').magnificPopup({
          type: 'inline',
          preloader: false,
          focus: '#username',
          modal: true
      });
      $('.popup-content-close').on("click", function(){
        $.magnificPopup.close();
      });
    }    

    RES.mTypeIt = function() {
        new TypeIt('#type-it', {
            speed: 200,
            loop:true,
            strings: [
              'Designer',
              'Developer'
            ],
            breakLines: false
        }); 
    }

    
    // Window on Load
    $(window).on("load", function(){
      RES.WebLoad();
    });

    $(document).on("ready", function(){
        RES.ClientSlider(),
        RES.MenuClose(),
        RES.MenuTogglerClose(),
        RES.PortfolioSlider(),
        RES.ProgressBar(),
        RES.HeaderScroll(),
        RES.PopupVideo(),
        RES.PopupContent(),
        RES.mTypeIt();
    });

    $(window).on("scroll", function(){
        RES.ProgressBar(),
        RES.HeaderFixed();
    });

})(jQuery);


