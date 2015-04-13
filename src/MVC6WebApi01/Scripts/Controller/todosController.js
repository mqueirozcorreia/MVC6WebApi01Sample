(function () {
    'use strict';

    angular
    .module('app')
    .controller('todosController', todosController);
 
    todosController.$inject = ['$scope', 'Todos'];
 
    function todosController($scope, Todos) {
        $scope.todos = Todos.query();
    }
})();
