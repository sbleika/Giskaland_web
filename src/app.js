/**
 * Main angular module
 */
angular.module('giskaland', ['ui.router'])

.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
	$urlRouterProvider.otherwise('/home');
	$stateProvider
	.state('home', {
		url: '/home',
		views:{
			'HomeView': {
				templateUrl: 'components/home/home.html',
				controller: 'HomeController'
			}}
		});
}]);
