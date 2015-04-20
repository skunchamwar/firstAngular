angular
    .module('sampleModule', [
    'ngRoute',
    ])
    .config(function ($routeProvider) {
    $routeProvider
        .when('/view1',{
            templateUrl: 'view1.html',
            // controller: 'SimpleController',
        }).when('/view2',{
            templateUrl: 'view2.html',
            // controller: 'SimpleController'
        }).otherwise({ redirectTo: '/view1' });
});

// angular.module('sampleModule')
// .controller('SimpleController',[
//     '$scope',
//     function SimpleController($scope) {
//         $scope.friends = [
//             { name: 'Sandeep', city: 'London' },
//             { name: 'Neha', city: 'Bristol' },
//             { name: 'Amey', city: 'Pune' }
//         ];

//         $scope.addFriend = function () {
//             $scope.friends.push({
//                 name: $scope.newFriend.name,
//                 city: $scope.newFriend.city
//             });
//         };
//     });