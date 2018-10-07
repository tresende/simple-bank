app.controller('loginController', function ($scope, $rootScope, $location, userService, authService) {
  $rootScope.showAppBar = false;
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, {});

  $scope.newAccount = function () {
    instances[0].open();
  }

  $scope.submit = function () {
    authService.auth($scope.newUser).then(function(data){
      $location.path("/");
    });
  };

  $scope.newAccountRedirect = function () {
    $location.path("/new-account");
  };

  $scope.addNewAccount = function () {
    userService.save($scope.newUser).then(function(data){
      $location.path("/");
    });
  }
});
