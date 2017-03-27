/*中部推荐活动js*/
$(function(){
	$(".activeBoxHover").css({opacity:0.85}).hide();
    $(".activeBox").each(function(index,eleObj){
		$(eleObj).mouseover(
		   function(){
			   $(this).find(".activeInnerBox").hide();
			   $(this).find(".activeBoxHover").show();
		   }
		)
		$(eleObj).mouseout(
		   function(){
			   $(this).find(".activeInnerBox").show();
			   $(this).find(".activeBoxHover").hide();
		   }
		)
	})
})

/*大礼包  判断输入手机号*/
$(function(){
   var tag=true;
   $("#btn_qd").click(function(){
       if(tag) {$("#dlbBox1").hide();$("#dlbBox2").show();}
	   if(!tag) {$("#dlbBox1").hide();$("#dlbBox3").show();}
   })
})

/*弹出层*/
$(function(){
    $("#fade").click(function(){
       $(".white_content").hide();$("#fade").hide();
  })
})


$(function(){
   $("#btnToUp").hide();
   $("#btnToBot").click(function(){
       $("#activeTit01").hide();
       $("#activeCont01").hide();
	   $("#btnToBot").hide();
	   $("#btnToUp").show();
   })
   
   $("#btnToUp").click(function(){
       $("#activeTit01").show();
       $("#activeCont01").show();
	   $("#btnToBot").show();
	   $("#btnToUp").hide();
   })
})
