var app = angular.module("app", ['ngRoute']);
app.config(function ($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: './js/app/views/home/home.template.html',
    controller: 'homeController',
  }).when("/login", {
    templateUrl: './js/app/views/login/login.template.html',
    controller: 'loginController',
  }).when("/new-account", {
    templateUrl: './js/app/views/new-account/new-account.template.html',
    controller: 'newAccountController',
  });
  $locationProvider.html5Mode(true);
  $locationProvider.hashPrefix('');
});


app.run(function ($rootScope, $location) {
  $rootScope.$on('$routeChangeStart', function (event, next, current) {
    var token = localStorage.getItem('token');
    if (!token) {
      $location.path("/login");
    }
  });
});



function startUi() {
  $(document).ready(function () {
    $('.sidenav').sidenav();
  });
}

startUi();
