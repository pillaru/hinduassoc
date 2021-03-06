angular.module("app").factory('haUser', function($resource) {
    var UserResource = $resource('/api/users/:_id', {_id: "@id"}, {
        update: {method: 'PUT', isArray: false},
        delete: {method: 'DELETE'}
    });

    UserResource.prototype.isAdmin = function() {
        return this.roles && this.roles.indexOf("admin") > -1;
    }

    return UserResource;
});