function Board(){
  this.col0 = [];
  this.col1 = [];
  this.col2 = [];
  this.col3 = [];
  this.col4 = [];
  this.col5 = [];
  this.col6 = [];
}

Board.prototype.horizontalHelper = function(colCounter, counter, color, index){
  var originalCol = colCounter;
  if (this[("col"+(colCounter + 1))][index] === color) {
    counter++;
    colCounter++;
  } else {
    counter = 0;
    colCounter = originalCol;
  }
  return [colCounter, counter];
}

Board.prototype.horizontalSolve = function(){
  var counter =0;
  for (var i = 0; i < 5; i++) {
    if (counter < 3 ){
      var colCounter = i;
      counter = 0;
      var color = "";
      var game = this;
      this[("col"+i)].forEach(function(value, index){
        if (counter < 3 ){
          color = value;
          do {
            var whatever = game.horizontalHelper(colCounter, counter, color, index);
            counter = whatever[1];
            colCounter = whatever[0];
          } while (counter != 0 && counter != 3 && colCounter < 7);
          colCounter = i;
          if (counter == 3) {
            console.log("YOU WIN!");
          }
        }
      })
    }
  }
}

Board.prototype.verticalSolve = function(){
  var counter = 0;
  for (var i = 0; i < 7; i++) {
    if (counter < 3 ){
      counter = 0;
      var color = "";
      this[("col"+i)].forEach(function(value){
        if (color == value) {
          counter++;
        } else {
          counter = 0;
        }
    color = value;
    })
    }
  }
  if (counter == 3) {
    console.log("YOU WIN!");
  }
}

Board.prototype.backSolve = function(){}

Board.prototype.forwardSolve = function(){}
Board.prototype.addChecker = function(){}
Board.prototype.talkToView = function(){}//sends coordinates col# and row #

// function Play(){
//   this.color = ???
// }

// Play.prototype.switchPlayer =
// // if color = red be black
