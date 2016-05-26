(function(){
    "use strict";
    angular
    .module("common")
    .factory("usuariosResources",
            ["$resource",
             usuariosResource]);
    function usuariosResource($resource){
        return $resource("/api/usuarios/:usuarioId");
        
    }        
    
}());