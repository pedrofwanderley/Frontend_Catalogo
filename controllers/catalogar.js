var myApp = angular.module("myApp", []);

myApp.controller('catalogoController', ['$scope', '$http', function($scope, $http) {
    $scope.catalogar = function(obj){
        var obj = {};
        obj.codigo = $scope.codigo;
        obj.produto = $scope.produto;
        obj.data = $scope.data;
        obj.armazenamento = $scope.armazenamento;
        obj.categoria = $scope.categoria;
        obj.setor = $scope.setor;

        $http({
            url: '',
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            data: { "codigo": obj.codigo,
            "produto": obj.produto,
            "data": obj.data,
            "armazenamento": obj.armazenamento,
            "categoria":obj.categoria,
            "setor":obj.setor 
                }
               
           
        })
        .then(function(response) {
                window.alert('item catalogado');
        }, 
        function(response) { 
                window.alert('Deu ruim');
        });
      
      }
   
   
}]);