$(function(){
      $(".yxte_title li a").each(function(index,eleObj){
	  $(".yxte_title li a").eq(0).addClass("one1hover"); 
          $(eleObj).click(function(){
             removeClass();
	     if(index==0){
		 $(".yxte_title li a").eq(index).addClass("one1hover");
	     }else if(index==1){ 
		 $(".yxte_title li a").eq(index).addClass("one2hover");
	     }else if(index==2){
		 $(".yxte_title li a").eq(index).addClass("one3hover");
	     }else if(index==3){
		 $(".yxte_title li a").eq(index).addClass("one4hover");
	     }else if(index==4){
		 $(".yxte_title li a").eq(index).addClass("one5hover");
	     }
	        $(".ncb_main .contShow").eq(index).css({"display":"block"}).siblings().css({"display":"none"});
	  })
      })
 })

function removeClass(){
	$(".yxte_title li a").eq(0).removeClass("one1hover");	 
	$(".yxte_title li a").eq(1).removeClass("one2hover");
        $(".yxte_title li a").eq(2).removeClass("one3hover");
	$(".yxte_title li a").eq(3).removeClass("one4hover");	
	$(".yxte_title li a").eq(4).removeClass("one5hover");	
}