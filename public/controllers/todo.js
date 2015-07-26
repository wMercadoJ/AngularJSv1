'use strict';
 
/** controller */
mainApp.controller('TodoCtrl', function TodoCtrl($scope, $location, Todo, filterFilter, $routeParams ) {
        var todos = $scope.todos = Todo.$query();
});
