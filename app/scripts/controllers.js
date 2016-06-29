(function () {
  'use strict';

  angular
    .module('ciidept.controllers', ['ciidept.services','ngLocale'])
    .controller('HomeCtrl',  HomeCtrl);


  function HomeCtrl($scope, Eventos, $http){


		$scope.eventos1 = Eventos.query();
        $scope.eventos1.$promise.then(function(res){
          $scope.eventos = res;
          console.log($scope.eventos);
        });
  }
})();
 