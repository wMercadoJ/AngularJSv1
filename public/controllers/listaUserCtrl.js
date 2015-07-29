mainApp.controller('listaUserCtrl', function ($scope) {
    var todos = $scope.todos = Todo.$query();
    $scope.message = "Usuarios existentes en Sistema";
});