$(function(){
     var len  = $(".num > li").length;
	 var index = 0;
	 var adTimer;
	 $(".p5_leftBox .txtDes").css("opacity","0.8");
	 $(".num li").mouseover(function(){
		index  =   $(".num li").index(this);
		showImg(index);
	 });	
	 //滑入 停止动画，滑出开始动画.
	 $('.p5_leftBox').hover(function(){
			 clearInterval(adTimer);
		 },function(){
			 adTimer = setInterval(function(){
			    showImg(index)
				index++;
				if(index==len){index=0;}
			  } , 2000);
	 }).trigger("mouseleave");
})
// 通过控制top ，来显示不同的幻灯片
function showImg(index){
		$(".p5_leftBox li").stop(true,false).eq(index).show().siblings().hide();
		$(".num li").removeClass("on").eq(index).addClass("on");
}

