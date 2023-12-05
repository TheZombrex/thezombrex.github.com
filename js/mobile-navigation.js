$(document).ready(function() {
    const themebg = $('#theme_bg');
    $('body').on({'mousemove' : function( e ){
        let clientX = e.originalEvent.clientX
        let clientY = e.originalEvent.clientY
        $('#cursor').css({
            'left' : (clientX - 20 ) + 'px',
            'top' : (clientY - 20 ) + 'px'
        })
    }})

    $('.a').on({
        'mouseover': function(){
            $('#cursor').addClass('mini')
        },
        'mouseout': function(){
            $('#cursor').removeClass('mini')
        },
    })
    $('.input').on({
        'mouseover': function(){
            $('#cursor').addClass('mini')
        },
        'mouseout': function(){
            $('#cursor').removeClass('mini')
        },
    })
    $("#nav__col-2__phone_menu_icon").on("click", function () {
        event.preventDefault();
        $(".nav__col-2__menu").slideToggle()
      });
      $(window).resize(function () {
        if (window.innerWidth >= 800) {
          $(".nav__col-2__menu").show()
        }
        else {
          $(".nav__col-2__menu").hide()
        }
      });
      $("#nav__col-2__theme_menu_icon").on("click", function() {
        event.preventDefault();
        toggleClasses()
      });

});