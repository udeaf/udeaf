/**
 * Create by: Tiny
 * Version: 1.2
 * Url: http://www.tinyliu.com/
 */

;(function($, window, undefined) {
    var $allDropdowns = $();
   
    $.fn.dropdownHover = function(options) {
        $allDropdowns = $allDropdowns.add(this.parent());

        return this.each(function() {
            var $this = $(this).parent(),
                defaults = {
                    delay: 0,
                    instantlyCloseOthers: true
                },
                data = {
                    delay: $(this).data('delay'),
                    instantlyCloseOthers: $(this).data('close-others')
                },
                options = $.extend(true, {}, defaults, options, data),
                timeout;

            $this.hover(function() {
                if(options.instantlyCloseOthers === true)
                    $allDropdowns.removeClass('open');

                window.clearTimeout(timeout);
                $(this).addClass('open');
            }, function() {
                timeout = window.setTimeout(function() {
                    $this.removeClass('open');
                }, options.delay);
            });
        });
    };
})(jQuery, this);

$(function(){
	$('.magnific').magnificPopup({
		type: 'image',
		gallery:{
			enabled:true
		}
		// other options
	});

	//警告框链接加样式
	$(".alert").children("p").children("a").addClass("alert-link");
	$(".alert").children("a").addClass("alert-link");

	//侧边栏分类目录
	$("#widget-cats li").addClass("list-group-item");
	 //文章页图片特效
    //$('.fancybox').fancybox();
	$("select").addClass("form-control");
	//$("#commentform").addClass('form-horizontal');
	$("#commentform #submit").addClass('btn btn-primary btn-block');
	//$("#commentform .form-submit").addClass("col-xs-12");
	
	var winEl = $(window);
		
	/*totop*/
	$('#sidebar .up').click(function(){
		$('html,body').animate({scrollTop:0},300);
	});
	
	/*滚动监听*/
	winEl.scroll(function(){
		/*nav*/
		var navEl = $('#nav');
		
		if(!navEl.data('noscroll')){
			if(winEl.scrollTop() > 20){
				navEl.addClass('scroll animated fadeInDown');
			}else{
				navEl.removeClass('scroll animated fadeInDown');
			}
		}
	}).scroll();
	
	/*tip*/
	$('#sidebar li').hover(function(){
		$('.tip',this).show().stop().animate({'right':'80px','opacity':1},300);
	},function(){
		$('.tip',this).stop().animate({'right':'58px','opacity':0},300,function(){
			$(this).hide();
		});
	});
	
	/*Hover dropdown*/
	winEl.resize(function(){
		if(winEl.width()>750){
			$('.dropdown-toggle').dropdownHover();
		}else{
			$('.dropdown-toggle').parent().unbind().end().dropdown();
		}
	}).resize();
});


//重新得到验证码
function changeValidate(self){
	self.src = "validateImg.php?time=" + new Date();
}

//写邮箱的免费试用
function emailApply(self){
	location.href = "/applydemo?email=" + $(self).prev().val();
}

//解析URL
function parseURL(url){
    var a =  document.createElement('a');
    a.href = url;
    return {
        source: url,
        protocol: a.protocol.replace(':',''),
        host: a.hostname,
        port: a.port,
        query: a.search,
        params: (function(){
            var ret = {},
                seg = a.search.replace(/^\?/,'').split('&'),
                len = seg.length, i = 0, s;
            for (;i<len;i++) {
                if (!seg[i]) { continue; }
                s = seg[i].split('=');
                ret[s[0]] = s[1];
            }
            return ret;
        })(),
        file: (a.pathname.match(/\/([^\/?#]+)$/i) || [,''])[1],
        hash: a.hash.replace('#',''),
        path: a.pathname.replace(/^([^\/])/,'/$1'),
        relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [,''])[1],
        segments: a.pathname.replace(/^\//,'').split('/')
    };
}
