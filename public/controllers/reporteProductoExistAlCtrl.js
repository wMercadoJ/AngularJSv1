mainApp.controller('reporteProductoExistAlCtrl', function ($scope) {
    var todos = $scope.todos = Todo.$query();
    $scope.message = "Reporte Productos fisicos existentes en alamcenes";
});