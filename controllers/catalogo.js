var myApp = angular.module("myApp", []);

myApp.controller('catalogoController', ['$scope', '$http', function($scope, $http) {

    $scope.catalogo = [];
    
    $scope.getCatalogo = function(){
        $http.get("")
        .then(function(response){
            for (let index = 0; index < response.data.length; index++) {
                const element = response.data[index];
                    $scope.catalogo[index] = element;
                
                
            };
            
        });
    }
   
}]);