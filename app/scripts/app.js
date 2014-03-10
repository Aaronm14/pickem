'use strict';

var app = angular.module('pickemApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'firebase'
]);
app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/games.html',
      controller: 'GamesCtrl'
    })
    .when('/games/:gameId', {
      templateUrl: 'views/showgame.html',
      controller: 'GameViewCtrl'
    })
    // .when('/props/:propId', {
    //   templateUrl: 'views/showprop.html',
    //   controllers: 'PropViewCtrl'
    // })
    .otherwise({
      redirectTo: '/'
    });
});
app.constant('FIREBASE_URL', 'https://pickem.firebaseio.com/');