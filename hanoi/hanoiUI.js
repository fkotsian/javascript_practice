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
    var ui = this;
    var towers = this.game.towers;
    var i = 0;
    ui.$el.empty();
    towers.forEach( function(tower) {
      var $tower = $("<div class='tower' data-tower_num='" + i + "'></div>");
      // $tower.html(tower.join());
      tower.forEach(function(ring) {
        var $ring = $("<div class='ring'>"+ring+"</div>");
        $tower.prepend($ring);
      });

      while ($tower.children().length < 3) {
        var $ring = $("<div class='ring'></div>");
        $tower.prepend($ring);
      }

      ui.$el.append($tower);
      i++;
    });

    if (this.game.isWon()){
      var $winBanner = $("<h1 class='win_banner'>YOU DEFEATED</h1>");
      this.$el.append($winBanner);
    };
  };

  UI.prototype.setUpEvents = function() {
    var ui = this;
    this.$el.click('.tower', ui.handleClick.bind(ui));
  };

  UI.prototype.handleClick = function(event) {
    $tower = $(event.target)

    if($tower.attr("class") !== "tower") {
      $tower = $tower.parent();
    }

    console.log("I clicked on tower " + $tower.data("tower_num"));
    this.clickedTowers.push($tower.data("tower_num"));
    console.log(this.clickedTowers);
    if (this.clickedTowers.length === 2) {
      console.log("TWO TOWERS");
      this.game.move( this.clickedTowers[0], this.clickedTowers[1] );
      this.clickedTowers = [];
      this.render();
    };
  };

})(this);