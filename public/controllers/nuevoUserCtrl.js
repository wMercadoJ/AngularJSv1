mainApp.controller('nuevoUserCtrl', function ($scope) {
    var todos = $scope.todos = Todo.$query();
    $scope.message = "Crear nuevo Usuario:";
});