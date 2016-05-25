(funtion(){
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
            "imagenPequeña" : "imagenes/capitan32x32.png",
            "imagenGrande" : "imagenes/capitan128x128.png"
        },
        "descripcion" : "Crear view para listar Tareas",
        "estado" : "PENDIENTE",
        "prioridad" : "ALTA"
        }];
        
        var tareasUrl = "/api/tareas";
        
        $httpBackend.whenGet(tareasUrl).respond(tareas);
        $httpBackend.whenGet(/paginas/).passThrough();

        
        });
 
 })();