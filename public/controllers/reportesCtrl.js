mainApp.controller('reportesCtrl', function ($scope) {
    var todos = $scope.todos = Todo.$query();
    $scope.message = "Reportes";
});