'use strict';

app.controller('GameViewCtrl', function($scope, $routeParams, Game) {
  $scope.game = Game.find($routeParams.gameId);
});