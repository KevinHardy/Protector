var app = angular.module('ProtectorApp');

app.controller('forumCtrl', ["$scope", "$firebaseArray", "forumService", "$rootScope", function($scope, $firebaseArray, forumService, $rootScope) {

	//$scope.test = "Welcome to the Protector Forum!";

	var ref = new Firebase("https://kmhardy-books.firebaseIO.com/ProtectorApp/users");
	var user = ref.getAuth();
	var username = ref.child('name');
	username.once('value', function(snap) {
		var user = snap.val();
		if (!user) {
			return;
		}

		form.find('#name').val(user.name);
		form.find('#posts').val(user.posts);
		form.find('#comments').val(user.comments);
	})

	$scope.isLoggedIn = $rootScope.isLoggedIn;

	//$scope.posts = [];
	var messages = $firebaseArray(new Firebase("https://kmhardy-books.firebaseIO.com/ProtectorApp/messages"));
	$scope.posts = messages;

	$scope.addPost = function(title, body) {
		//console.log($rootScope.isLoggedIn);
		/*messages.newPost.name = username;
		messages.newPost.timestamp = Date.now();
		messages.newPost.comments = [];*/
		
		$scope.messages.push({
			title: title,
			body: body,
			username: username,
			timestamp: Date.now(),
			comments: []
		})

		console.log($scope.posts);
		//console.log($scope.newPost);
		$scope.reset();
	}

	$scope.reset = function() {
		$scope.newPost = {};
	}

	$scope.submitComment = function(index, comment) {
		messages[index].comments.push(comment);
		messages[index].commentForm = '';
	}

}]);