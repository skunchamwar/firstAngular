var sampleModule = angular.module('sampleModule', []);

sampleModule.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/view1',{
            templateUrl: 'view1.html',
            controller: 'SimpleController',
        }).when('/view2',{
            templateUrl: 'view2.html',
            controller: 'SimpleController'
        }).otherwise({ redirectTo: '/view1' });
}]);
sampleModule.controller('SimpleController', function SimpleController($scope) {
    $scope.friends = [
        { name: 'Sandeep', city: 'London' },
        { name: 'Neha', city: 'Bristol' },
        { name: 'Amey', city: 'Pune' }
    ];

    $scope.addFriend = function () {
        $scope.friends.push({
            name: $scope.newFriend.name,
            city: $scope.newFriend.city
        });
    };
});