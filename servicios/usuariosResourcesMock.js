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
            "imagenPequena" : "imagenes/CaptainAmerica32x32.png",
            "imagengrande": "imagenes/CaptainAmerica128x128.png"
        },
         {
            "usuarioId": "2",
            "nombre": "Thor Odinson",
            "puestoId": "3",
            "imagenPequena": "imagenes/Thor32x32.png",
            "imagengrande": "imagenes/Thor128x128.png"
        },
                      {
            "usuarioId": "3",
            "nombre": "Tony Stark",
            "puestoId": "1",
            "imagenPequena" : "imagenes/IronMan32x32.png",
            "imagengrande": "imagenes/IronMan128x128.png"
        },
         {
            "usuarioId": "4",
            "nombre": "Natalia Alianovna Romanov",
            "puestoId": "2",
            "imagenPequena": "imagenes/BlackWidow32x32.png",
            "imagengrande": "imagenes/BlackWidow128x128.png"
        },
                      {
            "usuarioId": "5",
            "nombre": "Henry Jonathan Hank",
            "puestoId": "4",
            "imagenPequena" : "imagenes/GiantMan32x32.png",
            "imagengrande": "imagenes/GiantMan128x128.png"
        },
         {
            "usuarioId": "6",
            "nombre": "Nick Fury",
            "puestoId": "4",
            "imagenPequena": "imagenes/NickFury32x32.png",
            "imagengrande": "imagenes/NickFury128x128.png"
        },
                      {
            "usuarioId": "7",
            "nombre": "Bruce Banner",
            "puestoId": "4",
            "imagenPequena" : "imagenes/Hulk32x32.png",
            "imagengrande": "imagenes/Hulk128x128.png"
        },
         {
            "usuarioId": "8",
            "nombre": "Loki Laufeyson",
            "puestoId": "4",
            "imagenPequena": "imagenes/Loki32x32.png",
            "imagengrande": "imagenes/Loki128x128.png"
        },
            {
            "usuarioId": "9",
            "nombre": "Phil Coulson",
            "puestoId": "5",
            "imagenPequena" : "imagenes/AgentCoulson32x32.png",
            "imagengrande": "imagenes/AgentCoulson128x128.png"
        },
         {
            "usuarioId": "10",
            "nombre": "Clinton Francis Barton",
            "puestoId": "5",
            "imagenPequena": "imagenes/Hawkeye32x32.png",
            "imagengrande": "imagenes/Hawkeye128x128.png"
        },
            {
            "usuarioId": "11",
            "nombre": "James Rhodes",
            "puestoId": "2",
            "imagenPequena": "imagenes/WarMachine32x32.png",
            "imagengrande": "imagenes/WarMachine128x128.png"
        }];
        
        var usuariosUrl = "/api/usuarios";
        
        $httpBackend.whenGET(usuariosUrl).respond(usuarios);
        
        var editarRegex = new RegExp(usuariosUrl + "/[0-9][0-9]*", '');
        
        $httpBackend.whenGET(editarRegex).respond(function(method, url, data){
            var usuario ={"usuarioId": 0};
            var parameters = url.split('/');
            var length = parameters.length;
            var id = parameters[length -1];
            
            if (id > 0) {
                for (var i = 0; i < usuarios.length; i++){
                    if(usuarios[i].usuarioId == id){
                        usuario = usuarios[i];
                        break;
                    }
                }
                
            }
            return [200, usuario,{}];
        })
        
        $httpBackend.whenPOST(usuariosUrl).respond(function(method, url, data){
            var usuario = angular.fromJson(data);
            
            if (!usuario.usuarioId){
                //nuevo Usuario Id
                if ( usuarios.length - 1 >= 0){
                    usuario.usuarioId = parseInt(usuarios[usuarios.length -1].usuarioId) + 1;
                }else{
                usuario.usuarioId = 1    
                }
                usuarios.push(usuario);
            } else {
                //Actualizar Usuario
                for (var i = 0; i < usuarios.length; i++){
                    if (usuarios[i].usuarioId == usuario.usuarioId){
                        usuarios[i] = usuario;
                        break;
                    }
                }
            }
            return [200, usuario, {}];
        });
        
        $httpBackend.whenGET(/paginas/).passThrough();
        
    })
}());