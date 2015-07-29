mainApp.controller('listaEmpAdCtrl', function ($scope) {
    var todos = $scope.todos = Todo.$query();
    $scope.message = "Lista de Empleados";
});