mainApp.controller('planillaLiqPendCtrl', function ($scope) {
    var todos = $scope.todos = Todo.$query();
    $scope.message = "Planillas de Liquidacion Pendientes:";
});