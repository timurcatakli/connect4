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

View.prototype.dropChecker = function (color, coordinates){
  var checkerRow = coordinates[1];
  var checkerColumn = coordinates[0];
  var checkerColumnJquery = ".checker" + checkerColumn;
  var checkerRowJquery = (6 - checkerRow) * 120;
  console.log(checkerRowJquery);

  $(checkerColumnJquery).click(function(){
    $(checkerColumnJquery).css("background-color", color);
    $(checkerColumnJquery).animate({top: "+=" + checkerRowJquery + "px"});
  });
}

$(document).ready(function(){
  var view = new View ();
  view.getClick();
  view.dropChecker("red", [2,2]);










  var fiveSeconds = new Date().getTime() + 5000;

  $('#clock').countdown(fiveSeconds).on('update.countdown', function(event) {

    var $this = $(this);
      $this.html(event.strftime('To end: <span>%H:%M:%S</span>'));
  }).on('finish.countdown', function(e){
    alert("Test");
    this.countdown('start');
  });


















})
