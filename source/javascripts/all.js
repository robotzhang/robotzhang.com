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
    var banners = $('.banners li');
    $('.banners').click(function(){
        var now = banners.index($('.banners li:visible'));
        var next = now + 1 >= banners.length ? 0 : now + 1;
        banners.hide().eq(next).show();
    });

    // RWD javascript


});