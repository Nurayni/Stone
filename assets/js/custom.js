(function ($) {
    "use strict";
    $(".close-btn").on("click", function () {
        $(".search-overlay").fadeOut();
        $(".search-btn").show();
        $(".close-btn").removeClass("active");
    });
    $(".search-btn").on("click", function () {
        $(this).hide();
        $(".search-overlay").fadeIn();
        $(".close-btn").addClass("active");
    });
    $(window).on("scroll", function() {
        if ($(document).scrollTop() > 20) {
            $(".custom-nav").addClass("fixed-top");
        }
        else {
            $(".custom-nav").removeClass("fixed-top");
        }
    });
      // active nav
      $('.navbar-nav .nav-item').on('click', function() {
          $('.navbar-nav .nav-item.active').removeClass('active');
          $(this).addClass('active');
      });
       // back to top
    $(".back2").click(function() {
        $('html, body').animate({
        scrollTop: 0,
        }, 1000);
    });
    $(window).on('scroll', function(){
        var scrolling = $(this).scrollTop();
        if(scrolling > 500){
          $('.back2').addClass('aaa');
          $('.aaa').fadeIn(500);
        }
        else if(scrolling > 200){
          $('.aaa').fadeOut(500);
        }
        });
        $('.owl-carousel').owlCarousel({
            // autoplay: true,
            // autoplayTimeout: 2800,
            loop:true,
            margin:10,
            nav:true,
            nav: false,
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
        })
           /* ---------------------------------------------------------
            32. Price Slider
        --------------------------------------------------------- */
        $( ".slider-range" ).slider({
            range: true,
            min: 50,
            max: 5000,
            values: [ 50, 1500 ],
            slide: function( event, ui ) {
                $( ".amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
            }
        });
        $( ".amount" ).val( "$" + $( ".slider-range" ).slider( "values", 0 ) +
        " - $" + $( ".slider-range" ).slider( "values", 1 ) ); 
        $(".input-counter").each(function () {
            var spinner = jQuery(this),
                input = spinner.find('input[type="text"]'),
                btnUp = spinner.find(".plus-btn"),
                btnDown = spinner.find(".minus-btn"),
                min = input.attr("min"),
                max = input.attr("max");
            btnUp.on("click", function () {
                var oldValue = parseFloat(input.val());
                if (oldValue >= max) {
                    var newVal = oldValue;
                } else {
                    var newVal = oldValue + 1;
                }
                spinner.find("input").val(newVal);
                spinner.find("input").trigger("change");
            });
            btnDown.on("click", function () {
                var oldValue = parseFloat(input.val());
                if (oldValue <= min) {
                    var newVal = oldValue;
                } else {
                    var newVal = oldValue - 1;
                }
                spinner.find("input").val(newVal);
                spinner.find("input").trigger("change");
            });
        });

})(jQuery);
