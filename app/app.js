(function() {
    "use strict";
    var app = angular.module("AdministradordeTareas",
                             ["ui.router",
                              "common",
                              "tareasResourceMock",
                              "usuariosResourceMock"]);
    
    app.config(["$stateProvider","$urlRouterProvider",
               function($stateProvider, $urlRouterProvider){
                   
                   $stateProvider
                   .state("inicio",{
                        URL:"/",
                        templateUrl: "paginas/bienvenidos.html"
                       })
                   .state("tareas",{
                        URL:"/tareas",
                        templateUrl: "paginas/tareas.html",
                        controller: "tareasCtrl as vm"
                       })
                   .state("usuarios",{
                        URL:"/usuarios",
                        templateUrl: "paginas/usuarios.html",
                        controller: "usuariosCtrl as vm"
                       })
                   .state("estadisticas",{
                        URL:"/estadisticas",
                        templateUrl: "paginas/estadisticas.html"
                       })
                   
                   
               }])
    
})();