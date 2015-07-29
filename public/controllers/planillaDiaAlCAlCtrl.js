mainApp.controller('planillaDiaAlCAlCtrl', function ($scope, Todo) {
    var todos = $scope.todos = Todo.$query();
    $scope.message = "Lista de Planilla de Salidas Almacenes del dia";
});