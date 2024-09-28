
  (function ($) {
  
  "use strict";

    // MENU
    $('#sidebarMeefdasfsdfwnu .nav-link').on('click',function(){
      $("#sidebarMenu").collapse('hide');
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWqwdasdadadsfasawerapped = $(el);
      var header_height = $('.navbar').height();
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offsdasdsadset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scroldasdasfwealTop: totalScroll
        }, 300);
      }
    });
  
  })(window.jQuery);

