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
        "estado" : "PENDIENTE",
        "prioridad" : "BAJA"
        },
            {
        "tareaId": "3",
        "asignadoA": {
            "usuarioId" :"1",
            "nombre" : "Loki",
            "puestoId" : "2",
            "imagenPequena" : "imagenes/Loki32x32.png",
            "imagenGrande" : "imagenes/Loki128x128.png"
        },
        "descripcion" : "Crear view para listar Tareas",
        "estado" : "PROCESO",
        "prioridad" : "BAJA"
        },
                {
        "tareaId": "4",
        "asignadoA": {
            "usuarioId" :"1",
            "nombre" : "Loki",
            "puestoId" : "2",
            "imagenPequena" : "imagenes/Loki32x32.png",
            "imagenGrande" : "imagenes/Loki128x128.png"
        },
        "descripcion" : "Crear view para listar Tareas",
        "estado" : "HECHO",
        "prioridad" : "MEDIA"
        },
                {
        "tareaId": "5",
        "asignadoA": {
            "usuarioId" :"1",
            "nombre" : "Phil Coulson",
            "puestoId" : "2",
            "imagenPequena" : "imagenes/AgentCoulson32x32.png",
            "imagenGrande" : "imagenes/AgentCoulson128x128.png"
        },
        "descripcion" : "Crear view para listar Tareas",
        "estado" : "LISTA",
        "prioridad" : "ALTA"
        }
        ];
        
        var tareasUrl = "/api/tarea";
        
        $httpBackend.whenGET(tareasUrl).respond(tareas);
        $httpBackend.whenGET(/paginas/).passThrough();

        
        });
 
 })();