(function(){
    "use strict";
    
    angular.module("AdministradordeTareas").controller("MainCtrl", [MainCtrl]);
    function MainCtrl(scope){
        var vm = this;
        
        vm.saludo = "Hola que tal"
        vm.despedida = "Adios"
    }
})();