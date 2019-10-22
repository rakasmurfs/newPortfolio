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

$(".rubber").bind("webkitAnimationEnd mozAnimationEnd animationend", function(){
  $(this).removeClass("buttonD")  
})

$(".rubber").hover(function(){
  $(this).addClass("buttonD");        
})

$(document).ready(function() {
  if( ! $('#myCanvas').tagcanvas({
    textColour : '#0478A5',
    outlineThickness : 1,
    maxSpeed : 0.05,
    depth : 1
  })) {
    // TagCanvas failed to load
    $('#myCanvasContainer').hide();
  }
  $("#myCanvas").tagcanvas("setspeed", [0.250, -0.140]);
});
//[0.210, 0.140]
//0.05