var app = angular.module('ProtectorApp', ['ngRoute', 'firebase']);

app.config(function($routeProvider) {

	$routeProvider
	.when('/', {
		templateUrl: '/Home_Page/homeTmpl.html',
		controller: 'mainCtrl'
	})
	.when('/shop', {
		templateUrl: '/Shop/shop.html',
		controller: 'shopCtrl'
	})
	.when('/logIn', {
		templateUrl: '/Login/logInTmpl.html',
		controller: 'logInCtrl'
	})
	.when('/Forum', {
		templateUrl: '/Forum/forumTmpl.html',
		controller: 'forumCtrl'
	})
	.otherwise({
		redirectTo: '/'
	})
})
.run(function($rootScope) {
	$rootScope.isLoggedIn = false;
});
//.value("isLoggedIn", false);

/*app.run(["$rootScope", "$location", function($rootScope, $location) {
	$rootScope.$on("$routeChangeError", function(event, next, previous, error) {
		// We can catch the error thrown when the $requireAuth promise is rejected
		// and redirect the user back to the home page
		if (error === "AUTH_REQUIRED") {
			$location.path("/Login");
		}
	});
}]);*/