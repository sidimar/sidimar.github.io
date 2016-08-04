    /*!
     * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
     * Code licensed under the Apache License v2.0.
     * For details, see http://www.apache.org/licenses/LICENSE-2.0.
     */

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    // $(function() {
    //     $('body').on('click', '.page-scroll a', function(event) {
    //         var $anchor = $(this);
    //         $('html, body').stop().animate({
    //             scrollTop: $($anchor.attr('href')).offset().top
    //         }, 1500, 'easeInOutExpo');
    //         event.preventDefault();
    //     });
    // });

    // Highlight the top nav as scrolling occurs
    // $('body').scrollspy({
    //     target: '.navbar-fixed-top'
    // })

    // Closes the Responsive Menu on Menu Item Click
    // $('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
    //     $('.navbar-toggle:visible').click();
    // });

    // Stop video when modal is closed
    // $('#portfolioModalcase').on('hide.bs.modal', function(e) {
    //         var $if = $(e.delegateTarget).find('iframe');
    //         var src = $if.attr("src");
    //         $if.attr("src", '/empty.html');
    //         $if.attr("src", src);
    //     })
    //     //Set document height for home
    // function pageHeight() {
    //     var wHeight = $(window).height();
    //     console.log(wHeight);
    //     $('header').css('height', wHeight);
    // }
    // pageHeight()
    // $(window).resize(function() {
    //     pageHeight();
    // });

    // Analytics
    (function(i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function() {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date();
        a = s.createElement(o),
            m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m)
    })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

    ga('create', 'UA-2528883-2', 'auto');
    ga('send', 'pageview');
