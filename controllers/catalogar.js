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
            url: 'https://calm-retreat-97213.herokuapp.com/catalogo/itens',
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
      $scope.catalogo = [];
    
      $scope.getCatalogo = function(){
          $http.get("https://calm-retreat-97213.herokuapp.com/catalogo/itens")
          .then(function(response){
              for (let index = 0; index < response.data.length; index++) {
                  const element = response.data[index];
                      $scope.catalogo[index] = element;
                  
                  
              };
              
          });
      }
      $scope.deletar = function(obj){
        var obj = {};
        obj.codigo = $scope.codigo;
      

        $http({
            url: 'https://calm-retreat-97213.herokuapp.com/catalogo/itens/' + obj.codigo,
            method: "DELETE",
            headers: {'Content-Type': 'application/json'},
               
      })
        .then(function(response) {
                window.alert('item deletado');
        }, 
        function(response) { 
                window.alert('Deu ruim');
        });
      
      }
   
   
}]);