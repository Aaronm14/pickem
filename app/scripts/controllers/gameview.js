'use strict';

app.controller('GameViewCtrl', function($scope, $routeParams, Game) {
  $scope.game = Game.find($routeParams.gameId);

  $scope.addProp = function () {
    Game.addProp($routeParams.gameId, $scope.prop);
    $scope.prop = '';
  };

  $scope.deleteProp = function(prop, propId) {
    Game.deleteProp($scope.game, prop, propId);
  };
});