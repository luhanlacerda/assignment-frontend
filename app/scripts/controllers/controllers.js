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
        .then(function (res) {
          $scope.signins = SigninsFactory.query();
        })
        .catch(function (err) {
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
      SigninsFactory.create($scope.signin).$promise
        .then(function (res) {
          $scope.signins = SigninsFactory.query();
        })
        .catch(function (err) {
          alert("Falha ao salvar usuário!!!");
        });
      $location.path('/signin-list');
    };
  }]);

app.controller('FuncionarioListCtrl', ['$scope', 'FuncionariosFactory', 'FuncionarioFactory', '$location',
  function ($scope, FuncionariosFactory, FuncionarioFactory, $location) {

    /* callback for ng-click 'editFuncionario': */
    $scope.editFuncionario = function (funcionarioId) {
      // verificar
      $location.path('/funcionario-detail/' + funcionarioId);
    };

    /* callback for ng-click 'deleteFuncionario': */
    $scope.deleteFuncionario = function (funcionarioId) {
      FuncionarioFactory.delete({ id: funcionarioId }).$promise
        .then(function (res) {
          $scope.funcionarios = FuncionariosFactory.query();
        })
        .catch(function (err) {
          alert("Falha ao deletar funcionario!!!");
        });
    };

    /* callback for ng-click 'createFuncionario': */
    $scope.createNewFuncionario = function () {
      $location.path('/funcionario-creation');
    };

    $scope.funcionarios = FuncionarioFactory.query();
  }]);

app.controller('FuncionarioDetailCtrl', ['$scope', '$routeParams', 'FuncionarioFactory', 'EquipesFactory', '$location',
  function ($scope, $routeParams, FuncionarioFactory, EquipesFactory, $location) {

    $scope.equipes = EquipesFactory.query();
    /* callback for ng-click 'updateFuncionario': */
    $scope.updateFuncionario = function () {
      FuncionarioFactory.update($scope.funcionario);
      $location.path('/funcionario-list');
    };

    /* callback for ng-click 'cancel': */
    $scope.cancel = function () {
      $location.path('/funcionario-list');
    };

    $scope.funcionario = FuncionarioFactory.show({ id: $routeParams.id });
  }]);

app.controller('FuncionarioCreationCtrl', ['$scope', 'FuncionariosFactory', 'EquipesFactory', '$location',
  function ($scope, FuncionariosFactory, EquipesFactory, $location) {

    /* callback for ng-click 'createNewFuncionario': */
    $scope.equipes = EquipesFactory.query();
    $scope.createNewFuncionario = function () {
      FuncionariosFactory.create($scope.funcionario);
      $location.path('/funcionario-list');
    };
  }]);

app.controller('EquipeListCtrl', ['$scope', 'EquipesFactory', 'EquipeFactory', '$location',
  function ($scope, EquipesFactory, EquipeFactory, $location) {

    /* callback for ng-click 'editEquipe': */
    $scope.editEquipe = function (equipeId) {
      // verificar
      $location.path('/equipe-detail/' + equipeId);
    };

    /* callback for ng-click 'deleteEquipe': */
    $scope.deleteEquipe = function (equipeId) {
      EquipeFactory.delete({ id: equipeId }).$promise
        .then(function (res) {
          $scope.equipes = EquipesFactory.query();
        })
        .catch(function (err) {
          alert("Falha ao deletar equipe!!!");
        });
    };

    /* callback for ng-click 'createEquipe': */
    $scope.createNewEquipe = function () {
      $location.path('/equipe-creation');
    };

    $scope.equipes = EquipesFactory.query();
  }]);

app.controller('EquipeDetailCtrl', ['$scope', '$routeParams', 'EquipeFactory', '$location',
  function ($scope, $routeParams, EquipeFactory, $location) {

    /* callback for ng-click 'updateEquipe': */
    $scope.updateEquipe = function () {
      EquipeFactory.update($scope.equipe);
      $location.path('/equipe-list');
    };

    /* callback for ng-click 'cancel': */
    $scope.cancel = function () {
      $location.path('/equipe-list');
    };

    $scope.equipe = EquipeFactory.show({ id: $routeParams.id });
  }]);

app.controller('EquipeCreationCtrl', ['$scope', 'EquipesFactory', '$location',
  function ($scope, EquipesFactory, $location) {

    /* callback for ng-click 'createNewEquipe': */
    $scope.createNewEquipe = function () {
      EquipesFactory.create($scope.equipe);
      $location.path('/equipe-list');
    };
  }]);

app.controller('FeriasListCtrl', ['$scope', 'FeriassFactory', 'FeriasFactory', '$location',
  function ($scope, FeriassFactory, FeriasFactory, $location) {

    /* callback for ng-click 'editFerias': */
    $scope.editFerias = function (feriasId) {
      // verificar
      $location.path('/ferias-detail/' + feriasId);
    };

    /* callback for ng-click 'deleteFerias': */
    $scope.deleteFerias = function (feriasId) {
      FeriasFactory.delete({ id: feriasId }).$promise
        .then(function (res) {
          $scope.feriass = FeriassFactory.query();
        })
        .catch(function (err) {
          alert("Falha ao deletar Ferias!!!");
        });
    };

    /* callback for ng-click 'createFerias': */
    $scope.createNewFerias = function () {
      $location.path('/ferias-creation');
    };

    $scope.feriass = FeriassFactory.query();
  }]);

app.controller('FeriasDetailCtrl', ['$scope', '$routeParams', 'FeriasFactory', 'FuncionariosFactory', '$location',
  function ($scope, $routeParams, FeriasFactory, FuncionariosFactory, $location) {

    $scope.funcionarios = FuncionariosFactory.query();
    /* callback for ng-click 'updateFerias': */
    $scope.updateFerias = function () {
      FeriasFactory.update($scope.ferias);
      $location.path('ferias-list');
    };

    /* callback for ng-click 'cancel': */
    $scope.cancel = function () {
      $location.path('/ferias-list');
    };

    $scope.ferias = FeriasFactory.show({ id: $routeParams.id });
  }]);

app.controller('FeriasCreationCtrl', ['$scope', 'FeriassFactory', 'FuncionariosFactory', '$location',
  function ($scope, FeriassFactory, FuncionariosFactory, $location) {

    $scope.funcionarios = FuncionariosFactory.query();
    /* callback for ng-click 'createNewFerias': */
    $scope.createNewFerias = function () {
      FeriassFactory.create($scope.ferias);
      $location.path('/ferias-list');
    };
  }]);

app.controller('LoginCtrl', ['$scope', 'LoginFactory', '$location',
  function ($scope, LoginFactory, $location) {
    
    console.log(this.window.localStorage);
    $scope.submit = function () {
      console.log("teste");
      console.log(window.localStorage);
      // LoginFactory.create($scope.signin);
      this.http.post('/login', $scope.signin)
        .success(function (response) {
          // login successful if there's a token in the response
          if (response.token) {
            // store username and token in local storage to keep user logged in between page refreshes
            window.localStorage.setItem({ username: signin.email, token: response.token });
            
            // add jwt token to auth header for all requests made by the $http service
            this.http.defaults.headers.common.Authorization = 'Bearer ' + response.token;
            
            // execute callback with true to indicate successful login
            callback(true);
          } else {
            // execute callback with false to indicate failed login
            callback(false);
          }
          console.log(window.localStorage);
          // $location.path('/signin-list');
        });
      };
      /* callback for ng-click 'createNewFerias': */
      // $scope.createNewFerias = function () {
      //   FeriassFactory.create($scope.ferias);
      //   $location.path('/ferias-list');
      // };
    }]);
