mainApp.controller('planillaLiqCtrl', function ($scope) {
    var todos = $scope.todos = Todo.$query();
    $scope.message = "Planilla de Liquidacion del dia";
});
