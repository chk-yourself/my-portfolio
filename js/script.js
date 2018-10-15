(function($) {
    "use strict"; // Start of use strict

$('.navbar').on('click', 'a[href^="#"]', function (event) {

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

$('.portfolio-modal').on('show.bs.modal', function(e) {
    $(".navbar").addClass("d-none");
  })
  $('.portfolio-modal').on('hidden.bs.modal', function(e) {
    $(".navbar").removeClass("d-none");
  })

  feather.replace();

})(jQuery);