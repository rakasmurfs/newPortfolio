$(".nameHeader").bind("webkitAnimationEnd mozAnimationEnd animationend", function(){
    $(this).removeClass("buttonD")  
  })
  
  $(".nameHeader").hover(function(){
    $(this).addClass("buttonD");        
  })