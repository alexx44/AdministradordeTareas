(function() {
    "use strict";
    
    angular
    .module("AdministradordeTareas")
    .controller("usuarioCtrl",
                ["usuario",
                 "puestos",
                usuarioCtrl]);
    
    function usuarioCtrl(usuario, puestos){
        var vm =this;
        
        vm.usuario = usuario;
        vm.puestos = puestos;
        
    }
}());