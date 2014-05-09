(function (root) {
  var Snakey = root.Snakey = (root.Snakey || {});

  var KEY_MAPS = Snakey.KEY_MAPS = {
    37: 'w',
    38: 'n',
    39: 'e',
    40: 's'
  };

  var SPEED = Snakey.GAME_SPEED = 500;

  var View = Snakey.View = function($rootEl) {
    this.$el = $rootEl;
  };

  View.prototype.start = function() {
    this.board = new Snakey.Board();

    this.bindKeyHandlers();
    setInterval(this.step.bind(this), SPEED);
  };

  View.prototype.bindKeyHandlers = function() {
    this.$el.on('keydown', this.handleKeyEvent);
  };

  View.prototype.handleKeyEvent = function(event) {
    var keyPress = event.keyCode;
    if (KEY_MAPS[keyPress]) {
      this.board.snake.turn(KEY_MAPS[keyPress]);
    };
  };

  View.prototype.step = function() {
    this.board.snake.move();
    this.render();
  }

  View.prototype.render = function() {
    // call board.display()
    // render it
    displayBoard = this.board.display();
    var $boardDiv = $("<div id='board'></div>");
    $boardDiv.html("<pre>" + displayBoard + "</pre>");
    this.$el.empty();
    this.$el.append($boardDiv);
  }


})(this);