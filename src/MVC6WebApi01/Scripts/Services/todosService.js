(function () {
    'use strict';

    var todosServices = angular.module('todosServices', ['ngResource']);

    todosServices.factory('Todos', ['$resource',
      function ($resource) {
          return $resource('/api/Todos/', {}, {
              query: { method: 'GET', params: {}, isArray: true }
          });
      }]);
})();