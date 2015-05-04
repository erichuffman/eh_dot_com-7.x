/**
 * @file
 * js base functions
 *
 * Includes js behaviors for menus and other behaviors 
 *
 */

(function($) {
Drupal.behaviors.eh_dot_com = {
  attach: function (context, settings) {
      
      /**
       * put a fixed height on footer in desktop viewports
       *
       */
      // wait until all sub-elements are fully loaded
      $(window).load(function() {
        // get height of viewport
        var vph = $(window).height();
        // debugging
        // console.log(vph);
        // check that viewport is larger than 1024px
        if ($(window).width() > '1024') {
          // Set fixed height on footer
          $(".structure__footer").height(vph);
        }
      });
      
      /**
       * menu behavior based on scroll action
       *
       */
      var about = $('#about').offset().top - 100;
      var work = $('#work').offset().top - 100;
      var contact = $('#contact').offset().top - 100;
      $(window).scroll(function () {
        // get scroll position
        var y = $(window).scrollTop();    
        // deactivate all menu items if above 'about' section
        if (y < about) {
          $(".primary-menu-wrapper .menu li").each(function() {
            $(this).removeClass('active');
          });
        }
        // activate about link item if within section
        if (y >= about) {
          $(".primary-menu-wrapper .menu li").each(function() {
            $(this).removeClass('active');
          });
          $('#about-link').addClass('active');
        } 
        // activate work link item if within section
        if (y >= work) {
          $(".primary-menu-wrapper .menu li").each(function() {
            $(this).removeClass('active');
          });
          $('#work-link').addClass('active');
        } 
        // activate contact link item if within section
        if (y >= contact) {
          $(".primary-menu-wrapper .menu li").each(function() {
            $(this).removeClass('active');
          });
          $('#contact-link').addClass('active');
        }
        // debugging
        // console.log(y);
      });
      
      // mobile menu close action on menu item click
      $(".primary-menu-wrapper .menu li a").click(function(event) {
        if ($(this).parent('li').parent('ul').hasClass('opened')) {
          $(this).parent('li').parent('ul').removeClass('opened');
        }
      }); 
      
      // menu toggle for mobile menu
      $(".block-title-wrapper h4").click(function(event) {
        $(".primary-menu-wrapper .menu").toggleClass('opened');
      });
      
      // "Smooth Scroll" function
      // adds smooth-scroll action to an anchor links with smooth-scroll class
      $("a.smooth-scroll").click(function(event){		
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top - 60}, 500);
      });

    }
  };
})(jQuery);