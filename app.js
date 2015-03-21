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
		controller: 'forumCtrl'
	})
	.otherwise({
		redirectTo: '/'
	})
});