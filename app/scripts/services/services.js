'use strict';

var services = angular.module('assignmentApp.services', ['ngResource']);

var baseUrl = 'http://localhost:8080';

services.factory('SigninsFactory', function ($resource) {
  return $resource(baseUrl + '/signins', {}, {
    query: { method: 'GET', isArray: true },
    create: { method: 'POST' }
  });
});

services.factory('SigninFactory', function ($resource) {
  return $resource(baseUrl + '/signins/:id', {}, {
    show: { method: 'GET' },
    update: { method: 'POST', params: { id: '@id' } },
    delete: { method: 'DELETE', params: { id: '@id' } }
  });
});

services.factory('EquipesFactory', function ($resource) {
  return $resource(baseUrl + '/equipes', {}, {
    query: { method: 'GET', isArray: true },
    create: { method: 'POST' }
  });
});

services.factory('EquipeFactory', function ($resource) {
  return $resource(baseUrl + '/equipes/:id', {}, {
    show: { method: 'GET' },
    update: { method: 'POST', params: { id: '@id' } },
    delete: { method: 'DELETE', params: { id: '@id' } }
  });
});

services.factory('FuncionariosFactory', function ($resource) {
  return $resource(baseUrl + '/funcionarios', {}, {
    query: { method: 'GET', isArray: true },
    create: { method: 'POST' }
  });
});

services.factory('FuncionarioFactory', function ($resource) {
  return $resource(baseUrl + '/funcionarios/:id', {}, {
    show: { method: 'GET' },
    update: { method: 'POST', params: { id: '@id' } },
    delete: { method: 'DELETE', params: { id: '@id' } }
  });
});

services.factory('FeriassFactory', function ($resource) {
  return $resource(baseUrl + '/ferias', {}, {
    query: { method: 'GET', isArray: true },
    create: { method: 'POST' }
  });
});

services.factory('FeriasFactory', function ($resource) {
  return $resource(baseUrl + '/ferias/:id', {}, {
    show: { method: 'GET' },
    update: { method: 'POST', params: { id: '@id' } },
    delete: { method: 'DELETE', params: { id: '@id' } }
  });
});

services.factory('LoginFactory', function ($resource) {
  return $resource(baseUrl + '/login', {}, {
    create: { method: 'POST', isArray: true }
  });
});