(function() {
    "use strict";
    var app = angular.module("AdministradordeTareas",["ui.router"]);
    
    app.config(["$stateProvider","$urlRouterProvider",
               function($stateProvider, $urlRouterProvider){
                   
                   $stateProvider
                   .state("inicio",{
                          URL:"/",
                          templateUrl: "paginas/bienvenidos.html"
                       })
                   .state("tareas",{
                          URL:"/tareas",
                          templateUrl: "paginas/tareas.html"
                       })
                   .state("nuevatarea",{
                          URL:"/nuevatarea",
                          templateUrl: "paginas/nuevatarea.html"
                       })
                   .state("estadisticas",{
                          URL:"/estadisticas",
                          templateUrl: "paginas/estadisticas.html"
                       })
                   
                   
               }])
    
})();