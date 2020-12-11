(function () {
    let app = angular.module('product', []);

    app.controller('Product', ['$scope', '$state', '$stateParams', '$http', function ($scope, $state, $stateParams, $http) {
        let product = this;
        product.detail = {}
        product._id = $stateParams._id
        $http.get("./dummy/products.json").then(function (data) {
            product.products = data.data.gems;
            product.detail = product.products.find(p => p._id === product._id);
            
        })
    }])

}());