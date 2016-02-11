// 100% height
$(document).ready(function(){function i(){windowHeight=$(window).innerHeight(),$(".fullsize").css("height",windowHeight)}i(),$(window).resize(function(){i()})});

// Mobile Menu
$(".nav-button").click(function(){$("#mobile-nav").toggleClass("active-mobile-nav")});
//$(document).ready(function(){$('.menu-item').addClass('.close .nav-button')});

$(".burger-link").click(function(){$('.burger-link').toggleClass("active")});