'use strict';

/* Controllers */

var app = angular.module('assignmentApp.controllers', []);


// Clear browser cache (in development mode)
//
// http://stackoverflow.com/questions/14718826/angularjs-disable-partial-caching-on-dev-machine
app.run(function ($rootScope, $templateCache) {
  $rootScope.$on('$viewContentLoaded', function () {
    $templateCache.removeAll();
  });
});

app.controller('SigninListCtrl', ['$scope', 'SigninsFactory', 'SigninFactory', '$location',
  function ($scope, SigninsFactory, SigninFactory, $location) {

    /* callback for ng-click 'editSignin': */
    $scope.editSignin = function (signinId) {
      // verificar
      $location.path('/signin-detail/' + signinId);
    };

    /* callback for ng-click 'deleteSignin': */
    $scope.deleteSignin = function (signinId) {
      SigninFactory.delete({ id: signinId }).$promise
      .then(function(res) {
        $scope.signins = SigninsFactory.query();
      })
      .catch(function(err) {
        alert("Falha ao deletar usuário!!!");
      });
    };

    /* callback for ng-click 'createSignin': */
    $scope.createNewSignin = function () {
      $location.path('/signin-creation');
    };

    $scope.signins = SigninsFactory.query();
  }]);

app.controller('SigninDetailCtrl', ['$scope', '$routeParams', 'SigninFactory', '$location',
  function ($scope, $routeParams, SigninFactory, $location) {

    /* callback for ng-click 'updateSignin': */
    $scope.updateSignin = function () {
      SigninFactory.update($scope.signin);
      $location.path('/signin-list');
    };

    /* callback for ng-click 'cancel': */
    $scope.cancel = function () {
      $location.path('/signin-list');
    };

    $scope.signin = SigninFactory.show({ id: $routeParams.id });
  }]);

app.controller('SigninCreationCtrl', ['$scope', 'SigninsFactory', '$location',
  function ($scope, SigninsFactory, $location) {

    /* callback for ng-click 'createNewSignin': */
    $scope.createNewSignin = function () {
      SigninsFactory.create($scope.signin);
      $location.path('/signin-list');
    };
  }]);
