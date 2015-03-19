var app = angular.module('ProtectorApp', ['ngRoute']);

app.config(function($routeProvider) {

	$routeProvider
	.when('/', {
		templateUrl: 'index.html',
		controller: 'mainCtrl'
	})
	.when('/shop', {
		templateUrl: '/shop.html',
		controller: 'shopCtrl'
	})
	.otherwise({
		redirectTo: '/'
	})

});