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
        oSize = docEl.clientWidth / 19.2;
      if (oSize > 100) {
        oSize = 100; //  ����remֵ   640 / 6.4 =100
      }
      docEl.style.fontSize = oSize + 'px';
}




/*jqģ�������˵���������*/
function serchboxmenu() { 
	$(".top_serch dt").click(function() {
		$(".top_serch dd").toggle();
	});
	$(".top_serch dd ul li").click(function() {
		var text = $(this).text();
		$("#btn").val(text);
		$(".top_serch dd").hide();
	});
	$(".top_serch dd .hiden span").click(function() {
		$(".box-ct").hide();
	});
} 
//ģ�������˵���������end

/*����*/
function setTab(name,cursel,n){
for(i=1;i<=n;i++){
var menu=document.getElementById(name+i);
var con=document.getElementById("con_"+name+"_"+i);
menu.className=i==cursel?"hover":"";
con.style.display=i==cursel?"block":"none";
}
}
/*���� end*/

/**��Ϣ����*/
function showSubMenu() {
	$(".mddaa").mouseover(function() {
		$("#newSubMenu").toggle();
	});

	$(".newSubMenu").mouseleave(function() {
		$("#newSubMenu").hide();
	})
	//��껬����ʾ ɸѡ��Ч��
	$("#newSubMenu").mouseover(function() {
		$(".newMenuBlock").mouseover(function() {
			$(this).find(".newSubMenuCon").show();
			$(this).find("h3").addClass("currentLink");
		})
	})

	$(".newMenuBlock").mouseleave(function() {
		$(this).find(".newSubMenuCon").hide();
		$(this).find("h3").removeClass("currentLink");
	})
	
} /**��Ϣ���� end*/
/*ͨ��ͼƬ�л�*///8������ʱ�ĳ�����JS��ذ���������������վ�ϵ����ף��򵥶��ˣ�2012-5-9 23:31�����������ƴ��˴���
function showPicsBox(){
var sWidth = $("#housebox ul").width(); //��ȡ����ͼ�Ŀ�ȣ���ʾ�����
	var len = $("#housebox ul").length; //��ȡ����ͼ����
	var index = 0;
	var picTimer;
	
	//���´���������ְ�ť�Ͱ�ť��İ�͸������������һҳ����һҳ������ť
	var btn = "<div class='btn'>";
	for(var i=0; i < len; i++) {
		btn += "<span></span>";
	}
	btn += "</div>";
	$("#housebox_click").append(btn);
	//ΪС��ť�����껬���¼�������ʾ��Ӧ������
	$("#housebox_click .btn span").mouseenter(function() {
		index = $("#housebox_click .btn span").index(this);
		showPics(index);
	}).eq(0).trigger("mouseenter");

	//��һҳ����һҳ��ť͸���ȴ��� ��վ�˹�������-����-
	/*$("#housebox .preNext").css("opacity",0.2).hover(function() {
		$(this).stop(true,false).animate({"opacity":"0.5"},300);
	},function() {
		$(this).stop(true,false).animate({"opacity":"0.2"},300);
	});*/

	//��һҳ��ť
	$("#housebox .pre").click(function() {
		index -= 1;
		if(index == -1) {index = len - 1;}
		showPics(index);
	});

	//��һҳ��ť
	$("#housebox .next").click(function() {
		index += 1;
		if(index == len) {index = 0;}
		showPics(index);
	});

	//����Ϊ���ҹ�����������liԪ�ض�����ͬһ�����󸡶�������������Ҫ�������ΧulԪ�صĿ��
	$("#foucsbox").css("width",sWidth * (len));
	
	//��껬�Ͻ���ͼʱֹͣ�Զ����ţ�����ʱ��ʼ�Զ�����
	$("#housebox").hover(function() {
		clearInterval(picTimer);
	},function() {
		picTimer = setInterval(function() {
			showPics(index);
			index++;
			if(index == len) {index = 0;}
		},4000); //��4000�����Զ����ŵļ������λ������
	}).trigger("mouseleave");
	//��꾭��liԪ����Ч
	$(".interest-list li").hover(function(){
										  $(this).css({"background":"#F6F6F6"},600);
										  $(this).addClass("quan2",600);
                                             }).mouseleave(function(){
																	$(this).css({"background":"#fff"},600);
																	$(this).removeClass("quan2")
																	})
	
	//����� 
	  $(".tools li img").css({"opacity":"0.88"}).hover(function(){
																   $(this).css({"opacity":"1"},300)
																   }).mouseleave(function(){
																	   $(this).css({"opacity":"0.88"},300);
																	   })
	//��ʾͼƬ���������ݽ��յ�indexֵ��ʾ��Ӧ������
	function showPics(index) { //��ͨ�л�
		var nowLeft = -index*sWidth; //����indexֵ����ulԪ�ص�leftֵ
		$("#housebox ul").stop(true,false).animate({"left":nowLeft},600); //ͨ��animate()����ulԪ�ع������������position
		$("#housebox_click .btn span").removeClass("current").eq(index).addClass("current"); //Ϊ��ǰ�İ�ť�л���ѡ�е�Ч��
		$("#housebox_click .btn span").stop(true,false).animate({"opacity":"0.6"},300).eq(index).stop(true,false).animate({"opacity":"1"},300); //Ϊ��ǰ�İ�ť�л���ѡ�е�Ч��
	}	};
