var abbaApp = angular.module('abbaApp', []);

abbaApp.controller('ABListCtrl', function ($scope) {
  $scope.abs = abTestings;
});

var abTestings = [
    {'name': 'preferredHotels',
     'description': 'Hoteles Preferidos de SORT'},
    {'name': 'travellerAssistance',
     'description': 'Asistencia al viajero'},
    {'name': 'resultVersion',
     'description': 'Versiones de resultados de hoteles'},
    {'name': 'collapsedFilters',
     'description': 'Indica si todos los filtros, menos Estrellas, Tipo de hotel, Regímenes, Rango de precios aparezcan colapsados'}
  ];

// abbaApp.controller('ABListCtrl', ['$scope', '$http',
//   function ($scope, $http) {
//     $http.get('files/abs.json').success(function(data) {
//       $scope.abs = data;
//     }).
//     error(function(data) {
//       console.log("ERROR BUSCANDO EL JSON")
//     });
//   }]);