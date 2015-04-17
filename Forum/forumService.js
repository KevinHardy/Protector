var app = angular.module('ProtectorApp');

app.service('forumService', function($firebase) {

	this.isLoggedIn = false;
	this.user = null;

})