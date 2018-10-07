app.service("authService",
    function ($http) {
        var url = 'api/login/';
        auth = function (item) {
            return $http({ method: 'POST', url: url, data: item });
        }

        return ({
            auth: auth,
        });
    }
);
