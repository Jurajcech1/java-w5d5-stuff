function Board() {
  this.board = [[0,0,0],
                [0,0,0],
                [0,0,0]];
}

Board.prototype.isWon = function() {
  return this.rowWin || this.colWin || this.diagWin;
};

Board.prototype.rowWin = function() {
  for (var row = 0; row < 3; row++) {
    var boardRow = this.board[row];
    if (boardRow[0] === 0) return false;
    return (boardRow[0] === boardRow[1] && boardRow[1] === boardRow[2]);
  }
};

Board.prototype.colWin = function() {
  for (var row = 0; row < 3; row++) {
    var boardCol = [];
    for (var col = 0; col < 3; col++) {
      boardCol.push(this.board[row][col]);
    }
    if (boardCol[0] === 0) return false;
    if (boardCol[0] === boardCol[1] && boardCol[1] === boardCol[2]) {
      return true;
    }
  }
  return false;
};

Board.prototype.diagWin = function() {
  if (this.board[1][1] === 0) {
    return false;
  }
  else if (this.board[0][0] === this.board[1][1] && this.board[1][1] === this.board[2][2]) {
    return true;
  }
  else if (this.board[0][2] === this.board[1][1] && this.board[1][1] === this.board[2][0]) {
    return true;
  }
  else {
    return false;
  }
};

Board.prototype.winner = function() {

};

Board.prototype.isEmpty = function(row, column) {
  return (this.board[row][column] === 0);
};

Board.prototype.placeMark = function(row, column, mark) {
  this.board[row][column] = mark;
};
