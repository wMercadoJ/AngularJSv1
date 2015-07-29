mainApp.controller('nuevoEmpleadoCtrl', function ($scope) {
    var todos = $scope.todos = Todo.$query();
    $scope.message = "Crear nuevo empleado:";
});
