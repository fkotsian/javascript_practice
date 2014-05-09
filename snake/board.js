

(function (root) {
  var Snakey = root.Snakey = (root.Snakey || {});

  var Board = Snakey.Board = function() {
    this.snake = new Snakey.Snake();
    this.grid = [];

    var grid = this.grid;

    _.times(Snakey.SIZE, function() { grid.push([]); });

    grid.forEach(function(row, i) {
      _.times(Snakey.SIZE, function() { row.push("."); });
    });
  };

  Board.prototype.display = function() {

    var displayBoard = [];
    _.times(Snakey.SIZE, function() { displayBoard.push([]); });

    displayBoard.forEach(function(row) {
      _.times(Snakey.SIZE, function() { row.push("."); });
    });

    this.snake.segments.forEach(function(segment, i) {
      var segX = segment[0];
      var segY = segment[1];
      displayBoard[segX][segY] = "S";
    });

    displayBoard.forEach( function(row, i) {
      displayBoard[i] = row.join(" ");
    });
    displayBoard = displayBoard.join("\n");

    return displayBoard;
  };

  Board.prototype.run = function() {
    console.log("HELLO");
  };

})(this);
