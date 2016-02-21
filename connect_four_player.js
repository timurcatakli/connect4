function Play(){
  this.color = "r"
}

Play.prototype.switchPlayer = function(){
  if (this.color === "r"){
    this.color = "b"
  }
  else if (this.color === "b"){
    this.color = "r"
  }

Board.prototype.addChecker = function(color, column){
  var property = "col" + column;
  this[property].push(color);
  var coordinatesForView = [column, (this[property].length-1)]
  return coordinatesForView
}

board.addChecker("r", [0,1]);

function Computer(){}

Computer.prototype.move = function(){
  var color = "b"
  var column = Math.floor(Math.random() * (6 - 0 +1) + 0)
  return column
}

