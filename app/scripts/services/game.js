'use strict';

app.factory('Game',
  function ($firebase, FIREBASE_URL) {
  var ref = new Firebase(FIREBASE_URL + 'games');

  var games = $firebase(ref);

  var Game = {
    all: games,
    create: function(game) {
      return games.$add(game);
    },
    find: function(gameId) {
      return games.$child(gameId);
    },
    delete: function(gameId) {
      return games.$remove(gameId);
    },

    addProp: function(gameId, prop) {
      prop.gameId = gameId;
      games.$child(gameId).$child('props').$add(prop);
    },
    deleteProp: function(game, prop, propId) {
      game.$child('props').$remove(propId);
    },
    saveProp: function(game, prop, propId, propRef) {
      $firebase(propRef).$update(prop);
    }
  };

  return Game;
});
