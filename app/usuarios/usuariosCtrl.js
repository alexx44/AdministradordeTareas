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
        //Nuevo Usuario
        vm.panelUsuarioVisible = false;
        
        vm.mostrarPanelUsuario = function(mostrar){
            vm.panelUsuarioVisible = mostrar;
            
        }
        
    }
    
})();