var app = angular.module("app", ['ngRoute']);
app.config(function ($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: './js/app/views/home/home.template.html',
    controller: 'homeController',
  }).when("/login", {
    templateUrl: './js/app/views/login/login.template.html',
    controller: 'loginController',
  });
  $locationProvider.html5Mode(true);
  $locationProvider.hashPrefix('');
});

function startUi() {
  $(document).ready(function () {
    $('.sidenav').sidenav();
  });
}


startUi();
//login
//cadastro
//home -ok
//extrato -ok
//transferencia
//investir
//comprar produtos
