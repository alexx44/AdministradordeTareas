(function() {
    "use strict";
    
    angular
    .module("AdministradordeTareas")
    .controller("tareasCtrl",
               ["tareasResource",
                TareasCtrl]);
    
    function TareasCtrl(tareasResource){
        var vm = this;
        var obtenerTareas = function(){
            tareasResource.query(function(data){
                vm.tareas = data;
                 });
        }
        obtenerTareas();
        
    }
    
})();