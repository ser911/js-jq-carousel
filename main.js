$ (function(){

$(".prev").click(


)


$(".next").click(
function(){
var activeImg = $(".images img.active");
}
if (activeImg.hasClass("last") == true) {
  $(".images img.first").addClass("active");
}

activeImg.removeClass("active");
activeImg.next().addClass("active");
)






});
