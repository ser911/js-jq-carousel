$(function() {

$ (".next").click(
function(){
  var activeImg = $(".images img.active");
    activeImg.removeClass("active")
    activeImg.next().addClass("active");
  var activeCircle = $(".fas.fa-circle.active");
    activeCircle.removeClass("active");
    activeCircle.next().addClass("active");

  if (activeImg.hasClass("last") == true) {
    $(".images img.first").addClass("active");
    $(".fas.fa-circle.first").addClass("active");
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
  var activeCircle = $(".fas.fa-circle.active");
    activeCircle.removeClass("active");
    activeCircle.prev().addClass("active");
  if (activeImg.hasClass("first") == true) {
    $(".images img.last").addClass("active");
    $(".fas.fa-circle.last").addClass("active");
  }
  else{

  activeImg.prev().addClass("active");
}
}
);

});
