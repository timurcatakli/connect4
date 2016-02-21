function Board(view){
  this.col0 = [];
  this.col1 = [];
  this.col2 = [];
  this.col3 = [];
  this.col4 = [];
  this.col5 = [];
  this.col6 = [];
  // this.view = view;
}

Board.prototype.addChecker = function(color, column){
  var property = "col" + column;
    if (this.columnFilled(property)){
      this[property].push(color);
      var coordinatesForView = [parseInt(column), (this[property].length-1)]
      return coordinatesForView
    }
    else {
      console.log("error")
    }
}

Board.prototype.columnFilled = function (property) {
  if (this[property].length <= 5){
    return true
  }
}

// Board.prototype.horizontalSolve = nil
// Board.prototype.verticalSolve = nil
// Board.prototype.backSolve = nil
// Board.prototype.forwardSolve = nil
// Board.prototype.addChecker = nil
// Board.prototype.talkToView = nil//sends coordinates col# and row #
