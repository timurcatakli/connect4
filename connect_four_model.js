function Board(){
  this.col0 = [];
  this.col1 = [];
  this.col2 = [];
  this.col3 = [];
  this.col4 = [];
  this.col5 = [];
  this.col6 = [];
}

Board.prototype.addChecker = function(color, column){
  var property = "col" + column;
  this[property].push(color);
  var coordinatesForView = [column, (this[property].length-1)]
  return coordinatesForView
}

// Board.prototype.horizontalSolve = nil
// Board.prototype.verticalSolve = nil
// Board.prototype.backSolve = nil
// Board.prototype.forwardSolve = nil
// Board.prototype.addChecker = nil
// Board.prototype.talkToView = nil//sends coordinates col# and row #
