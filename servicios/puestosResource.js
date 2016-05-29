(function (){
    "use strict";
    
    angular
    .module("common")
    .factory("puestosResource",
            ["$resource",
            puestoResource]);
    
    function puestoResource($resource){
        return $resource("/api/puestos/:puestoId")
    }
}());