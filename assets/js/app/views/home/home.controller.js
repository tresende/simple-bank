app.controller('homeController', function ($scope, $rootScope) {
  $rootScope.showAppBar = true;


  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, {});

  $scope.detail = function (item) {
    console.log(item);
    instances[0].open();
  }

  $scope.data = [{
      to: 'Camila Rodrigues',
      value: 100,
      type: 0,
      date: new Date(),
    },
    {
      to: 'Camila Rodrigues',
      value: 30,
      type: 1,
      date: new Date(),
    }, {
      to: 'Camila Rodrigues',
      value: 52,
      type: 1,
      date: new Date(),
    }
  ]
});
