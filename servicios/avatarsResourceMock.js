(function(){
    "use Strict";
    
    var app = angular
    .module("avatarsResourceMock",
           ["ngMockE2E"]);
    
    app.run(function($httpBackend){
        var avatars =[{
            "descripcion":"Agente Coulson",
            "imagenPequena":"imagenes/AgentCoulson32x32.png",
            "imagenGrande":"imagenes/AgentCoulson128x128.png"
        },{
            "descripcion":"BioMan",
            "imagenPequena":"imagenes/AgentCoulson32x32.png",
            "imagenGrande":"imagenes/AgentCoulson128x128.png"
        },{
            "descripcion":"Blue",
            "imagenPequena":"imagenes/AgentCoulson32x32.png",
            "imagenGrande":"imagenes/AgentCoulson128x128.png"
        },{
            "descripcion":"Captain",
            "imagenPequena":"imagenes/AgentCoulson32x32.png",
            "imagenGrande":"imagenes/AgentCoulson128x128.png"
        },{
            "descripcion":"Devil",
            "imagenPequena":"imagenes/AgentCoulson32x32.png",
            "imagenGrande":"imagenes/AgentCoulson128x128.png"
        },{
            "descripcion":"Female Face",
            "imagenPequena":"imagenes/AgentCoulson32x32.png",
            "imagenGrande":"imagenes/AgentCoulson128x128.png"
        },{
            "descripcion":"Frankenstein",
            "imagenPequena":"imagenes/AgentCoulson32x32.png",
            "imagenGrande":"imagenes/AgentCoulson128x128.png"
        },{
            "descripcion":"GiantMan",
            "imagenPequena":"imagenes/AgentCoulson32x32.png",
            "imagenGrande":"imagenes/AgentCoulson128x128.png"
        },{
            "descripcion":"Green",
            "imagenPequena":"imagenes/AgentCoulson32x32.png",
            "imagenGrande":"imagenes/AgentCoulson128x128.png"
        },{
            "descripcion":"HawEye",
            "imagenPequena":"imagenes/AgentCoulson32x32.png",
            "imagenGrande":"imagenes/AgentCoulson128x128.png"
        },{
            "descripcion":"Hulk",
            "imagenPequena":"imagenes/AgentCoulson32x32.png",
            "imagenGrande":"imagenes/AgentCoulson128x128.png"
        },{
            "descripcion":"IronMan",
            "imagenPequena":"imagenes/AgentCoulson32x32.png",
            "imagenGrande":"imagenes/AgentCoulson128x128.png"
        },{
            "descripcion":"Jason",
            "imagenPequena":"imagenes/AgentCoulson32x32.png",
            "imagenGrande":"imagenes/AgentCoulson128x128.png"
        },{
            "descripcion":"Loki",
            "imagenPequena":"imagenes/AgentCoulson32x32.png",
            "imagenGrande":"imagenes/AgentCoulson128x128.png"
        },{
            "descripcion":"Luchador",
            "imagenPequena":"imagenes/AgentCoulson32x32.png",
            "imagenGrande":"imagenes/AgentCoulson128x128.png"
        },{
            "descripcion":"Male Face 2",
            "imagenPequena":"imagenes/AgentCoulson32x32.png",
            "imagenGrande":"imagenes/AgentCoulson128x128.png"
        },{
            "descripcion":"Male Face",
            "imagenPequena":"imagenes/AgentCoulson32x32.png",
            "imagenGrande":"imagenes/AgentCoulson128x128.png"
        },{
            "descripcion":"Nick Fury",
            "imagenPequena":"imagenes/AgentCoulson32x32.png",
            "imagenGrande":"imagenes/AgentCoulson128x128.png"
        },{
            "descripcion":"Pink",
            "imagenPequena":"imagenes/AgentCoulson32x32.png",
            "imagenGrande":"imagenes/AgentCoulson128x128.png"
        },{
            "descripcion":"Red",
            "imagenPequena":"imagenes/AgentCoulson32x32.png",
            "imagenGrande":"imagenes/AgentCoulson128x128.png"
        },{
            "descripcion":"Smile",
            "imagenPequena":"imagenes/AgentCoulson32x32.png",
            "imagenGrande":"imagenes/AgentCoulson128x128.png"
        },{
            "descripcion":"Thor",
            "imagenPequena":"imagenes/AgentCoulson32x32.png",
            "imagenGrande":"imagenes/AgentCoulson128x128.png"
        },{
            "descripcion":"Viuda Negra",
            "imagenPequena":"imagenes/AgentCoulson32x32.png",
            "imagenGrande":"imagenes/AgentCoulson128x128.png"
        },{
            "descripcion":"Yellow",
            "imagenPequena":"imagenes/AgentCoulson32x32.png",
            "imagenGrande":"imagenes/AgentCoulson128x128.png"
        }];
        var avatarsUrl ="/api/avatars";
        
        $httpBackend.whenGET(avatarsUrl).respond(avatars);
        $httpBackend.whenGET(/app/).passThrough();
    })
}());