$(function() {
	/*首页底部固定导航*/
	$(".footer ul>li:last").css("background", "none");
	$(".footer ul>li").each(function() {
		$(this).find("div").click(function() {
			$(this).parent().toggleClass("on");
			$(this).parent().siblings("li").removeClass("on");
			$(".keche_2nav").removeClass("on");
			var kechenav = $(".keche_2nav")			
		});
	});
	$(".mainbox").click(function() {
		$(".footer ul>li").removeClass("on");
		$(".keche_2nav").removeClass("on");
	})

	$(".footer ul>li div").click(function(event) {
		event.stopPropagation();
	})

	/*底部二级导航*/
	$(".keche").click(function() {
		$(".keche_2nav").toggleClass("on");
		var kechenav = $(".keche_2nav")
		if(kechenav.hasClass("on")){
			$(".keche").css("color","#20b4f1")
			$(".keche span").css({"background":"url("+resPath+"images/icon_footer_right_1.png) center no-repeat","background-size":"16px"})
		}else{
			$(".keche").css("color","#5d6063");
			$(".keche span").css({"background":"url("+resPath+"images/icon_footer_right.png) center no-repeat","background-size":"16px"})
		}
	})
	
});