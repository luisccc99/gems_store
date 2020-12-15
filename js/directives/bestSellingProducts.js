(function () {

    let app = angular.module('bestprod', [])
    
    app.directive("bestSelling", function () {
        return {
            restrict: 'E',
            templateUrl: 'partials/products/best-selling.html',
            controller: function(){
                console.log("best selling products")
            }
        }
    })
})();