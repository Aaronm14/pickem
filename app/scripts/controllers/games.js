'use strict';

app.controller('GamesCtrl', function ($scope, Game, NBA) {
  $scope.games = Game.all;

  $scope.game = {home: 'Home Team', away: 'Away Team'};

  $scope.nbateams = NBA.teams;

  $scope.submitGame = function() {
    Game.create($scope.game).then(function () {
      $scope.game = {home: 'Home Team', away: 'Away Team'};
    });
  };

  $scope.deleteGame = function (gameId) {
    Game.delete(gameId);
  };
});
