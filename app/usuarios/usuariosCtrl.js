(function() {
    "use strict";
    
    angular
    .module("AdministradordeTareas")
    .controller("usuariosCtrl",
               ["usuariosResource",
                usuariosCtrl]);
    
    function usuariosCtrl(usuariosResource){
        var vm = this;
        //Obtener usuarios
        var obtenerUsuarios = function(){
            usuariosResource.query(function(data){
                vm.usuarios = data;
                 });
        }
        obtenerUsuarios();
        //Buscar Usuarios
        
        vm.buscar = "";
        
    }
    
})();