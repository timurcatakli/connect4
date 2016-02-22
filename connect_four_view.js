
function View(){};

// checker click function starts here
View.prototype.getClick = function(color, board, dropChecker){
    $(".checker").click(function(e){
      e.preventDefault;
      console.log(this);
      var col = $(this).attr('col');
      dropChecker(color, board.addChecker(color, col));
    });

}
// checker click function ends here

var dropChecker = function (color, coordinates){
  var checkerRow = coordinates[1];
  var checkerColumn = coordinates[0];
  var checkerColumnJquery = ".checker" + checkerColumn;
  var destinationCell = '.cell' + checkerColumn + checkerRow
  var checkerRowJquery = (6 - checkerRow) * 120;
    console.log(checkerRow + " " + checkerColumn);
    $(checkerColumnJquery).css("background-color", color);
    $(checkerColumnJquery).animate({top: "+=" + checkerRowJquery + "px"}, 1000);
    setTimeout(function(){
      $(destinationCell).css('background-color', color);
    }, 1000);
    $(checkerColumnJquery).animate({top: "-=" + checkerRowJquery + "px"});
    
}

$(document).ready(function(){

  // mouseover function starts here
  $(".checker").mouseover(function(){
    
  });

  $(".checker").mouseout(function(){
    
  });
  // mouseover function ends here
 

  var board = new Board();
  var play = new Play();
  var view = new View();
  var color = play.color;
  var solved = false;

  
  view.getClick(color, board, dropChecker);
  console.log(color);



  













  // var fiveSeconds = new Date().getTime() + 5000;

  // $('#clock').countdown(fiveSeconds).on('update.countdown', function(event) {

  //   var $this = $(this);
  //     $this.html(event.strftime('To end: <span>%H:%M:%S</span>'));
  // }).on('finish.countdown', function(e){
  //   alert("Test");
  //   this.countdown('start');
  // });


















})
