mainApp.controller('reporteSalProdFCtrl', function ($scope) {
    var todos = $scope.todos = Todo.$query();
    $scope.message = "Reporte de Planillas de Salida por fecha";
});
