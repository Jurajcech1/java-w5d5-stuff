function TowersOfHanoi() {
  this.stack = [[3, 2, 1], [], []];
}

TowersOfHanoi.prototype.isWon = function() {
  return (game.stack2.length === 3 || game.stack3.length === 3);
};

TowersOfHanoi.prototype.isValidMove = function(startTowerIdx, endTowerIdx) {
  var startStack = this.stack[startTowerIdx];
  var endStack = this.stack[endTowerIdx];
  var diskComparison = endStack[endStack.length - 1] > startStack[startStack.length - 1]

  return (diskComparison || endStack.length === 0 );
}

var game = new TowersOfHanoi();
