mainApp.controller('listaEmpleadoCtrl', function ($scope) {
    var todos = $scope.todos = Todo.$query();
    $scope.message = "Empleados existentes en Sistema";
});