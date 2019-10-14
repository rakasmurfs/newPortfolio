$(".nameHeader").bind("webkitAnimationEnd mozAnimationEnd animationend", function(){
    $(this).removeClass("buttonD")  
  })
  
  $(".nameHeader").hover(function(){
    $(this).addClass("buttonD");        
  })
  $(".about").bind("webkitAnimationEnd mozAnimationEnd animationend", function(){
    $(this).removeClass("buttonD")  
  })
  
  $(".about").hover(function(){
    $(this).addClass("buttonD");        
  })