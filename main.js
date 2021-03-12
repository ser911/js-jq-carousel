$(function() {

$ (".next").click(
function(){
var activeImg = $(".images img.active");
activeImg.removeClass("active")
activeImg.next().addClass("active");
if (activeImg.hasClass("last") == true) {
  $(".images img.first").addClass("active");
}
else{

  activeImg.next().addClass("active");
}
}
);
$ (".prev").click(
function(){
var activeImg = $(".images img.active");
activeImg.removeClass("active")
activeImg.prev().addClass("active");
if (activeImg.hasClass("first") == true) {
  $(".images img.last").addClass("active");
}
else{

  activeImg.prev().addClass("active");
}
}
);
});
