(function() {
    "use strict";
    
    angular
    .module("AdministradordeTareas")
    .controller("tareasCtrl",
               ["tareasResource",
                tareasCtrl]);
    
    function tareasCtrl(tareasResource){
        var vm = this;
        var obtenerTareas = function(){
            tareasResource.query(function(data){
                vm.tareas = data;
                 });
        }
        obtenerTareas();
        
    }
    
})();