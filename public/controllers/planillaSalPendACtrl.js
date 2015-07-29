mainApp.controller('planillaSalPendACtrl', function ($scope) {
    var todos = $scope.todos = Todo.$query();
    $scope.message = "Planillas Pendientes del dia:";
});