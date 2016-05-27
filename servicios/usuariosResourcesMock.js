(function(){
    "use strict";
    
    var app = angular
    .module("usuariosResourceMock",
           ["ngMockE2E"]);
    app.run(function($httpBackend){
        var usuarios =[{
            "usuarioId": "1",
            "nombre": "Steve Rogers",
            "puestoId": "2",
            "imagenpequena": "imagenes/CaptainAmerica32x32.png",
            "imagengrande": "imagenes/CaptainAmerica128x128.png"
        },
         {
            "usuarioId": "2",
            "nombre": "Loki",
            "puestoId": "2",
            "imagenpequena": "imagenes/CaptainAmerica32x32.png",
            "imagengrande": "imagenes/CaptainAmerica128x128.png"
        }];
        
        var usuariosUrl = "/api/usuarios";
        
        $httpBackend.whenGET(usuariosUrl).respond(usuarios);
        $httpBackend.whenGET(/paginas/).passThrough();
        
    })
}());