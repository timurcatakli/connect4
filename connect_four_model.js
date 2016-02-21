function Board(){
  this.col0 = [];
  this.col1 = [];
  this.col2 = [];
  this.col3 = [];
  this.col4 = [];
  this.col5 = [];
  this.col6 = [];
}

// Board.prototype.horizontalSolve = function(){
//   this.col0.forEach(function(value, index){
//     var counter = 0;
//     var color = "";
//     if (col)
//   })
// }
Board.prototype.verticalSolve = function(){
  var counter = 0;
  var color = "";
  this.col0.forEach(function(value){
    if (color == value) {
      counter++;
    } else {
      counter = 0;
    }
    if (counter == 3) {
      console.log("YOU WIN!")
    }
    color = value;
  })
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
