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
}

function Computer(){}

Computer.prototype.move = function(){
  var color = "b"
  var column = Math.floor(Math.random() * (6 - 0 +1) + 0)
  return column
}

