(function(){
    "use strict";
    
    angular
    .module("AdministradordeTareas")
    .controller("UsuariosCtrl",
               ["usuariosResource", 
                UsuariosCtrl]);
    function UsuariosCtrl(usuariosResource){
        var vm = this;
        
        var obtenerUsuarios = function(){
            usuariosResource.query(function(data){
                vm.usuarios = data;
            });
        }
        obtenerUsuarios();
    }
    
}());