  // mouseover function starts here
  $(".checker").mouseover(function(){
    $(this).css('background-color', 'blue')
  });

  $(".checker").mouseout(function(){
    $(this).css('background-color', 'gray')
  });
  // mouseover function ends here

function View(){};

// checker click function starts here
View.prototype.getClick = function(color, board, dropChecker){
    $(".checker").click(function(e){
      e.preventDefault;
      var col = $(this).attr('col');
      dropChecker(color, board.addChecker(color, col));
    });
}
// checker click function ends here

var dropChecker = function (color, coordinates){
  var checkerRow = coordinates[1];
  var checkerColumn = coordinates[0];
  var checkerColumnJquery = ".checker" + checkerColumn;
  var checkerRowJquery = (6 - checkerRow) * 120;

    $(checkerColumnJquery).css("background-color", color);
    $(checkerColumnJquery).animate({top: "+=" + checkerRowJquery + "px"});
}

$(document).ready(function(){
  var board = new Board();
  var play = new Play();
  var view = new View();
  var color = play.color;
  view.getClick(color, board, dropChecker);







  var fiveSeconds = new Date().getTime() + 5000;

  $('#clock').countdown(fiveSeconds).on('update.countdown', function(event) {

    var $this = $(this);
      $this.html(event.strftime('To end: <span>%H:%M:%S</span>'));
  }).on('finish.countdown', function(e){
    alert("Test");
    this.countdown('start');
  });


















})
