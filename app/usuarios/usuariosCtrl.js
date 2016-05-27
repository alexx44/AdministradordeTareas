(function() {
    "use strict";
    
    angular
    .module("AdministradordeTareas")
    .controller("usuariosCtrl",
               ["usuarioResource",
                usuariosCtrl]);
    
    function usuariosCtrl(usuariosResource){
        var vm = this;
        var obtenerUsuarios = function(){
            usuariosResource.query(function(data){
                vm.usuarios = data;
                 });
        }
        obtenerUsuarios();
        
    }
    
})();