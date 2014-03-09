'use strict';

app.controller('GamesCtrl', function ($scope, Game) {
  $scope.games = Game.get();
  $scope.game = {home: 'Home Team', away: 'Away Team', prop: 'Prop goes here'};

  $scope.submitGame = function() {
    Game.save($scope.game, function(ref) {
      $scope.games[ref.name] = $scope.game;
      $scope.game = {home: 'Home Team', away: 'Away Team', prop: 'Prop goes here'};
    });
  };

  $scope.deleteGame = function (gameId) {
    Game.delete({id: gameId}, function() {
      delete $scope.games[gameId];
    });
  };
});