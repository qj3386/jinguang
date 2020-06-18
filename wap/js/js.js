$(document).ready(function() {  
    window.addEventListener('resize', Rem, false);
    Rem();

    });
function autoh(){
      var ath=$('.autoh').height();
      $('.autohh').css({'height':ath-20+'px'});
    }
function autoimg_list(){
        var wit=$('.imgautolist li img').width(); 
        var cplbinfo_h=$(".imgautolist li .cplbinfo").height();
        var nnh = cplbinfo_h +  wit;
        $('.imgautolist').find("li .imgbox").css({'height':wit+'px'});
        // $('.imgautolist').find("li").css({'height':nnh+20+'px'});      
        // $('.imgautolist').find("li a").css({'height':nnh-1+'px'});
}
function Rem() {
      var docEl = document.documentElement,
        oSize = docEl.clientWidth / 7.5;
      if (oSize > 100) {
        oSize = 100; //  限制rem值   640 / 6.4 =100
      }
      docEl.style.fontSize = oSize + 'px';
}

function SearchKey()
	{
		sc=document.KFO.Key.value;
		if(sc=="" || sc=="请输入您要了解的产品名称")
		{
			alert("请输入产品名称进行搜索");
			document.KFO.Key.focus();
			return false;
		}
		if(sc=="<" || sc==">" || sc=="%")
		{
			alert("请输入合法的搜索关键字!");
			document.KFO.Key.focus();
			return false;
		}
		else
		{
			return true;
		}
	}



$(document).ready(function() {
//初始化搜索
	var setx = $(".indexl"); //获取文本框对象   
	setx.click(function() {
		setx.val("");
		setx.css({
			color: "#4B4B4B"
		});
	});
	//搜索end
//三级下啦菜单
		$(".on_clickm").click(function() {
		$(this).next("ul").slideToggle("slow").siblings(".show_box:visible").slideUp("slow");
		$(this).toggleClass("activeTitle");
		$(this).siblings(".activeTitle").removeClass("activeTitle");
	});
	
	//三级下啦菜单 end	
})

$(document).ready(function() {
    var flbox = $('.flbox');
    nav = $('.nav');
    box = $('.mainbox');
    flbox.click(function() {
            box.animate({right:'40%'},'500');
			nav.animate({right:'0px'},'500');
			$('.nav').css("display", "block");
			$('.mainboxbg').css("display", "block");
			 return; 

    });
	$('.mainboxbg').click(function()
								   {
									 box.animate({right:'0'},'500');
									 nav.animate({right:'-40%'},'500');
									 $(this).hide();
              return; 
									   
									   }
								   
								   )
  $('.spanfl').click( function(){
    $('.flboxsub').show();
  });
   $('.flcolose').click( function(){
    $('.flboxsub').hide();
  })
	
});

$(document).ready(function() {
    var sx_box = $('.sx_box');
    nav1 = $('.sxfl_box');
    box1 = $('.mainbox');
    sx_box.click(function() {
            box1.animate({right:'50%'},'500');
			nav1.animate({right:'0px'},'500');
			$('.sxfl_box').css("display", "block");
			$('.mainboxbg02').css("display", "block");
			 return; 

    });
	$('.mainboxbg02').click(function()
								   {
									 box1.animate({right:'0'},'500');
									 nav1.animate({right:'-50%'},'500');
									 $(this).hide();
              return; 
									   
									   }
								   
								   )
	$('.spanfl').click( function(){
    $('.flboxsub').show();
  });
   $('.flcolose').click( function(){
    $('.flboxsub').hide();
  })
	
});



//返回顶部
$.fn.returnTop = $.fn.returntop = function(options){
	var _this = this;
	var setting = {
		hide	:	false, // 当srollTop为0,页面处于最顶端的时候，隐藏返回顶部按钮 false || true
		speed	:	600,	 //	返回顶部滚动所需要的时间
		callback	:	$.noop	//到达顶部后的回调函数
	};
	if(options){
		$.extend(setting,options);
	}
	this.click(function(){
		$('html, body').animate({scrollTop: 0},setting.speed,function(){
			setting.callback.call(this);
		});
	});
	if(setting.hide){
		$(document).scrollTop() > 0 ? _this.show() : _this.hide();
		$(window).bind("scroll", function() {
			$(document).scrollTop() > 0 ? _this.fadeIn() : _this.fadeOut();
		});
	}
};



/*常见问题*/
$(document).ready(function() {
	$(".question1 dl,.Recruitment3 dl").eq(0).find("dd").show();
    $(".question1 dl dt,.Recruitment3 dl dt").click(function(){
		$(this).addClass("cur").parent().siblings().find("dt").removeClass("cur");
		$(this).next().slideDown().parent().siblings().find("dd").slideUp();	
	})
});


/*悬浮什么时候显示*/
$(function(){
	$(window).on('scroll',function(){
		var $scroll=$(this).scrollTop();
		if($scroll>=180){
			$('.xuanfu_menu_box').show();
		}else{
			$('.xuanfu_menu_box').hide();
		}
	});

})