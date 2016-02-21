function View(){

}

// View.prototype.getClick()=
// View.prototype.dropChecker(color, coordinates)= //passed in from Board


  // mouseover function starts here
  $(".checker").mouseover(function(){
    $(this).css('background-color', 'blue')
  });

  $(".checker").mouseout(function(){
    $(this).css('background-color', 'red')
  });
  // mouseover function ends here

  // checker click function starts here
  $(".checker").click(function(e){
    e.preventDefault;
    alert($(this).attr('col'));
  });
  // checker click function ends here




  $(".checker0").click(function(){
    $(".checker0").animate({top: "+=240px"});
  });

  $(".checker1").click(function(){
    $(".checker1").animate({top: "+=600px"});
  });

  $(".checker2").click(function(){
    $(".checker2").animate({top: "+=120px"});
  });

  $(".checker3").click(function(){
    $(".checker3").animate({top: "+=480px"});
  });

  $(".checker4").click(function(){
    $(".checker4").animate({top: "+=360px"});
  });

  $(".checker5").click(function(){
    $(".checker5").animate({top: "+=120px"});
  });

  $(".checker6").click(function(){
    $(".checker6").animate({top: "+=600px"});
  });
