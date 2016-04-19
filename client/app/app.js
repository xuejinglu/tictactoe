angular.module('tictactoe', [
  'tictactoe.landing',
  'tictactoe.lobby',
  'tictactoe.services',
  'ngRoute'
])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/landing', {
      templateUrl: 'app/landing/landing.html',
      controller: 'LandingController'
    })
    .when('/lobby', {
      templateUrl: 'app/lobby/lobby.html',
      controller: 'LobbyController'
    })
    .otherwise({redirectTo: '/landing'});
});
