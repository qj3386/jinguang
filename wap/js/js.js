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
        oSize = 100; //  ����remֵ   640 / 6.4 =100
      }
      docEl.style.fontSize = oSize + 'px';
}

function SearchKey()
	{
		sc=document.KFO.Key.value;
		if(sc=="" || sc=="��������Ҫ�˽�Ĳ�Ʒ����")
		{
			alert("�������Ʒ���ƽ�������");
			document.KFO.Key.focus();
			return false;
		}
		if(sc=="<" || sc==">" || sc=="%")
		{
			alert("������Ϸ��������ؼ���!");
			document.KFO.Key.focus();
			return false;
		}
		else
		{
			return true;
		}
	}



$(document).ready(function() {
//��ʼ������
	var setx = $(".indexl"); //��ȡ�ı������   
	setx.click(function() {
		setx.val("");
		setx.css({
			color: "#4B4B4B"
		});
	});
	//����end
//���������˵�
		$(".on_clickm").click(function() {
		$(this).next("ul").slideToggle("slow").siblings(".show_box:visible").slideUp("slow");
		$(this).toggleClass("activeTitle");
		$(this).siblings(".activeTitle").removeClass("activeTitle");
	});
	
	//���������˵� end	
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



//���ض���
$.fn.returnTop = $.fn.returntop = function(options){
	var _this = this;
	var setting = {
		hide	:	false, // ��srollTopΪ0,ҳ�洦����˵�ʱ�����ط��ض�����ť false || true
		speed	:	600,	 //	���ض�����������Ҫ��ʱ��
		callback	:	$.noop	//���ﶥ����Ļص�����
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



/*��������*/
$(document).ready(function() {
	$(".question1 dl,.Recruitment3 dl").eq(0).find("dd").show();
    $(".question1 dl dt,.Recruitment3 dl dt").click(function(){
		$(this).addClass("cur").parent().siblings().find("dt").removeClass("cur");
		$(this).next().slideDown().parent().siblings().find("dd").slideUp();	
	})
});


/*����ʲôʱ����ʾ*/
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