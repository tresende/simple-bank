var app = angular.module("app", ['ngRoute']);
app.config(function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $locationProvider.hashPrefix('');
  $routeProvider.when('/', {
    templateUrl: './js/app/views/home/home.template.html',
    controller: 'homeController'
  })
});
