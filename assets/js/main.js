function isMobile() {
    var userAgent = navigator.userAgent.toLowerCase(); if (userAgent.search(/(android|avantgo|blackberry|bolt|boost|cricket|docomo|fone|hiptop|mini|mobi|palm|phone|pie|tablet|up\.browser|up\.link|webos|wos)/i) != -1)
        return true;
}

function menuToggle() {
    $('.menu-toggle').click(function (e) {
        e.preventDefault();
        if ($(this).hasClass('fa-bars')) {
            $('.menu').css('display', 'flex').addClass('open');
            $(this).removeClass('fa-bars').addClass('fa-times');
        } else {
            $('.menu').css('display', 'none').removeClass('open');
            $(this).removeClass('fa-times').addClass('fa-bars');
        }
    });
}

function handleColorMenu() {
    setTimeout(function () {
        var pageActiveDownload = $('.cd-section.visible').prop('id') == 'page-download';
        if (pageActiveDownload) {
            $('.header').removeClass('gradient-dark-purple');
            $('.header').addClass('header-dark');
        }
    });
}

function showMenu() {
    handleColorMenu();
    var startTop;
    startTop = ($(window).width() < 1280) ? 500 : 750;
    startTop = isMobile() ? 50 : startTop;

    var handle = function () {
        var scrollTop = $(document).scrollTop();
        if (scrollTop >= startTop) {
            $('.header').addClass('header-dark gradient-dark-purple');
        } else {
            $('.header').removeClass('header-dark gradient-dark-purple');
        }
    };
    $(document).scroll(function () {
        handleColorMenu();

        return handle();
    });
    return handle();
}

function menuAction() {
    var mobile = isMobile() ? 100 : 0;
    $('[data-navigate]').each(function (index, element) {
        var name = $(element).data('navigate');
        $(element).click(function () {
            $('html, body').animate({
                scrollTop: $('#page-' + name).offset().top - mobile
            }, 800);

            if ($('.menu').hasClass('open')) {
                $('.menu').css('display', 'none').removeClass('open');
                $('.menu-toggle').removeClass('fa-times').addClass('fa-bars');
            }
        });
    });
}

$(document).ready(function ($) {
    menuToggle();
    showMenu();
    menuAction();
});