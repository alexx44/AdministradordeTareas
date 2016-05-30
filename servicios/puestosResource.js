(function (){
    "use strict";
    
    angular
    .module("common")
    .factory("puestosResource",
            ["$resource",
            puestoResource]);
    
    function puestosResource($resource){
        return $resource("/api/puestos/:puestoId")
    }
}());