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
  
  $(document).ready(function () {

    setTimeout(function() {
      var $rows = $(".project1, .project2, .project4").removeClass("animated");

    }, 1000);
    setTimeout(function() {
      var $rows = $(".project3, .project5, .project7").removeClass("animated");

    }, 1500);
    setTimeout(function() {
      var $rows = $(".project6, .project8").removeClass("animated");

    }, 2000);
    setTimeout(function() {
      var $rows = $(".project9").removeClass("animated");

    }, 2200);
 });
