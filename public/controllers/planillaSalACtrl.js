mainApp.controller('planillaSalACtrl', function ($scope) {
    var todos = $scope.todos = Todo.$query();
    $scope.message = "Planillas Revisadas del dia:";
});