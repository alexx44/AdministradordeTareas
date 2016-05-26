(function(){
 "use strict"
 
 var app = angular
 .module("tareasResourceMock",
    ["ngMockE2E"]);

app.run(function($httpBackend){
        var tareas = [
        {
        "tareaId": "1",
        "asignadoA": {
            "usuarioId" :"1",
            "nombre" : "Steve Rogers",
            "puestoId" : "2",
            "imagenPequena" : "imagenes/CaptainAmerica32x32.png",
            "imagenGrande" : "imagenes/capitan128x128.png"
        },
        "descripcion" : "Crear view para listar Tareas",
        "estado" : "PENDIENTE",
        "prioridad" : "ALTA"
        },
            {
        "tareaId": "1",
        "asignadoA": {
            "usuarioId" :"1",
            "nombre" : "Steve Rogers",
            "puestoId" : "2",
            "imagenPequena" : "imagenes/CaptainAmerica32x32.png",
            "imagenGrande" : "imagenes/capitan128x128.png"
        },
        "descripcion" : "Crear view para listar Tareas",
        "estado" : "LISTA",
        "prioridad" : "MEDIA"
        }
        ];
        
        var tareasUrl = "/api/tarea";
        
        $httpBackend.whenGET(tareasUrl).respond(tareas);
        $httpBackend.whenGET(/paginas/).passThrough();

        
        });
 
 })();