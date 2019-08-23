'use strict';

angular.module('assignmentApp', [
  'ngRoute',
  'assignmentApp.services',
  'assignmentApp.controllers'
  ])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider.when('/signin-list', {templateUrl: '../views/signin-list.html', controller: 'SigninListCtrl'});
  $routeProvider.when('/signin-detail/:id', {templateUrl: '../views/signin-detail.html', controller: 'SigninDetailCtrl'});
  $routeProvider.when('/signin-creation', {templateUrl: '../views/signin-creation.html', controller: 'SigninCreationCtrl'});
  $routeProvider.otherwise({redirectTo: '/'});

  /* CORS... */
  /* http://stackoverflow.com/questions/17289195/angularjs-post-data-to-external-rest-api */
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
});