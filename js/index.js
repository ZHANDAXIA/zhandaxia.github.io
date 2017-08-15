"use strict";
$(function() {
//轮播图控制按钮显示隐藏
	(function() {
		$("#myCarousel").on("mouseover",function() {
			$(".carousel-control").stop().fadeIn();
		});
		$("#myCarousel").on("mouseout",function() {
			$(".carousel-control").stop().fadeOut();
		});
	})();

// 滚动回顶部按钮
	(function() {
		var backButton = $(".back-top");
      //根据滚动距离是否大于窗口高度来显示和隐藏按钮
      $(window).on("scroll",function() {
        if($(window).scrollTop() > $(window).height()){
          backButton.fadeIn();
        }else{
          backButton.fadeOut();
        }
      });
      //点击按钮返回顶部
      backButton.on("click",function() {
        $("html,body").animate({scrollTop:0},500);
      });	
	})();

//导航与页面内容位置互联 
	(function() {
		var $html = $("html,body"),
			$navbar = $(".navbar-right");
		//事件委托点击事件
		$navbar.on("click","li",function(e) {
			//组织a标签跳转防闪屏
			e.preventDefault();
			//改变点击的背景色和字体颜色
			$(this).addClass("active").siblings().removeClass("active");
			//滚动到对应元素的顶部
			var $top = $("#" + $(this).data("id")).offset().top;
			$html.animate({"scrollTop" : $top},300);
		})
		//根据屏幕滚动位置给导航添加active样式
		$(window).on("scroll",function() {
			var	$scrollTop = $(window).scrollTop() + $(window).height() / 2,
				$noteTop = $("#note").offset().top,
				$componentTop = $("#component").offset().top,
				$casesTop = $("#cases").offset().top,
				$lifeTop = $("#life").offset().top,
				$noteLink = $("#note-link"),
				$componentLink = $("#component-link"),
				$casesLink = $("#cases-link"),
				$lifeLink = $("#life-link");

			if ($scrollTop >= $noteTop && $scrollTop <= $componentTop) {
				$noteLink.addClass("active").siblings().removeClass("active");
			}else if ($scrollTop >= $componentTop && $scrollTop <= $casesTop) {
				$componentLink.addClass("active").siblings().removeClass("active");
			}else if ($scrollTop >= $casesTop && $scrollTop <= $lifeTop) {
				$casesLink.addClass("active").siblings().removeClass("active");
			}else if ($scrollTop >= $lifeTop) {
				$lifeLink.addClass("active").siblings().removeClass("active");
			}else {
				$noteLink.removeClass("active");
			}

		});
	})();
	
});