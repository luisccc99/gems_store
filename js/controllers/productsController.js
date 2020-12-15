(function () {

    let app = angular.module('products', []);

    app.controller('Products', ['$scope', '$state', '$http', function ($scope, $state, $http) {
        let store = this;
        
        store.products = []
        store.reviews = []
        store.sumStars = 0
        store.avgStars = 0
        store.best = []

        $http.get("./dummy/products.json").then(function (data) {
            store.products = data.data.gems;
            store.best = store.products.filter(product => product.sales > 10);
        })

        store.go = function (_id) {
            $state.go('app.product', {
                _id: _id
            });
        }
    }])
}());