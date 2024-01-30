//Set height for each section
var wWidth = $(window).width();
if (wWidth > 991 ) {
    function pageHeight() {        
        var wHeight = $(window).height();
        $('.accordion li, .accordion .container').css('min-height', wHeight);
    }
    pageHeight();

    $(".brand-home-span").contents().unwrap();
}

$(window).resize(function() {
    var wWidth = $(window).width();
    var wHeight = $(window).height();
    if (wWidth < 991 ) {
        $('.accordion li, .accordion .container').css('min-height', '');
    }
    else { (wWidth > 991 )
        $('.accordion li, .accordion .container').css('min-height', wHeight);
    }
});


// $('.btn-open-link').hover(function () {
//     $('.menu-company').slideDown(300);
//   });
//   $('header').mouseleave(
//     function () {
//       $('.menu-company').slideUp(300);
//     }
//   )

if ("ontouchstart" in document.documentElement){
    $('.btn-open-link').click(function () {
      $('.menu-company').slideToggle(300);
    });
  }