(function () {
  'use strict';

  angular
    .module('ciidept.controllers', ['ciidept.services','ngLocale'])
    .controller('HomeCtrl',  HomeCtrl)
    .controller('EventoCtrl',  EventoCtrl);
    
angular
  .module('wizard.controllers', [])
  .controller('WizardCtrl',  WizardCtrl);

  function WizardCtrl($scope,$http) {

  $scope.template = {'nav': 'templates/menu-nav.tpl.html',
                    'step1': 'templates/listado-eventos.tpl.html',
                    'step2': 'templates/detalles.tpl.html',
                    'step3': 'templates/plan-pagos.tpl.html',
                    'step4': 'templates/inscripcion.tpl.html'};
  }

  function HomeCtrl($scope, Eventos, EventosxDia, NoticiasCiidept, $http){

    $scope.dia=EventosxDia.query();
          
          $scope.dia.$promise.then(function(res){
          $scope.dias = res;
          console.log($scope.dias.length);

        });

		$scope.eventos1 = Eventos.query();
          $scope.eventos1.$promise.then(function(res){
          $scope.eventos = res;
          console.log($scope.eventos);
        });

    $scope.noticia = NoticiasCiidept.query();
          
          $scope.noticia.$promise.then(function(res){
          $scope.noticias = res;
          console.log($scope.noticias);
        });

/*          console.log($scope.eventos1);
*/  }

  function EventoCtrl($scope, $routeParams){
    $scope.id=$routeParams.id;
    console.log($scope.id);
  }
})();
 