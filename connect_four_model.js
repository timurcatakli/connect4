function Board(){
  this.col0 = [];
  this.col1 = [];
  this.col2 = [];
  this.col3 = [];
  this.col4 = [];
  this.col5 = [];
  this.col6 = [];
}

Board.prototype.horizontalSolve = nil
Board.prototype.verticalSolve = nil
Board.prototype.backSolve = nil
Board.prototype.forwardSolve = nil
Board.prototype.addChecker = nil
Board.prototype.talkToView = nil//sends coordinates col# and row #

function Play(){
  this.color = ???
}

Play.prototype.switchPlayer =
// if color = red be black
