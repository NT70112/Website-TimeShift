$(function () {
    $(window).on('scroll', function() {
        const footerTop = $(".footer").offset().top;
        const viewportBottom = $(window).scrollTop() + $(window).height();
        const distanceToFooter = footerTop - viewportBottom;

        if (distanceToFooter < 100) {
            $(".bottom-display").addClass('pre-invisible');
        } else {
            $(".bottom-display").removeClass('pre-invisible');
        } 

        if (distanceToFooter < 0) {
            $(".bottom-display").addClass('invisible');
        } else {
            $(".bottom-display").removeClass('invisible');
        } 
    });
    $('.bottom-display__arrow').on('click', function (e) {
        e.preventDefault();
        const id = $(this).attr('href');
        const top = $(id).offset().top;

        $('html, body').animate({ scrollTop: top }, 800);
    });
    $(".bottom-display__btn").on('click', function() {
        $('.bottom-display__element').toggleClass('bottom-display__element--active')
        $('.module-window').toggleClass('invisible')
        setTimeout(() => $('.module-window').toggleClass('slideUp'), 80)
    })
});