// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider){

$stateProvider

    // setup an abstract state for the tabs directive
     .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tab.html'
    })

  // Each tab has its own nav history stack:

     .state('tab.home', {
        url: '/home',
        views: {
          'tab-home': {
            templateUrl: 'templates/home.html',
          }
        }
      })
      .state('tab.mesas', {
        url: '/mesas',
        views: {
          'tab-mesas': {
            templateUrl: 'templates/mesas.html',
            controller: 'MesasCtrl'
          }
        }
      })
      .state('tab.interes', {
        url: '/interes',
        views: {
          'tab-interes': {
            templateUrl: 'templates/interes.html',
          }
        }
      })

      .state('tab.info', {
        url: '/info',
        views: {
          'info': {
            templateUrl: 'templates/info.html',
          }
        }
      })

     $urlRouterProvider.otherwise('/tab/home');
})

.controller('MesasCtrl', ['$scope', '$http', '$state', function($scope, $http, $state) {
  $http.get('js/data.json')
  .success(function(data){
    $scope.materias = data.materias;
  });
}])
