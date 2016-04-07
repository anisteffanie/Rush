angular.module('Rush', ['ui.router'])
.config(function($stateProvider, $httpProvider, $urlRouterProvider){
	console.log("config is running");
	$urlRouterProvider.otherwise('signin')

	$stateProvider
	.state('signin', {
		url: '/signin',
		templateUrl: '../views/signIn.html',
		controller: 'authController'
	})
	.state('signup', {
		url: '/signup',
		templateUrl: '../views/signUp.html',
		controller: 'authController'
	})
})

.controller('authController', function($scope){

})