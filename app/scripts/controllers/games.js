'use strict';

app.controller('GamesCtrl', function ($scope, Game, NBA) {
  $scope.games = Game.all;

  $scope.game = {home: 'Home Team', away: 'Away Team', prop: 'Prop goes here'};

  $scope.nbateams = NBA.teams;

  $scope.submitGame = function() {
    Game.create($scope.game).then(function () {
      $scope.game = {home: 'Home Team', away: 'Away Team', prop: 'Prop goes here'};
    });
  };

  $scope.deleteGame = function (gameId) {
    Game.delete(gameId);
  };
});