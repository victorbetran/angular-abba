var abbaApp = angular.module('abbaApp', []);

abbaApp.controller('ABListCtrl', function ($scope) {
  $scope.abs = abTestings;

  $scope.selectedAb = abTestings[3];
});

// abbaApp.controller('ABListCtrl', ['$scope', '$http',
//   function ($scope, $http) {
//     $http.get('files/abs.json').success(function(data) {
//       $scope.abs = data;
//     }).
//     error(function(data) {
//       console.log("ERROR BUSCANDO EL JSON")
//     });
//   }]);

var abTestings = [
        {
            "id":"sort-order",
            "activated": true,
            "description" : "Se usan o no los ordenes de H-SORT",
            "flows":[
                {
                    "activated": true,
                    "ranges": [
                        {
                            "startRange" : 1,
                            "endRange" : 100,
                            "value" : "true"
                        }
                    ]
                }
            ]
        },
        {
            "id":"providersBlacklist",
            "activated": true,
            "description":"Backlisteo de proveedores",
            "flows":[
                {
                    "activated": true,
                    "tracking": {
                        "activated": false
                    },
                    "ranges": [
                        {
                            "startRange" : 1,
                            "endRange" : 100,
                            "value" : ""
                        }
                    ]
                }
            ]
        },
        {
            "id":"prioritizeDirectContract",
            "activated": true,
            "description":"Activa o no la priorizacion por contrato",
            "flows":[
                {
                    "activated": true,
                    "validations" : {
                        "destination":"6574"
                    },
                    "ranges": [
                        {
                            "startRange" : 1,
                            "endRange" : 50,
                            "value" : "OFF"
                        },
                        {
                            "startRange" : 51,
                            "endRange" : 100,
                            "value" : "ON"
                        }
                    ]
                }
            ]
        },
        {
            "id":"interactiveMapSource",
            "activated": true,
            "description":"Define la fuente de tiles de los mapas",
            "flows":[
                {
                    "activated": true,
                    "validations": {
                        "site": "!co,!ar,!mx,!br"
                    },
                    "ranges": [
                        {
                            "startRange" : 0,
                            "endRange" : 0,
                            "value" : "GOOGLE"
                        },
                        {
                            "startRange" : 1,
                            "endRange" : 99,
                            "value" : "BING"
                        },
                        {
                            "startRange" : 0,
                            "endRange" : 0,
                            "value" : "CM"
                        },
                        {
                            "startRange" : 100,
                            "endRange" : 100,
                            "value" : "OSM"
                        }
                    ]
                },
                {
                    "activated": true,
                    "validations": {
                        "destination": "982",
                        "site": "co",
                        "flow":"landing"
                    },
                    "ranges": [
                        {
                            "startRange" : 1,
                            "endRange" : 50,
                            "value" : "GOOGLE"
                        },
                        {
                            "startRange" : 0,
                            "endRange" : 0,
                            "value" : "BING"
                        },
                        {
                            "startRange" : 0,
                            "endRange" : 0,
                            "value" : "CM"
                        },
                        {
                            "startRange" : 51,
                            "endRange" : 100,
                            "value" : "OSM"
                        }
                    ]
                },
                {
                    "activated": true,
                    "validations": {
                        "destination": "982",
                        "site": "ar"
                    },
                    "ranges": [
                        {
                            "startRange" : 1,
                            "endRange" : 99,
                            "value" : "GOOGLE"
                        },
                        {
                            "startRange" : 0,
                            "endRange" : 0,
                            "value" : "BING"
                        },
                        {
                            "startRange" : 0,
                            "endRange" : 0,
                            "value" : "CM"
                        },
                        {
                            "startRange" : 100,
                            "endRange" : 100,
                            "value" : "OSM"
                        }
                    ]
                },
                {
                    "activated": false,
                    "validations": {
                        "destination": "982",
                        "site": "mx"
                    },
                    "ranges": [
                        {
                            "startRange" : 1,
                            "endRange" : 50,
                            "value" : "GOOGLE"
                        },
                        {
                            "startRange" : 0,
                            "endRange" : 0,
                            "value" : "BING"
                        },
                        {
                            "startRange" : 0,
                            "endRange" : 0,
                            "value" : "CM"
                        },
                        {
                            "startRange" : 51,
                            "endRange" : 100,
                            "value" : "OSM"
                        }
                    ]
                },
                {
                    "activated": true,
                    "validations": {
                        "site": "br"
                    },
                    "ranges": [
                        {
                            "startRange" : 1,
                            "endRange" : 99,
                            "value" : "GOOGLE"
                        },
                        {
                            "startRange" : 0,
                            "endRange" : 0,
                            "value" : "BING"
                        },
                        {
                            "startRange" : 0,
                            "endRange" : 0,
                            "value" : "CM"
                        },
                        {
                            "startRange" : 100,
                            "endRange" : 100,
                            "value" : "OSM"
                        }
                    ]
                }
            ]
        },
        {
            "id":"staticMapSource",
            "activated": true,
            "description":"Define la fuente de tiles de los mapas estaticos",
            "flows":[
                {
                    "activated": true,
                    "ranges": [
                        {
                            "startRange" : 1,
                            "endRange" : 100,
                            "value" : "GOOGLE"
                        },
                        {
                            "startRange" : 0,
                            "endRange" : 0,
                            "value" : "BING"
                        },
                        {
                            "startRange" : 0,
                            "endRange" : 0,
                            "value" : "CM"
                        },
                        {
                            "startRange" : 0,
                            "endRange" : 0,
                            "value" : "OSM"
                        }
                    ]
                }
            ]
        },
        {
            "id":"satelliteMapSource",
            "activated": false,
            "description":"Define la fuente de tiles de los mapas de satelite",
            "flows":[
                {
                    "activated": true,
                    "validations": {
                        "site": "!ar,!br"
                    },
                    "ranges": [
                        {
                            "startRange" : 0,
                            "endRange" : 0,
                            "value" : "GOOGLE"
                        },
                        {
                            "startRange" : 1,
                            "endRange" : 100,
                            "value" : "BING"
                        }
                    ]
                },
                {
                    "activated": false,
                    "validations": {
                        "site": "ar"
                    },
                    "ranges": [
                        {
                            "startRange" : 1,
                            "endRange" : 100,
                            "value" : "GOOGLE"
                        },
                        {
                            "startRange" : 0,
                            "endRange" : 0,
                            "value" : "BING"
                        }
                    ]
                },
                {
                    "activated": true,
                    "validations": {
                        "site": "br"
                    },
                    "ranges": [
                        {
                            "startRange" : 1,
                            "endRange" : 100,
                            "value" : "GOOGLE"
                        },
                        {
                            "startRange" : 0,
                            "endRange" : 0,
                            "value" : "BING"
                        }
                    ]
                }
            ]
        },
        {
            "id":"directContractProvidersOnlyCL",
            "activated": true,
            "description":"Venta por contrato directo",
            "flows":[
                {
                    "activated": true,
                    "validations" : {
                        "destination":"6624"
                    },
                    "ranges": [
                        {
                            "startRange" : 1,
                            "endRange" : 50,
                            "value" : "OFF"
                        },
                        {
                            "startRange" : 51,
                            "endRange" : 100,
                            "value" : "ON"
                        }
                    ]
                }
            ]
        },
        {
            "id":"hotel-results",
            "activated": true,
            "description" : "Row de resultados",
            "flows":[
                {
                    "activated": true,
                    "ranges": [
                        {
                            "startRange" : 1,
                            "endRange" : 80,
                            "value" : "v1-grid-map"
                        },
                        {
                            "startRange" : 81,
                            "endRange" : 100,
                            "value" : "v2-grid-map"
                        }
                    ]
                }
            ]
        },
        {
            "id":"captcha",
            "activated": true,
            "description":"Para prender y apagar la funcionalidad del Captcha",
            "flows":[
                {
                    "activated": true,
                    "ranges": [
                        {
                            "startRange" : 1,
                            "endRange" : 100,
                            "value" : "ON"
                        }
                    ]
                }
            ]
        },
        {
            "id":"cached-gmap",
            "activated": true,
            "description" : "Se muestra los mapas estaticos cacheados o se piden directo a google",
            "flows":[
                {
                    "activated": true,
                    "ranges": [
                        {
                            "startRange" : 0,
                            "endRange" : 0,
                            "value" : "OFF"
                        },
                        {
                            "startRange" : 1,
                            "endRange" : 100,
                            "value" : "ON"
                        }
                    ]
                }
            ]
        },
        {
            "id":"front-monitor",
            "activated": true,
            "description" : "Indica cuando se prende el recolector de errores js",
            "flows":[
                {
                    "activated": true,
                    "ranges": [
                        {
                            "startRange" : 1,
                            "endRange" : 100,
                            "value" : "OFF"
                        },
                        {
                            "startRange" : 0,
                            "endRange" : 0,
                            "value" : "ON"
                        }
                    ]
                }
            ]
        },
        {
            "id":"localStorageUsage",
            "activated": true,
            "description" : "Prendido, permite el uso de localStorage del browser",
            "flows":[
                {
                    "activated": true,
                    "validations" : {
                        "site": "!br"
                    },
                    "ranges": [
                        {
                            "startRange" : 0,
                            "endRange" : 0,
                            "value" : "ON"
                        },
                        {
                            "startRange" : 1,
                            "endRange" : 100,
                            "value" : "OFF"
                        }
                    ]
                }
            ]
        },
        {
            "id":"currencyRateFee",
            "activated": true,
            "description" : "USD para Argentina",
            "flows":[
                {
                    "activated": true,
                    "validations" : {
                        "site":"ar",
                        "flow":"landing"
                    },
                    "ranges": [
                        {
                            "startRange" : 0,
                            "endRange" : 0,
                            "value" : "ON"
                        },
                        {
                            "startRange" : 1,
                            "endRange" : 100,
                            "value" : "OFF"
                        }
                    ]
                },
                {
                    "activated": true,
                    "validations" : {
                        "site":"ar",
                        "flow":"shopping"
                    },
                    "ranges": [
                        {
                            "startRange" : 1,
                            "endRange" : 50,
                            "value" : "ON"
                        },
                        {
                            "startRange" : 51,
                            "endRange" : 100,
                            "value" : "OFF"
                        }
                    ]
                }
            ]
        },
        {
            "id":"landingNotTracked",
            "activated": true,
            "description" : "Para el sitio de Colombia, landing no muestra precios trackeados",
            "flows":[
                {
                    "activated": true,
                    "validations": {
                        "site" : "co"
                    },
                    "ranges": [
                        {
                            "startRange" : 1,
                            "endRange" : 25,
                            "value" : "ON"
                        },
                        {
                            "startRange" : 26,
                            "endRange" : 100,
                            "value" : "OFF"
                        }
                    ]
                }
            ]
        },
        {
            "id" : "v1BlackTitle",
            "description" : "En caso de estar prendido, el titulo del cluster de Resultados V1 se muestra con un fondo negro",
            "activated": true,
            "flows":[
                {
                    "activated": true,
                    "validations" : {
                        "startDate" : "2014-05-05 00:00:00",
                        "endDate" : "2014-05-12 00:00:00"
                    },
                    "ranges": [
                        {
                            "startRange" : 1,
                            "endRange" : 25,
                            "value" : "ON"
                        },
                        {
                            "startRange" : 26,
                            "endRange" : 100,
                            "value" : "OFF"
                        }
                    ]
                }
            ]
        },
        {
            "id" : "serviceCharge",
            "description" : "En caso de estar prendido, se envía el param a HSM rulesAbt=ServiceCharge:zeroFee",
            "activated": true,
            "flows":[
                {
                    "activated": true,
                    "validations" : {
                        "startDate" : "2014-04-28 00:00:00",
                        "endDate" : "2014-05-13 00:00:00",
                        "site" : "ar"
                    },
                    "ranges": [
                        {
                            "startRange" : 1,
                            "endRange" : 25,
                            "value" : "ON"
                        },
                        {
                            "startRange" : 26,
                            "endRange" : 100,
                            "value" : "OFF"
                        }
                    ]
                }
            ]
        },
        {
            "id":"preferredHotels",
            "activated": true,
            "description":"Indica si el hotel es preferido o no segun el servicio de sort",
            "flows":[
                {
                    "activated": true,
                    "ranges": [
                        {
                            "startRange" : 1,
                            "endRange" : 50,
                            "value" : "OFF"
                        },
                        {
                            "startRange" : 51,
                            "endRange" : 100,
                            "value" : "ON"
                        }
                    ]
                }
            ]
        },
        {
            "id":"travellerAssistance",
            "activated": true,
            "description" : "Cartel Asistencia al viajero en destinos internacionales",
            "flows":[
                {
                    "activated": true,
                    "validations" : {
                        "site" : "ar"
                    },
                    "ranges": [
                        {
                            "startRange" : 1,
                            "endRange" : 50,
                            "value" : "ON"
                        },
                        {
                            "startRange" : 51,
                            "endRange" : 100,
                            "value" : "OFF"
                        }
                    ]
                }
            ]
        },
        {
            "id":"collapsedFilters",
            "activated": true,
            "description":"Indica si todos los filtros, menos Estrellas, Tipo de hotel, Regímenes, Rango de precios aparezcan colapsados.",
            "flows":[
                {
                    "activated": true,
                    "validations" : {
                        "endDate" : "2014-06-25 00:00:00"
                    },
                    "ranges": [
                        {
                            "startRange" : 1,
                            "endRange" : 50,
                            "value" : "OFF"
                        },
                        {
                            "startRange" : 51,
                            "endRange" : 100,
                            "value" : "ON"
                        }
                    ]
                }
            ]
        },
        {
            "id":"newOrderFilters",
            "activated": true,
            "description":"Indica si cambiamos el orden de la columna donde figuran los filtros.",
            "flows":[
                {
                    "activated": true,
                    "validations" : {
                        "endDate" : "2014-07-09 00:00:00"
                    },
                    "ranges": [
                        {
                            "startRange" : 1,
                            "endRange" : 50,
                            "value" : "OFF"
                        },
                        {
                            "startRange" : 51,
                            "endRange" : 100,
                            "value" : "ON"
                        }
                    ]
                }
            ]
        }
    ];
