(function () {

    let app = angular.module('specstab', [])
    app.directive("specsTab", function () {
        return {
            restrict: 'E',
            temlateUrl: 'partials/specs-tab.html',
            controller: function(){
                console.log("specs tab")
            }
        }
    })
})();