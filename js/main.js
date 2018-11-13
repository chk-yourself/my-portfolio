(function($) {
    "use strict"; // Start of use strict

    $('a[href*="#"]').on('click', function (e) {
       e.preventDefault();

        if ($('#navbarResponsive').hasClass('show')) {
            $('#navbarResponsive').removeClass('show');
        }
    
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 300, 'linear');
    });

    $(window).scroll(function () {
        const position = $(this).scrollTop();

        $('.section').each(function() {
            const target = $(this).offset().top;

            const id = $(this).attr('id');
            $(`.nav-link[href="#${id}"]`).removeClass('active');
            if (position >= target) {
                $('.nav-link').each(function() {
                    const hash = $(this).attr('href').slice(1);
                    if (hash === id) {
                        $(this).addClass('active');
                    } else {
                        $(this).removeClass('active');
                    }
                });
            }
        });

});
    

  feather.replace();
  

})(jQuery);