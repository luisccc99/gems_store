(function () {

    let app = angular.module('descriptab', [])
    
    app.directive("descriptTab", function () {
        return {
            restrict: 'E',
            temlateUrl: 'partials/description-tab.html',
            controller: function(){
                console.log("desctiption tab")
            }
        }
    })
})();