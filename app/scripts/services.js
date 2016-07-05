(function () {
  'use strict';

/*********************/
  angular
    .module('ciidept.services', ['ngResource'])
    .constant('BaseUrl', 'http://www.ciidept.edu.ar/api')
    .factory('Eventos',Eventos)
    .factory('EventosxDia',EventosxDia)
    .factory('NoticiasCiidept', NoticiasCiidept)
    .factory('ProyectosCiidept', ProyectosCiidept)
    .factory('ImagenesNoticias', ImagenesNoticias);

 function Eventos($resource, BaseUrl)
  {
    return $resource(BaseUrl + '/eventos', //la url donde queremos consumir
        {}, //aquí podemos pasar variables que queramos pasar a la consulta
        //a la función get le decimos el método, y, si es un array lo que devuelve
        //ponemos isArray en true
        { get: { method: 'GET', isArray: true }
    });
  }


  function EventosxDia($resource, BaseUrl)
  {
    return $resource(BaseUrl + '/eventos_dia', //la url donde queremos consumir
        {}, //aquí podemos pasar variables que queramos pasar a la consulta
        //a la función get le decimos el método, y, si es un array lo que devuelve
        //ponemos isArray en true
        { get: { method: 'GET', isArray: true }
    });
  }

  function NoticiasCiidept($resource, BaseUrl)
  {
    return $resource(BaseUrl + '/noticias', //la url donde queremos consumir
        {}, //aquí podemos pasar variables que queramos pasar a la consulta
        //a la función get le decimos el método, y, si es un array lo que devuelve
        //ponemos isArray en true
        { get: { method: 'GET', isArray: true }
    });
  }

   function ImagenesNoticias($resource, BaseUrl)
  {
    return $resource(BaseUrl + '/imagenes', //la url donde queremos consumir
        {}, //aquí podemos pasar variables que queramos pasar a la consulta
        //a la función get le decimos el método, y, si es un array lo que devuelve
        //ponemos isArray en true
        { get: { method: 'GET', isArray: true }
    });
  }

    function ProyectosCiidept($resource, BaseUrl)
  {
    return $resource(BaseUrl + '/proyectos', //la url donde queremos consumir
        {}, //aquí podemos pasar variables que queramos pasar a la consulta
        //a la función get le decimos el método, y, si es un array lo que devuelve
        //ponemos isArray en true
        { get: { method: 'GET', isArray: true }
    });
  }

})();
