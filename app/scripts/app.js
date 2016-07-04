(function () {
  'use strict';


  function config ($routeProvider, $locationProvider) {
   
 $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl: 'templates/home.tpl.html',
        controller: 'HomeCtrl'
      })

      .when('/evento/:id', {
        templateUrl: 'templates/home.tpl.html',
        controller: 'EventoCtrl'
      })

      .when('/listado-eventos', {
        templateUrl: 'templates/listado-eventos.tpl.html',
        controller: 'HomeCtrl'
      })

      .otherwise({ reditrectTo : '/' });

  } 



  angular
    .module('ciidept', ['ngRoute','ciidept.controllers','ui.bootstrap', 'ngSanitize'])
    .config(config);

   

})();

