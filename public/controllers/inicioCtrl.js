mainApp.controller('inicioCtrl', function ($scope) {
    var todos = $scope.todos = Todo.$query();
    $scope.message = "Bienvenido al Sistema de Salidas de Productos";
});
