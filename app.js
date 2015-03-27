var app = angular.module('ProtectorApp', ['ngRoute', 'firebase']);

app.config(function($routeProvider) {

	$routeProvider
	.when('/', {
		templateUrl: '/Home Page/homeTmpl.html',
		controller: 'mainCtrl'
	})
	.when('/shop', {
		templateUrl: '/shop/shop.html',
		controller: 'shopCtrl'
	})
	.when('/logIn', {
		templateUrl: '/Login/logInTmpl.html',
		controller: 'LogInCtrl'
	})
	.when('/Forum', {
		templateUrl: '/Forum/forumTmpl.html',
		controller: 'forumCtrl',
		/*resolve: {
			"currentAuth": ["Auth", function(Auth) {
		    // $waitForAuth returns a promise so the resolve waits for it to complete
		    return Auth.$waitForAuth();
    		}]
		}*/
	})
	.otherwise({
		redirectTo: '/'
	})
});

app.run(["$rootScope", "$location", function($rootScope, $location) {
	$rootScope.$on("$routeChangeError", function(event, next, previous, error) {
		// We can catch the error thrown when the $requireAuth promise is rejected
		// and redirect the user back to the home page
		if (error === "AUTH_REQUIRED") {
			$location.path("/Login");
		}
	});
}]);