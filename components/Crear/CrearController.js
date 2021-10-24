
contactApp.controller('CrearController', ['$scope', function($scope) {
    console.log("estamos en crear!");
    // Direccionamiento de usuario

    firebase.auth().onAuthStateChanged(function(user){
        if(user){
            $scope.user = user.email;
        }else{
            window.location = "../Login/Login.html"
        }
    });

    // Función de crear

    $scope.crear = function(){
        
        var name = $scope.nameInput;
        var phone = $scope.phoneInput;
        var email = $scope.emailInput;
        var user = firebase.auth().currentUser;



        if(name && phone && email){
            db.collection(user.email).doc(email).set({
                nombre: name,
                telefono: phone,
                correo: email
            })
            .then(function(docRef){
                swal("Bien!","Actividad creada!","success");
                $scope.nameInput = undefined;
                $scope.phoneInput = undefined;
                $scope.emailInput = undefined;
                $scope.$apply();
            })
            .catch(function(error){
                console.error(error);
                swal("Error","Problemas en base de datos!","error");
            });


        }else{
            swal("Atención","Faltan diligenciar campos","warning");
        }    

    }  

}]);