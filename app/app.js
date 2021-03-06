(function() {
    "use strict";
    var app = angular.module("AdministradordeTareas",
                             ["ui.router",
                              "common",
                              "tareasResourceMock",
                              "usuariosResourceMock",
                              "puestosResourceMock",
                              "avatarsResourceMock"]);
    
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
                            .state("usuarios.usuario",{
                            URL: "/usuario/:usuarioId",
                            templateUrl:"paginas/usuario.html",
                            controller:"usuarioCtrl as vm",
                            resolve : {
                                    usuariosResource: "usuariosResource",
                                    puestosResource: "puestosResource",
                                    usuario : function(usuariosResource, $stateParams){
                                        var usuarioId = $stateParams.usuarioId;
                                        return usuariosResource.query({usuarioId: usuarioId}).$promise;
                                            },

                                    puestos: function(puestosResource){
                                        return puestosResource.query().$promise;
                                        }
                                    }
                            })
                               .state("usuarios.usuario.avatars",{
                                    url: "/avatars",
                                    templateUrl: "paginas/avatars.html",
                                    controller: "avatarsCtrl as vm",
                                    resolve: {
                                        avatarsResource : "avatarsResource",
                                        usuariosResource: "usuariosResource",
                                        avatars: function(avatarsResource){
                                            return avatarsResource.query().$promise;
                                            
                                        },
                                        usuario: function(usuariosResource, $stateParams){
                                            var usuarioId = $stateParams.usuarioId;
                                            return usuariosResource.query({usuarioId: usuarioId}).$promise;
                                        }
                                    }
                               })
                   .state("estadisticas",{
                        URL:"/estadisticas",
                        templateUrl: "paginas/estadisticas.html"
                       })
                   
                   
               }])
    
})();