(function() {
    "use strict";
    
    angular
    .module("AdministradordeTareas")
    .controller("usuarioCtrl",
                ["usuario",
                 "puestos",
                 "$rootScope",
                 "$state",
                usuarioCtrl]);
    
    function usuarioCtrl(usuario, puestos, $rootScope, $state){
        var vm = this;
        
        vm.usuario = usuario;
        vm.puestos = puestos;
        
        vm.cancelar = function(){
            $rootScope.$emit('cancelarEdicionUsuario');
            $state.go('usuarios');
        }
        $rootScope.$on('cambiarAvatar',function(event, avatar){
            vm.usuario.imagenPequena = avatar.imagenPequena;
            vm.usuario.imagenGrande = avatar.imagenGrande;
        })
        
        
        vm.guardar = function(esValido) {
            if (esValido){
                vm.usuario.$save(function (data) {
               alert('Usuario Actualizado!');
            })
        }else{
            alert('Corrija los errores antes de actualizar');
        }
    }
}
})();