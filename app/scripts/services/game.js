'use strict';

app.factory('Game',
  function ($firebase, FIREBASE_URL) {
  var ref = new Firebase(FIREBASE_URL + 'games');

  var games = $firebase(ref);
});