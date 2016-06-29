(function () {
  'use strict';

/*********************/
  angular
    .module('ciidept.services', ['ngResource'])
    .constant('BaseUrl', 'http://www.ciidept.edu.ar/api')
    .factory('Eventos',Eventos);


 function Eventos($resource, BaseUrl)
  {
    return $resource(BaseUrl + '/eventos', //la url donde queremos consumir
        {}, //aquí podemos pasar variables que queramos pasar a la consulta
        //a la función get le decimos el método, y, si es un array lo que devuelve
        //ponemos isArray en true
        { get: { method: 'GET', isArray: true }
    });
  }

})();
