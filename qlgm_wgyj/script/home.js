// JavaScript Document
$(function(){
	$(".botBox .titleBox .rightTitleBox a").eq(0).addClass("hover");
	$(".botBox .liFuBox").eq(0).show();
	$(".botBox .titleBox .rightTitleBox a").each(function(index,eleObj){
	   $(eleObj).click(function(){
		  $(".botBox .titleBox .rightTitleBox a").removeClass("hover"); 
		  $(".botBox .titleBox .rightTitleBox a").eq(index).addClass("hover"); 
	          $(".botBox .liFuBox").eq(index).show().siblings().hide();
		  $(".botBox h3").show(); 
                  $(".botBox .titleBox").show();
	   })
	})
})
$(function(){
  var height=$(".botBox").height();
  if(height<280){$(".botBox").height(280)} 
  else $(".botBox").height($(".botBox").height());
   
})