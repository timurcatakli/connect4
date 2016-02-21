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

Board.prototype.addChecker = function(color, coordinates){
  var property = "col" + coordinates[0];
  this[property].push(color);
  var coordinatesForView = [coordinates[0], (this[property].length-1)]
  return coordinatesForView
}

board.addChecker("r", [0,1]);

