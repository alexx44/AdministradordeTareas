(function() {
    "use strict";
    
    angular
    .module("AdministradordeTareas")
    .controller("usuarioCtrl",
                ["usuario",
                 "puestos",
                UsuarioCtrl]);
    
    function UsuarioCtrl(usuario, puestos){
        var vm =this;
        vm.usuario = usuario;
        vm.puestos = puestos;
        
    }
    
})