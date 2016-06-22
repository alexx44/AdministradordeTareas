(function() {
    "use strict";
    
    angular
    .module("AdministradordeTareas")
    .controller("usuariosCtrl",
               ["usuariosResource",
                "$rootScope",
                usuariosCtrl]);
    
    function usuariosCtrl(usuariosResource, $rootScope){
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
       
       $rootScope.$on('cancelarEdicionUsuario', function(event, args){
           vm.mostrarPanelUsuario(false);
           
       });
        $rootScope.$on('actualizarListaUsuarios', function(event, args){
           obtenerUsuarios();
            vm.mostrarPanelUsuario(false);
        });
    }
    
})();