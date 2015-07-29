mainApp.controller('reporteProductoGralCtrl', function ($scope) {
    var todos = $scope.todos = Todo.$query();
    $scope.message = "Reporte Productos en gral";
});