angular.module('pvcloudApp').controller('_mycloud_mydevices', function ($scope, $location, sessionService, utilityService, $routeParams) {
    console.log("This is my devices controller being invoked");
    console.log($scope);
    

//    $scope.$parent.ActiveView = "mycloud";
//    $scope.Email = "HELLO!";
//    $scope.LoggedIn = false;
//    $scope.section_url = "";
//    validateSession();
//
//    if ($routeParams.section) {        
//        $scope.section_url = "views/_mycloud_" + $routeParams.section + ".html";        
//    } else {
//        $scope.section_url = "views/_mycloud_main.html";
//    }
//    console.log("SECTION URL:");
//    console.log($scope.section_url);
//
//
//    function validateSession() {
//        sessionService.ValidateSession().$promise.then(function (response) {
//            utilityService.ProcessServiceResponse(response,
//                    function success(response) {
//                        $scope.LoggedIn = true;
//                        $scope.Email = sessionService.GetCurrentEmail();
//                    },
//                    function error(response) {
//                        $location.path("mycloud_login");
//                    },
//                    function exception(response) {
//                        alert("Disculpas por la interrupción. Ocurrió un problema con su sesión. Por favor trate autenticándose nuevamente.");
//                        $location.path("mycloud_login");
//                    });
//        });
//    }
});

