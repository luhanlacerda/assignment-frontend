'use strict';

angular.module('assignmentApp', [
  'ngRoute',
  'assignmentApp.services',
  'assignmentApp.controllers'
])
  .config(function ($routeProvider, $httpProvider) {
    $routeProvider.when('/signin-list', { templateUrl: '../views/signin-list.html', controller: 'SigninListCtrl' });
    $routeProvider.when('/signin-detail/:id', { templateUrl: '../views/signin-detail.html', controller: 'SigninDetailCtrl' });
    $routeProvider.when('/signin-creation', { templateUrl: '../views/signin-creation.html', controller: 'SigninCreationCtrl' });
    $routeProvider.when('/funcionario-list', { templateUrl: '../views/funcionario-list.html', controller: 'FuncionarioListCtrl' });
    $routeProvider.when('/funcionario-detail/:id', { templateUrl: '../views/funcionario-detail.html', controller: 'FuncionarioDetailCtrl' });
    $routeProvider.when('/funcionario-creation', { templateUrl: '../views/funcionario-creation.html', controller: 'FuncionarioCreationCtrl' });
    $routeProvider.when('/equipe-list', { templateUrl: '../views/equipe-list.html', controller: 'EquipeListCtrl' });
    $routeProvider.when('/equipe-detail/:id', { templateUrl: '../views/equipe-detail.html', controller: 'EquipeDetailCtrl' });
    $routeProvider.when('/equipe-creation', { templateUrl: '../views/equipe-creation.html', controller: 'EquipeCreationCtrl' });
    $routeProvider.when('/ferias-list', { templateUrl: '../views/ferias-list.html', controller: 'FeriasListCtrl' });
    $routeProvider.when('/ferias-detail/:id', { templateUrl: '../views/ferias-detail.html', controller: 'FeriasDetailCtrl' });
    $routeProvider.when('/ferias-creation', { templateUrl: '../views/ferias-creation.html', controller: 'FeriasCreationCtrl' });
    $routeProvider.otherwise({ redirectTo: '/' });

    /* CORS... */
    /* http://stackoverflow.com/questions/17289195/angularjs-post-data-to-external-rest-api */
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
  });