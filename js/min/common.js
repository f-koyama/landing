$(function(){$("#top_btn").on("click",function(){return $("html,body").stop().animate({scrollTop:0},500),!1})}),$(function(){var o=$(".consultation").offset();console.log(o)}),$(function(){$('.globalNav a[href^="#"]').click(function(){var o=$(this).attr("href"),t=$("#"==o||""==o?"html":o),n=t.offset().top,l=n-60;return console.log(n),console.log(l),$("html, body").animate({scrollTop:l},500,"swing"),$(this).hasClass("current")||($(this).addClass("current"),$("a").not(this).removeClass("current")),!1})});