//�б�����ʽ
function serxboxdownc(){
	$(".serxboxdown dt").click(function() {
		$(".serxboxdown dd").toggle();
	});
	$(".serxboxdown dd ul li").click(function() {
		var texto = $(this).text();
		$(".serchlox").val(texto);
		$(".serxboxdown dd").hide();
	});
	$(".serxboxdown dd .hiden span").click(function() {
		$(".box-ct").hide();
	}); /*jq�б�����ʽ end*/
	/*lieb*/
}
//��Ŀ����ɸѡ
function quyu_boxbb(){
$(".serbox_bb dl dd a").click(
							  function(){
								  $(this).addClass("Oncolor")
								  }
							  )

$(".quyu_boxbb a").click(
							  function(){
								  $(".xiangxiqu").show();
								  }
							  )
}
//�����б� չ�� �ر�
function showserbox(){
	$("#selectbar span[name=cateswitch]").each(function(){
    		$(this).toggle(function(){
    			$(this).removeClass('b1').addClass('b2').text('����').prev('.serchlv_list').children().slice(5).show();
    		},function(){
    			$(this).removeClass('b2').addClass('b1').text('չ��').prev('.serchlv_list').children().slice(5).hide();
    		});
    		});
	}
//�����б� չ�� �ر� end	


//��ʼ������ֵ
function serch_click(){
		var setx = $(".serchl"); //��ȡ�ı������   
	    setx.click(function() {
		setx.val("");
		setx.css({
        color: "#000"
		})
	}) 
}
/*��ʼ������ֵ end*/


$(function(){
//�����˵�
  $('li.mainlevel').mousemove(function(){
  $(this).find('.lbul').slideDown();
  $(this).addClass("hover")
  });
  $('li.mainlevel').mouseleave(function(){
  $(this).find('.lbul').slideUp()
  $(this).removeClass("hover")
  });
});
//�����˵�end


//��꾭��������ʽ
function yxbox(){
	$('.yxbox_m').mousemove(function(){
     $(this).children(".xqo").css({"display":"block"},600)
    })
	.mouseleave(function(){
       $(this).children(".xqo").css({"display":"none"},600)
    })
	}
//��������
function menu_sanji(){
	   $(".on_clickm").click(function() {
		$(this).next("div").slideToggle("slow").siblings(".show_box:visible").slideUp("slow");
		$(this).toggleClass("activeTitle");
		$(this).siblings(".activeTitle").removeClass("activeTitle");
	}); 
}
//�������� end



