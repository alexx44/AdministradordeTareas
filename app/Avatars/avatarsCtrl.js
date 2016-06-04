(function(){
    "use strict";
    
    angular
    .module("AdministradordeTareas")
    .controller("avatarsCtrl",
               ["avatars",
               "usuario",
               "$rootScope",
               avatarsCtrl]);
    
    function avatarsCtrl(avatars, usuario, $rootScope){
        var vm = this;
        vm.avatars = avatars;
        vm.usuario = usuario;
        
        vm.cambiarAvatar = function (avatar){
            $rootScope.$emit('cambiarAvatar',avatar);
            
        }
    }
    
}());