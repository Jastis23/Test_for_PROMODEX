$(document).ready(function () {
    $(window).resize(function () {
        let windowWidth = $(window).width();
        if (windowWidth < 576) {
            $(".header_menu").addClass("hide");
        }
        if (windowWidth > 576) {
            $(".header_menu").removeClass("hide");
        }
    });
    jQuery(document).ready(function ($) {
        $(".slider_main").slick({
            slidesToShow: 1,
            arrows: false,
            asNavFor: ".slider_nav",
            vertical: true,
            autoplay: false,
            verticalSwiping: true,
            centerMode: false,
        });
        if ($(window).width() > 1000) {
            $(".slider_nav").slick({
                slidesToShow: 3,
                arrows: false,
                asNavFor: ".slider_main",
                vertical: true,
                focusOnSelect: true,
                verticalSwiping: false,
                autoplay: false,
                centerMode: false,
            });
        }
    });
    $(".package.one").click(function () {
        $(".package.one").addClass("active");
        $(".package.three").removeClass("active");
        $(".package.seven").removeClass("active");
        $(".package.twelve").removeClass("active");
    });
    $(".package.three").click(function () {
        $(".package.three").addClass("active");
        $(".package.seven").removeClass("active");
        $(".package.twelve").removeClass("active");
        $(".package.one").removeClass("active");
    });
    $(".package.seven").click(function () {
        $(".package.seven").addClass("active");
        $(".package.three").removeClass("active");
        $(".package.twelve").removeClass("active");
        $(".package.one").removeClass("active");
    });
    $(".package.twelve").click(function () {
        $(".package.twelve").addClass("active");
        $(".package.three").removeClass("active");
        $(".package.seven").removeClass("active");
        $(".package.one").removeClass("active");
    });
    $(".ham_btn").click(function () {
        $(".header_menu").removeClass("hide");
        $("body").addClass("over");
    });
    $(".ham_close").click(function () {
        $(".header_menu").addClass("hide");
        $("body").removeClass("over");
    });
    $(".more_offers_slider").slick({
        dots: false,
        infinite: false,
        loop: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        appendArrows: ".slider_more_button",
        prevArrow: '<button type="button" class="more_prev_arrow"></button>',
        nextArrow: '<button type="button" class="more_next_arrow"></button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    });
    $(".recently_offers_slider").slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        appendArrows: ".slider_recently_button",
        prevArrow: '<button type="button" class="recently_prev_arrow"></button>',
        nextArrow: '<button type="button" class="recently_next_arrow"></button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    });
});




