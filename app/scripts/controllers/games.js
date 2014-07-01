'use strict';

app.controller('GamesCtrl', function ($scope, Game, Nba) {
  $scope.games = Game.all;

  $scope.game = {home: 'Home Team', away: 'Away Team'};

  $scope.nbateams = Nba.teams;

  $scope.submitGame = function() {
    Game.create($scope.game).then(function () {
      $scope.game = {home: 'Home Team', away: 'Away Team'};
    });
  };

  $scope.deleteGame = function (gameId) {
    Game.delete(gameId);
  };
});
