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
            "imagenPequena":"imagenes/bioman32x32.png",
            "imagenGrande":"imagenes/bioman128x128.png"
        },{
            "descripcion":"Blue",
            "imagenPequena":"imagenes/Blue32x32.png",
            "imagenGrande":"imagenes/Blue128x128.png"
        },{
            "descripcion":"Captain",
            "imagenPequena":"imagenes/CaptainAmerica32x32.png",
            "imagenGrande":"imagenes/CaptainAmerica128x128.png"
        },{
            "descripcion":"Devil",
            "imagenPequena":"imagenes/Devil32x32.png",
            "imagenGrande":"imagenes/Devil128x128.png"
        },{
            "descripcion":"Female Face",
            "imagenPequena":"imagenes/FemaleFace32x32.png",
            "imagenGrande":"imagenes/FemaleFace128x128.png"
        },{
            "descripcion":"Frankenstein",
            "imagenPequena":"imagenes/frankenstein32x32.png",
            "imagenGrande":"imagenes/frankenstein128x128.png"
        },{
            "descripcion":"GiantMan",
            "imagenPequena":"imagenes/GiantMan32x32.png",
            "imagenGrande":"imagenes/GiantMan128x128.png"
        },{
            "descripcion":"Green",
            "imagenPequena":"imagenes/AgentCoulson32x32.png",
            "imagenGrande":"imagenes/AgentCoulson128x128.png"
        },{
            "descripcion":"HawEye",
            "imagenPequena":"imagenes/Hawkeye32x32.png",
            "imagenGrande":"imagenes/Hawkeye128x128.png"
        },{
            "descripcion":"Hulk",
            "imagenPequena":"imagenes/Hulk32x32.png",
            "imagenGrande":"imagenes/Hulk128x128.png"
        },{
            "descripcion":"IronMan",
            "imagenPequena":"imagenes/IronMan32x32.png",
            "imagenGrande":"imagenes/IronMan128x128.png"
        },{
            "descripcion":"Jason",
            "imagenPequena":"imagenes/jason32x32.png",
            "imagenGrande":"imagenes/jason128x128.png"
        },{
            "descripcion":"Loki",
            "imagenPequena":"imagenes/Loki32x32.png",
            "imagenGrande":"imagenes/Loki128x128.png"
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
            "imagenPequena":"imagenes/maleface32x32.png",
            "imagenGrande":"imagenes/maleface128x128.png"
        },{
            "descripcion":"Nick Fury",
            "imagenPequena":"imagenes/NickFury32x32.png",
            "imagenGrande":"imagenes/NickFury128x128.png"
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
            "imagenPequena":"imagenes/Thor32x32.png",
            "imagenGrande":"imagenes/Thor128x128.png"
        },{
            "descripcion":"Viuda Negra",
            "imagenPequena":"imagenes/BlackWidow32x32.png",
            "imagenGrande":"imagenes/BlackWidow128x128.png"
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