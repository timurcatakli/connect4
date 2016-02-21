function Play(){
  this.color = "red"
}

Play.prototype.switchPlayer = function(){
  if (this.color === "red"){
    this.color = "black"
  }
  else if (this.color === "black"){
    this.color = "red"
  }
}

function Computer(){}

Computer.prototype.move = function(){
  var color = "black"
  var column = Math.floor(Math.random() * (6 - 0 +1) + 0)
  return column
}
