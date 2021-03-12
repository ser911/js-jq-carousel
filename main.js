$ (function(){

$(".prev").click(


)


$(".next").click(
function(){
var activeImg = $(".images img.active")
  activeImg.removeClass("active");
  activeImg.next().addClass("active");
}

)






});
