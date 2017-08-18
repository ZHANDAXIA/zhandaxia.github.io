"use strict";
$(function(){
  //banner轮播图
  (function(){
    var index = 0,
        //获取圆点按钮组
        btnList = $('.btn-list li'),
        //获取轮播图片
        slideShow = $('.slide-show li'),
        length = slideShow.length,
        autoPlay;
    //封装切换圆点按钮和轮播图
    function change(){
      //给索引值对应的圆点按钮添加css类'on',并给它兄弟元素清除css类'on'
      btnList.eq(index).addClass('on').siblings().removeClass('on');
      //给索引值对应的轮播图再淡入,并让它兄弟元素淡出
      slideShow.eq(index).stop().fadeIn().siblings().stop().fadeOut();
    }

    change();

    //给圆点按钮绑定鼠标hover切换按钮和轮播图事件
    btnList.on("mouseover",function(){
      index = $(this).index();//获取hover圆点按钮的索引值
      change();//切换到索引值对应的圆点按钮和轮播图
    });
    
    //给向左控制按钮绑定点击切换按钮和轮播图事件
    $('.wrap .control-btn-l').on("click",function(e){
      //组织a标签的默认行为
      e.preventDefault();
      index --;
      //索引值小于0(最前的轮播图和圆点)让索引值回到最后
      if(index < 0){index = length - 1};
      //切换到索引值对应的圆点按钮和轮播图
      change();
    });

    //给向右控制按钮绑定点击切换按钮和轮播图事件
    $('.wrap .control-btn-r').on("click",function(e){
      e.preventDefault();
      index ++;
      //索引值大于7(最后的轮播图和圆点)让索引值回到0
      if(index > length - 1){index = 0};
      //切换到索引值对应的圆点按钮和轮播图
      change();
    });
    
    //封装轮播
    function play(){
      index ++;
      //索引值超过7(最后的轮播图和圆点)让索引值回到0
      index %= length;
      //切换到索引值对应的圆点按钮和轮播图
      change();
    }

    //设置定时器自动切换圆点按钮和轮播图
    autoPlay = setInterval(play,3000);

    //设置鼠标移入停止自动轮播
    slideShow.on("mouseover",function(){
      clearInterval(autoPlay);
    });
    //设置鼠标移出继续自动轮播
    slideShow.on("mouseout",function(){
      autoPlay = setInterval(play,3000);
    });
  })();
});
