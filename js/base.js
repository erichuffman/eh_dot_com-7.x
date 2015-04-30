/**
 * @file
 * js base functions
 *
 * Includes js behaviors for various toggles and switches
 *
 */

(function($) {
Drupal.behaviors.eh_dot_com = {
  attach: function (context, settings) {
      
      // wait until all sub-elements are fully loaded
      $(window).load(function() {
        // get height of viewport
        var vph = $(window).height();
        console.log(vph);
        // check that viewport is larger than 1024px
        if ($(window).width() > '1024') {
          // Set fixed height on footer
          $(".structure__footer").height(vph);
        }
      });
      
      var about = $('#about').offset().top - 100;
      var work = $('#work').offset().top - 100;
      var contact = $('#contact').offset().top - 100;
      $(window).scroll(function () {
        // what is the y position of the scroll?
        var y = $(window).scrollTop();    
        // whether that's below the start of article?
        if (y < about) {
          $(".primary-menu-wrapper .menu li").each(function() {
            $(this).removeClass('active');
          });
        }
        if (y >= about) {
          $(".primary-menu-wrapper .menu li").each(function() {
            $(this).removeClass('active');
          });
          $('#about-link').addClass('active');
        } 
        if (y >= work) {
          $(".primary-menu-wrapper .menu li").each(function() {
            $(this).removeClass('active');
          });
          $('#work-link').addClass('active');
        } 
        if (y >= contact) {
          $(".primary-menu-wrapper .menu li").each(function() {
            $(this).removeClass('active');
          });
          $('#contact-link').addClass('active');
        }
        console.log(y);
      });
      
      
      $(".primary-menu-wrapper .menu li a").click(function(event) {
        if ($(this).parent('li').parent('ul').hasClass('opened')) {
          $(this).parent('li').parent('ul').removeClass('opened');
        }
      }); 
      
      // using menu title for mobile view toggle
      $(".block-title-wrapper h4").click(function(event) {
        $(".primary-menu-wrapper .menu").toggleClass('opened');
      });
      
      // "Smooth Scroll" function
      // add smooth-scroll class to an anchor link and watch the magic happen
      $(".smooth-scroll").click(function(event){		
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top - 60}, 500);
      });

    }
  };
})(jQuery);