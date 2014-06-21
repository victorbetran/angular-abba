var abbaApp = angular.module('abbaApp', [
  'ngRoute'
]);

// Routes Configuration
abbaApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/abs', {
        templateUrl: 'ab-list.html',
        controller: 'ABListCtrl'
      }).
      when('/abs/:abId', {
        templateUrl: 'ab-detail.html',
        controller: 'ABDetailCtrl'
      }).
      otherwise({
        redirectTo: '/abs'
      });
  }]);

// AB List Controller
abbaApp.controller('ABListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('files/abs.json').success(function(data) {
      $scope.abs = data;
    }).
    error(function(data) {
      console.log("Error buscando el JSON de ABs")
    });
  }]);

// AB Detail Controller
abbaApp.controller('ABDetailCtrl', ['$scope', '$http', '$routeParams',
  function($scope, $http, $routeParams) {
    this.abTesting = {
      activated: true,
      validations: {},
      ranges: [{
        value: "ON",
        startRange: 1,
        endRange: 50
      },
      {
        value: "OFF",
        startRange: 51,
        endRange: 100
      }]
    };
    $scope.abId = $routeParams.abId;

    $http.get('files/abs.json').success(function(data) {
      $scope.abs = data;
      $scope.selectedAb = $scope.abs[$scope.abId];
    }).
    error(function(data) {
      console.log("Error buscando el JSON de ABs")
    });


    this.addABTesting = function() {
      console.log('submit addABTesting');
      console.log('Name: ' + this.abTesting.id);
      console.log('Description: ' + this.abTesting.description);
      console.log('Activated?: ' + this.abTesting.activated);

      console.log('Validations - Site: ' + this.abTesting.validations.site);
      console.log('Validations - Destination: ' + this.abTesting.validations.destination);
      console.log('Validations - Flow: ' + this.abTesting.validations.flow);
      console.log('Validations - StartDate: ' + this.abTesting.validations.startDate);
      console.log('Validations - EndDate: ' + this.abTesting.validations.endDate);
      for (var i = 0; i < this.abTesting.ranges.length; i++) {
        console.log('Ranges - Value: ' + this.abTesting.ranges[i].value);
        console.log('Ranges - StartRange: ' + this.abTesting.ranges[i].startRange);
        console.log('Ranges - EndRange: ' + this.abTesting.ranges[i].endRange);
      };

    };

    this.addRange = function() {
      this.abTesting.ranges.push({
        value: "DEFAULT",
        startRange: 0,
        endRange: 0
      });
    };


  }]);

