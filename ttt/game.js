var Board = require("./board");
var HumanPlayer = require("./humanplayer");
var ComputerPlayer = require("./computerplayer");



function Game() {
  this.board = new Board();
  this.player1 = new HumanPlayer("x");
  this.player2 = new HumanPlayer("o");
  this.currentPlayer = this.player1;
}

Game.prototype.play = function(completionCallback) {
  var that = this;
  this.board.print();
  this.currentPlayer.promptMove(function(row, col) {
    that.board.placeMark(row, col, that.currentPlayer.mark);
    if (that.board.isWon()) {
      completionCallback(that.currentPlayer.mark);
    }
    else {
      that.switchCurrentPlayer();
      that.play(completionCallback);
    }
  });
};

Game.prototype.switchCurrentPlayer = function() {
  if (this.currentPlayer === this.player1) {
    this.currentPlayer = this.player2;
  }
  else {
    this.currentPlayer = this.player1;
  }
};

var game = new Game();

game.play(function(winnerMark) {
  console.log(winnerMark + " wins!");
  reader.close();
});

// console.log(board.board);
