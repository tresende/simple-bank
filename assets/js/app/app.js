var app = angular.module("app", ['ngRoute']);
app.config(function ($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: './js/app/views/home/home.template.html',
    controller: 'homeController'
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
//cadastro
//home
//extrato
//transferencia
//investir
