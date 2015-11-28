var readline = require("readline");

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function HumanPlayer(sym) {
  this.mark = sym;
}

HumanPlayer.prototype.promptMove = function(callback) {
  reader.question("Which row would you like to place your mark?", function(rowString) {
    reader.question("Which column would you like to place your mark?", function(columnString) {
      var row = parseInt(rowString);
      var col = parseInt(columnString);

      callback(row, col);
    });
  });
};

module.exports = HumanPlayer;
