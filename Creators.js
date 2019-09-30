$(document).ready(function(){
    $(".fotos").hover(function(){
      $("#elbody").css("background-color", "yellow");
      }, function(){
      $("#elbody").css("background-color", "pink");
    });
  });