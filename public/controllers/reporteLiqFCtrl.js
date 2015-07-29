mainApp.controller('reporteLiqFCtrl', function ($scope) {
    var todos = $scope.todos = Todo.$query();
    $scope.message = "Reporte de Planillas de Liquidacion por fecha";
});
