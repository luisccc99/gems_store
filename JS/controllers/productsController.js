(function(){

    let app = angular.module('products', []);

    app.controller('Products',['$scope', '$state', '$http', function($scope, $state, $http){
        let store = this;

        store.products = []

        $http.get("./dummy/products.json").then(function(data){
            console.info(data)
            store.products = data
        })
    }])
}());