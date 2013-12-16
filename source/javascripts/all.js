//= require "jquery"
//= require_tree .

$(document).ready(function() {
    // menu 的切换效果
    var current_nav_menu = $('.nav .menu .current');
    $('.nav .menu li').mouseover(function(){
        $('.nav .menu li').removeClass('current');
        $(this).addClass("current");
    }).mouseout(function() {
        $(this).removeClass("current");
        current_nav_menu.addClass('current');
    });

    // 首页banner的切换
    function set_timer() {
        return setInterval(function() {
            $('.banners .next').click();
        }, 5000);
    }

    var timer = set_timer();

    $('.banners').mouseenter(function(){
        clearInterval(timer);
        $('.prev, .next').fadeIn();
    }).mouseleave(function() {
        timer = set_timer();
        $('.prev, .next').fadeOut();
    });

    $('.prev, .next').click(function() {
        var banners = $('.banners li');
        var now = banners.index($('.banners li:visible'));
        var next = $(this).hasClass('.next') ? (now + 1) : (now - 1);
        if (next >= banners.length) {
           next = 0;
        }

        if (next < 0) {
           next = banners.length - 1;
        }
        banners.hide().eq(next).fadeIn();
    });

    // 案例模块的图片切换
    $('.images').mouseenter(function() {
        $(this).find('.prev,.next').fadeIn();
    }).mouseleave(function() {
        $(this).find('.prev,.next').fadeOut();
    });

    $('.images .prev, .images .next').click(function() {
        var images = $('.images .item');
        var now = images.index($('.images .item:visible'));
        var next = $(this).hasClass('next') ? (now + 1) : (now - 1);
        if (next >= images.length) {
            next = 0;
        }
        if (next < 0) {
            next = images.length - 1;
        }

        images.hide().eq(next).show();
    });

    // RWD javascript

});