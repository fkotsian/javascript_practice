(function (root) {
  var Hanoi = root.Hanoi = (root.Hanoi || {});

  var UI = Hanoi.HanoiUI = function(game, $rootEl) {
    this.$el = $rootEl;
    this.game = game;
    this.clickedTowers = [];
    this.setUpEvents();
    this.render();
  }


  UI.prototype.render = function() {
  };

})(this);