(function (root) {
  var Snakey = root.Snakey = (root.Snakey || {});

  var SIZE = Snakey.SIZE = 26;

  var DIRECTIONS = Snakey.DIRECTIONS = {
    'w': [-1,0],
    'e': [1, 0],
    'n': [0, 1],
    's': [0,-1]
  };

  var Snake = Snakey.Snake = function() {

    this.dir = 'w'
    this.segments = [[SIZE / 2, SIZE / 2]];

  };

  Snake.prototype.move = function() {
    var direction = DIRECTIONS[this.dir];
    var head = this.segments[0];
    var newHead = [head[0] + direction[0], head[1] + direction[1]];
    this.segments.unshift(newHead);
    this.segments.pop();
    this.correctBounds();
  };

  Snake.prototype.turn = function(direction) {
    this.dir = direction;
  };

  Snake.prototype.correctBounds = function() {
    if (this.segments[0][0] > SIZE) {
      this.segments[0][0] -= SIZE;
    } else if (this.segments[0][0] < 0) {
      this.segments[0][0] += SIZE;
    };
    if (this.segments[0][1] > SIZE) {
      this.segments[0][1] -= SIZE;
    } else if (this.segments[0][1] < 0) {
      this.segments[0][1] += SIZE;
    };
  };


})(this);

