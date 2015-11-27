var readline = require("readline");

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function TowersOfHanoi() {
  this.stack = [[3, 2, 1], [], []];
};

TowersOfHanoi.prototype.isWon = function() {
  return (game.stack[1].length === 3 || game.stack[2].length === 3);
};

TowersOfHanoi.prototype.isValidMove = function(startTowerIdx, endTowerIdx) {
  var startStack = this.stack[startTowerIdx];
  var endStack = this.stack[endTowerIdx];
  var diskComparison = endStack[endStack.length - 1] > startStack[startStack.length - 1];
  if (startStack.length === 0) {
    return false;
  }
  return (diskComparison || endStack.length === 0 );
};

TowersOfHanoi.prototype.move = function(startTowerIdx, endTowerIdx) {
  if (this.isValidMove(startTowerIdx, endTowerIdx)) {
    var startStack = this.stack[startTowerIdx];
    var endStack = this.stack[endTowerIdx];
    endStack.push(startStack.pop());
    return true;
  }
  else {
    return false;
  }
};

TowersOfHanoi.prototype.print = function() {
  for (var i = 0; i < 3; i++) {
    console.log(JSON.stringify(this.stack[i]));
  }
};

TowersOfHanoi.prototype.promptMove = function(callback) {
  this.print();
  reader.question("What is the tower index you want to move FROM? ", function(startTowerString) {
    reader.question("What is the tower index you want to move TO? ", function(endTowerString) {
      var startTowerIdx = parseInt(startTowerString);
      var endTowerIdx = parseInt(endTowerString);

      callback(startTowerIdx, endTowerIdx);
    });
  });
};

TowersOfHanoi.prototype.run = function(completionCallback) {
  var that = this;
  this.promptMove(function(startTowerIdx, endTowerIdx) {
    if (!that.move(startTowerIdx, endTowerIdx)) {
      console.log("Invalid move");
    }
    if (!that.isWon()) {
      that.run(completionCallback);
    }
    else {
      completionCallback("You've won!");
    }
  });
    // this.run(completionCallback);
};


var game = new TowersOfHanoi();
game.run(function(winMessage) {
  console.log(winMessage);
  reader.close();
});
