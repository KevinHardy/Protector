var app = angular.module('ProtectorApp');

app.controller("logInCtrl", ["$scope", "$firebaseArray", "forumService", "$rootScope", function($scope, $firebaseArray, forumService, $rootScope) {

		var ref = new Firebase("https://kmhardy-books.firebaseIO.com/ProtectorApp");

		$scope.register = function() {
			//console.log("register fired");
			ref.createUser({
				email: $scope.details.email,
				password: $scope.details.password
			}, function(error, userData) {
				if (error) {
					//console.log("error creating user:", error);
					alert("error creating user:", error);
				} else {
					$scope.login(function(loggedIn){
						if(loggedIn) {
							console.log("Successfully created user account with uid: ", userData.uid);
							userData.name = $scope.details.name;
							userData.posts = [];
							userData.comments = [];
							alert("User created Successfully: ", userData.name);
							ref.child('users').child(userData.uid).set(userData);
						} else {
							console.log("unsuccessful login after register");
							alert("unsuccessful login after register");
						}
							
					});
					
				}
			})
		};

		$scope.login = function(cb) {//cb refers to the loggedIn callback function above
			ref.authWithPassword({
				email: $scope.details.email,
				password: $scope.details.password
			}, function(error, authData) {
				if (error) {
				  switch (error.code) {
				    case "INVALID_EMAIL":
				    	alert("The specified user account email is invalid.");
				    	break;
				    case "INVALID_PASSWORD":
				    	alert("The specified user account password is incorrect.");
				    	break;
				    case "INVALID_USER":
				    	alert("The specified user account does not exist.");
				    	break;
				    default:
				    	console.log("Error logging user in:", error);
					}
				if(cb) {
					cb(false);
				}
			} else {
				alert("You have been logged in.");
				console.log("Authenticated succesfully.");
				//alert("you are now logged in as: " );

/*how do I pull the username out of firebase so that the forumCtrl can see that username and post it?????*/
				//var username = userData.name;
				//console.log(username);
/*end where I need help here!*/

				$rootScope.isLoggedIn = true;
				console.log($rootScope.isLoggedIn);
				if(cb) {
					cb(true);
				}
			}
			})
		};

		$scope.signOut = function() {
			ref.unauth();
			$rootScope.isLoggedIn = false;
			//console.log($rootScope.isLoggedIn);
			//console.log('Signed Out');
			alert('You have signed out');
		}

		$scope.status = 'Register';
		$scope.showReg = function() {
			if($scope.status === 'Register'){
				$scope.status = 'Login';
			} else {
				$scope.status = 'Register';
			}
			$scope.reg = !$scope.reg;
		};
}]);