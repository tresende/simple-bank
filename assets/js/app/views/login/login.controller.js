app.controller('loginController', function ($scope, $rootScope, $location) {
  $rootScope.showAppBar = false;
  $scope.submit = function () {
    $location.path("/");
  };
});
