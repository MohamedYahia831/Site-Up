/*global $, jQuery, alert*/
$(function () {
    'use strict';
    $(window).scroll(function () {
        var navbar = $('.navbar');
        if ($(window).scrollTop () >= navbar.height()) {
            navbar.addClass('scrolled');
        } else {
            navbar.removeClass('scrolled');
        } 
    });
});
$(document).ready(function (){

    "use strict";

    // Nice Scroll

    $("html").niceScroll();

    $('.carousel').carousel({
        interval:5000
    });
    // Show Cokr Option Div When Click Gear
    $('.gear-check').click(function (){
        $('.color-option').fadeToggle();
    });
    // Change Theme Color On Click
    var colorLi = $(".color-option ul li");

    colorLi
        .eq(0).css("backgroundColor", "#e41b17").end()
        .eq(1).css("backgroundColor", "#7736e7").end()
        .eq(2).css("backgroundColor", "#1dd4ec").end()
        .eq(3).css("backgroundColor", "#4caf50");

    colorLi.click(function (){

        $("link[href*='theme']").attr("href",$(this).attr("data-value"));

    });
});

// Loading Screen

$(window).load(function () {

    "use strict";

// Loading Element

    $(".loading-overlay .sk-chase").fadeOut(1000, function () {

        $(this).parent().fadeOut(1000, function () {
            
            // Show The Scroll
            
            $("body").css("overflow", "auto");

            $(this).remove();
        });
    });
});

var scrollButton = $("#scroll-top");

    $(window).scroll(function () {

        if ($(this).scrollTop() >= 700) {

            scrollButton.show();
        } else {

            scrollButton.hide();
        }
});
    // Click On Button To Scroll Top

    scrollButton.click(function () {

        $("html,body").animate({scrollTop:0}, 600);
    });