(function () {
  'use strict';



 
  function config ($routeProvider) {
   
    $routeProvider
      .when('/', {
        templateUrl: 'templates/home.tpl.html',
        controller: 'HomeCtrl'
      })
      .otherwise({ reditrectTo : '/' });

  } 



  angular
    .module('ciidept', ['ngRoute','ciidept.controllers','ui.bootstrap'])
    .config(config);

   

})();

