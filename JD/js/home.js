"use strict";

;$(function(){
	//顶部广告点击关闭
	(function(){
		$(".ad-close").on("click",function(){
			$(".top-ad").fadeOut();
		});
	})();

	//产品列表二级菜单显示隐藏
	(function() {
		var $menu = $(".menu"),
			$subMenu = $(".sub-menu"),
			$menuList = $(".menu-list");
		$menu.on("mouseenter",function(){
			$subMenu.addClass("show");
		});
		$menu.on("mouseleave",function(){
			$subMenu.removeClass("show");
		});
		$menuList.on("mouseenter","li",function() {
			var $item = $("#" + $(this).data("id"));
			$item.addClass("show").siblings().removeClass("show");
		});
	})();

	//banner轮播图
	(function(){
		var index = 0;//
		var btnList = $('.btn-list li');//获取圆点按钮组
		var slideShow = $('.slide-show li');//获取轮播图
		var length = slideShow.length;
		var autoPlay;
		//封装切换圆点按钮和轮播图
		function change(){
			btnList.eq(index).addClass('on').siblings().removeClass('on');//给索引值对应的圆点按钮添加css类'on',并给它兄弟元素清除css类'on'
			slideShow.eq(index).stop().fadeIn().siblings().stop().fadeOut();//给索引值对应的轮播图再淡入,并让它兄弟元素淡出
		}

		change();

		//给圆点按钮绑定鼠标hover切换按钮和轮播图事件
		btnList.on("mouseover",function(){
			index = $(this).index();//获取hover圆点按钮的索引值
			change();//切换到索引值对应的圆点按钮和轮播图
		});
		
		//给向左控制按钮绑定点击切换按钮和轮播图事件
		$('.banner .control-btn-l').on("click",function(e){
			e.preventDefault();//组织a标签的默认行为
			index --;//现索引值为原索引值-1
			if(index < 0){index = length - 1};//索引值小于0(最前的轮播图和圆点)让索引值回到最后
			change();//切换到索引值对应的圆点按钮和轮播图
		});

		//给向右控制按钮绑定点击切换按钮和轮播图事件
		$('.banner .control-btn-r').on("click",function(e){
			e.preventDefault();//组织a标签的默认行为
			index ++;//现索引值为原索引值+1
			if(index > length - 1){index = 0};//索引值大于7(最后的轮播图和圆点)让索引值回到0
			change();//切换到索引值对应的圆点按钮和轮播图
		});
		
		//封装轮播
		function play(){
			index ++;//现索引值为原索引值+1
			index %= length;//索引值超过7(最后的轮播图和圆点)让索引值回到0
			change();//切换到索引值对应的圆点按钮和轮播图
		}

		//设置定时器自动切换圆点按钮和轮播图
		autoPlay = setInterval(play,3000);//每隔3000毫秒执行一次

		//设置鼠标移入停止移出继续轮播
		slideShow.on("mouseover",function(){
			clearInterval(autoPlay);
		});
		slideShow.on("mouseout",function(){
			autoPlay = setInterval(play,3000);
		});
	})();
	
	//秒杀列表切换
	(function(){
		var skList = $('.seckill-list');//获取秒杀列表
		var left = parseInt(skList.css('left'));//获取秒杀列表的left值并转成数字
		
		//找到向左按钮指定点击事件
		$('.seckill .control-btn-l').click(function(e){
			e.preventDefault();
			left += 1000;//每次点击向右滚动一个宽度
			if(left > 0){left = -3000};//当列表翻完后返回最右端
			skList.stop().animate({//动画过度效果
				left : left + 'px'
			},300);
		});

		//获得向右按钮指定点击事件
		$('.seckill .control-btn-r').click(function(e){
			e.preventDefault();
			left -= 1000;//每次点击向左滚动一个宽度
			if(left < -3000){left = 0};//当列表翻完后返回最左端
			skList.stop().animate({//动画过度效果
				left : left + 'px'
			},300);
		});
		
	})();
});