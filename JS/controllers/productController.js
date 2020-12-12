(function () {
    let app = angular.module('product', []);

    app.controller('Product', ['$scope', '$state', '$stateParams', '$http', 
    function ($scope, $state, $stateParams, $http) {
        let product = this;

        product.detail = {}
        product._id = $stateParams._id
        product.reviews = []
        product.sumStars = 0
        product.avgStars = 0

        $http.get("./dummy/products.json").then(function (data) {
          
            product.products = data.data.gems

            product.detail = product.products.find(p => p._id === product._id)
            product.reviews = product.detail.reviews
            product.sumStars = product.reviews.map(item => item.stars).reduce((prev, next) => prev + next)
            product.avgStars = product.sumStars / product.products.length

        })
    }])

}());