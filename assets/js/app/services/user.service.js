app.service("userService",
    function ($http) {
        var url = 'api/user/';
        var request = {};
        save = function (item) {
            if (!item.id || item.id == 0)
                request = $http({ method: 'POST', url: url, data: item });
            else
                request = $http({ method: 'PUT', url: url, data: item });
            return request;
        }

        return ({
            save: save,
        });
    }
);
