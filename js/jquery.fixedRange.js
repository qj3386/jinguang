;(function($){
	
	$.fn.fixedRange = $.fn.fixedrange = function(options){
		
		var def = {
			offset : 0, // 固定的位置距离窗口顶部的偏移量	
			iefixed : 'iefixed'
		}
		
		if(this.length >　1){
			this.each(function(){
				$(this).fixRange(options);	
			});
			return ;	
		}
		
		var set = $.extend(def,options),
			
			_this = this,
			
			begin = this.offset().top,
			
			ie6 = function(){
				
				if($.browser.msie && $.browser.version == '6.0'){
					return true;	
				}else{
					return false;	
				}
			},
			
			timer = null,
			
			fix = function(){
				var t = this.get(0).getBoundingClientRect().top - set.offset;
				
				if(t <= 0 && !this.data('fix')){
					if(ie6()){
						clearTimeout(timer);
						this.addClass(set.iefixed);
						
					}else{
						this.addClass(set.iefixed)
						this.css({position:'fixed', top : set.offset});
					}
					this.data({fix : true});	
				}
				if(this.offset().top <= begin && this.data('fix')){
					if(ie6()){
						timer = window.setTimeout(function(){
							_this.removeClass(set.iefixed);
						},10)
					}else{
						this.css({position:'relative'});
					}
					this.data({fix : false});
				}
			}
		
		fix.call(this);
		
		$(window).scroll(function(){
			fix.call(_this);	
		});
	}
})(jQuery);