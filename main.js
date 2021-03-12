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

$("#c1").click(
function(){
  var imgIdLink1 = $("#img1");
  var c1 = $("#c1");
  c1.addClass("active");
  c1.siblings().removeClass("active")
  imgIdLink1.addClass("active");
  imgIdLink1.siblings().removeClass("active");

}

)
$("#c2").click(
function(){
  var imgIdLink2 = $("#img2");
  var c2 = $("#c2");
  c2.addClass("active");
  c2.siblings().removeClass("active")
  imgIdLink2.addClass("active");
  imgIdLink2.siblings().removeClass("active");

}

)

$("#c3").click(
function(){
  var imgIdLink3 = $("#img3");
  var c3 = $("#c3");
  c3.addClass("active");
  c3.siblings().removeClass("active")
  imgIdLink3.addClass("active");
  imgIdLink3.siblings().removeClass("active");

}

)

$("#c4").click(
function(){
  var imgIdLink4 = $("#img4");
  var c4 = $("#c4");
  c4.addClass("active");
  c4.siblings().removeClass("active")
  imgIdLink4.addClass("active");
  imgIdLink4.siblings().removeClass("active");

}

)



});
