function scrollToElement(a,b){$("html, body").animate({scrollTop:$(a).offset().top-b},1200,"easeInOutCubic")}function validateEmail(a){var b=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return b.test(a)}$(function(){$(document).on("scroll",function(){$(window).scrollTop()<170?$("header").addClass("on-top"):$("header").removeClass("on-top")}),$(".nav-link").on("click",function(a){a.preventDefault(),scrollToElement($(this).attr("data-anchor"),$(this).attr("data-offset"))}),$(".newsletter-form").on("submit",function(){return""!==$("#email").val()&&validateEmail($("#email").val())?void 0:!1})});