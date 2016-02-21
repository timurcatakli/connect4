  // mouseover function starts here
  $(".checker").mouseover(function(){
    $(this).css('background-color', 'blue')
  });

  $(".checker").mouseout(function(){
    $(this).css('background-color', 'red')
  });
  // mouseover function ends here


var board = new Board();
var play = new Play();

function View(board, play){
  this.board = board;
  this.play = play;
};

// checker click function starts here
View.prototype.getClick = function(){
    $(".checker").click(function(e){
    e.preventDefault;
    var col = $(this).attr('col')
    board.addChecker(play.color, col);
  });
}
// checker click function ends here

// View.prototype.dropChecker(color, coordinates)= //passed in from Board

$(document).ready(function(){
  var view = new View ();
  view.getClick();


  // $(".checker0").click(function(){
  //   $(".checker0").animate({top: "+=240px"});
  // });

  // $(".checker1").click(function(){
  //   $(".checker1").animate({top: "+=600px"});
  // });

  // $(".checker2").click(function(){
  //   $(".checker2").animate({top: "+=120px"});
  // });

  // $(".checker3").click(function(){
  //   $(".checker3").animate({top: "+=480px"});
  // });

  // $(".checker4").click(function(){
  //   $(".checker4").animate({top: "+=360px"});
  // });

  // $(".checker5").click(function(){
  //   $(".checker5").animate({top: "+=120px"});
  // });

  // $(".checker6").click(function(){
  //   $(".checker6").animate({top: "+=600px"});
  // });
})
