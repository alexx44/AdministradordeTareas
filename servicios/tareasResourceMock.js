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
        "tareaId": "2",
        "asignadoA": {
            "usuarioId" :"3",
            "nombre" : "Tony Stark",
            "puestoId" : "1",
            "imagenPequena" : "imagenes/IronMan32x32.png",
            "imagenGrande" : "imagenes/IronMan128x128.png"
        },
        "descripcion" : "Crear view para listar Tareas",
        "estado" : "LISTA",
        "prioridad" : "MEDIA"
        },
            {
        "tareaId": "3",
        "asignadoA": {
            "usuarioId" :"1",
            "nombre" : "Steve Rogers",
            "puestoId" : "2",
            "imagenPequena" : "imagenes/CaptainAmerica32x32.png",
            "imagenGrande" : "imagenes/capitan128x128.png"
        },
        "descripcion" : "Crear view para listar Tareas",
        "estado" : "LISTA",
        "prioridad" : "BAJA"
        },
                {
        "tareaId": "4",
        "asignadoA": {
            "usuarioId" :"1",
            "nombre" : "Steve Rogers",
            "puestoId" : "2",
            "imagenPequena" : "imagenes/CaptainAmerica32x32.png",
            "imagenGrande" : "imagenes/capitan128x128.png"
        },
        "descripcion" : "Crear view para listar Tareas",
        "estado" : "LISTA",
        "prioridad" : "BAJA"
        },
                {
        "tareaId": "5",
        "asignadoA": {
            "usuarioId" :"1",
            "nombre" : "Steve Rogers",
            "puestoId" : "2",
            "imagenPequena" : "imagenes/CaptainAmerica32x32.png",
            "imagenGrande" : "imagenes/capitan128x128.png"
        },
        "descripcion" : "Crear view para listar Tareas",
        "estado" : "LISTA",
        "prioridad" : "BAJA"
        }
        ];
        
        var tareasUrl = "/api/tarea";
        
        $httpBackend.whenGET(tareasUrl).respond(tareas);
        $httpBackend.whenGET(/paginas/).passThrough();

        
        });
 
 })();