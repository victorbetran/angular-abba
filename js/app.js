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
      id: "",
      activated: true,
      description: "",
      flows:[{
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

      var flows = this.abTesting.flows;
      for (var i = 0; i < flows.length; i++) {

        console.log('Validations - Site: ' + flows[i].validations.site);
        console.log('Validations - Destination: ' + flows[i].validations.destination);
        console.log('Validations - Flow: ' + flows[i].validations.flow);
        console.log('Validations - StartDate: ' + flows[i].validations.startDate);
        console.log('Validations - EndDate: ' + flows[i].validations.endDate);
        var ranges = flows[i].ranges;
        for (var j = 0; j < flows[i].ranges.length; j++) {
          console.log('Ranges - Value: ' + ranges[j].value);
          console.log('Ranges - StartRange: ' + ranges[j].startRange);
          console.log('Ranges - EndRange: ' + ranges[j].endRange);
        };
      };

    };

    // La idea es que en el edit se llene el formulario, no está funcionando
    // Puede ser un tema de Scope o de que el Controller está en divs hermanos y no en el mismo
    this.editAb = function(ab) {
      this.abTesting = ab;
      console.log(this.abTesting);
    };

    this.addFlow = function() {
      this.abTesting.flows.push({
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
      });
    };

    this.addRange = function(flow) {
      flow.ranges.push({
        value: "DEFAULT",
        startRange: 0,
        endRange: 0
      });
    };


  }]);

