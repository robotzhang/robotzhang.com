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

    // RWD javascript


});