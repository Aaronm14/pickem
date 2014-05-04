'use strict';

app.controller('GameViewCtrl', function($scope, $routeParams, Game, FIREBASE_URL) {
  $scope.game = Game.find($routeParams.gameId);
  $scope.editEnabled = false;

  $scope.addProp = function () {
    Game.addProp($routeParams.gameId, $scope.prop);
    $scope.prop = '';
  };
  $scope.deleteProp = function(prop, propId) {
    Game.deleteProp($scope.game, prop, propId);
  };
  $scope.saveProp = function(game, prop, propId) {
    var propRef = new Firebase(FIREBASE_URL + '/games/' + $routeParams.gameId + '/props/' + propId);
    Game.saveProp($scope.game, prop, propId, propRef);
    $scope.disableEdit();
  };
  $scope.enableEdit = function() {
    $scope.editEnabled = true;
  };
  $scope.disableEdit = function() {
    $scope.editEnabled = false;
  };
});