// ѡ�
var modTab = {
	init : function(set){
		var index = 0;
		var defaultSet = {
				event : 'click', // click,mouseover
				change : $.noop()
			};
		var set = $.extend(defaultSet,set);
		
		set.root.find('.mod-tab-title li').each(function(){
			if($(this).hasClass('cur')){
				index = $(this).index();
			}	
		});
		set.root.find('.mod-tab-main .tab-content').eq(index).show().siblings().hide();
		
		set.root.find('.mod-tab-title li').on(set.event,function(){
			index = $(this).index();
			$(this).addClass('cur').siblings().removeClass('cur');
			set.root.find('.mod-tab-main .tab-content').eq(index).show().siblings().hide();

		})
	}	
}


// �Զ��������б�
$(function(){
	
	$('.select').data({isShow:false}); 	
	
	$('.select').click(function(e){
	
		$(this).data('isShow') ? $(this).children('ul').hide() : $(this).children('ul').show();
		$(this).data({isShow:!$(this).data('isShow')});
		
		if(e.target.tagName == 'LI'){
			
			var text = $(e.target).html(); // �ı�����
			var value = $(e.target).attr('rel'); // �洢��ֵ
			
			$(this).data({value:value});
			$(this).children('.show').html(text);
		}
		
		e.stopPropagation();
	});
	
	$(document).click(function(){
		$('.select').each(function(index, element) {
			if($(this).data('isShow')){
				$(this).children('ul').hide();
				$(this).data({isShow : false})
			}
		});
	});	
	// ѡ�
	modTab.init({
		root:$('.lbTab')	
	});
	// ѡ�
	modTab.init({


		root:$('.edTab')	
	});
	// ѡ�
	modTab.init({
		root:$('.community .reg')	
	});
	
	$.accordion({
		root : $('.accordion')
	});
	//��ҳ�ַ���Ч��
	
});


$.extend({
	accordion : function(set){
		
		var root = set.root;
		
		root.children('.picture').eq(0).css({width:267}).next('.content').css({width:306});
		root.children('.picture').eq(0).children('.name').css({display:'none'});
		root.children('.picture').eq(0).children('.nameBox').css({display:'none'});
		

		var tmout=null;
		root.children('.picture').hover(function(){

			var obj=$(this);

			
			clearTimeout(tmout);
			tmout=setTimeout(
				function()
				{
					if(obj.children('.name').width() == 103){
						obj.children('.name').fadeOut().parent().siblings().children('.name').fadeIn();
						obj.children('.nameBox').fadeOut().parent().siblings().children('.nameBox').fadeIn();;
					}
					
					
					obj.animate({width:267}).siblings('.picture').animate({width:103},'easeInOutSine');
					obj.next('.content').animate({width:306},'easeInOutSine').siblings('.content').animate({width:0});
				},200
			);
			
		},function(){
			
		});
	}	
});




jQuery(function(){



$('.fdNavList').hover(
function(){
$(this).addClass('fdNavListBg');
$(this).animate({width:"650px"},1);
},
function(){
//var oLi = $(this); setTimeout(function(){oLi.removeClass('fdNavListBg')},380);
$(this).removeClass('fdNavListBg')
$(this).animate({width:"244px"},1);
}
)
	
$('.fdNavListA1').hover(
function(){
$(this).addClass('fdNavListBg');
$(this).animate({width:"330px"},1);
},
function(){
$(this).removeClass('fdNavListBg')
$(this).animate({width:"244px"},1);
}


)	
	
setInterval(
function(){$('.navBox_red .navJtBox').find('img').animate({bottom:'30px'})}
,1000);//1000Ϊ1����

setInterval(
function(){$('.navBox_red .navJtBox').find('img').animate({bottom:'14px'})}
,1000);//1000Ϊ1����	
	
	
$('.navBoxPr').hover(
function(){$(this).find('.fdNavpa').show()},function(){$(this).find('.fdNavpa').hide()}
)	
	
	
		 		
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