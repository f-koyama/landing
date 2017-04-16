$(function(){
	$("#top_btn").on("click",function(){
		$("html,body").stop().animate({scrollTop:0},500);
		return false;
	});
});

$(function() {
  // 要素の位置を取得して変数に格納
  var offset = $('.consultation').offset();
  // コンソールに表示
  console.log(offset);
});

$(function(){
  $('.globalNav a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
		var position2 = position - 60;
		console.log(position);
		console.log(position2);

    $("html, body").animate({scrollTop:position2}, speed, "swing");
		if($(this).hasClass("current")){
		} else {
			$(this).addClass("current");
			$("a").not(this).removeClass("current");
		}
    return false;


  });
});
