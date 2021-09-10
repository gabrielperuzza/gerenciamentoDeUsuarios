
(function() {

	var modulo = angular.module('appModule', ['ngRoute', 'ui.bootstrap', 'ui.mask', 'ui.utils.masks']);

	modulo.config(['$routeProvider',

		function($routeProvider){

			$routeProvider
				.when('/', {
					templateUrl: 'views/sections/home.html',
					controller: 'gestaoController'
				})
				.when('/usuarios', {
					templateUrl: 'views/sections/usuarios.html',
					controller: 'gestaoController'
				})
				.when('/perfis', {
					templateUrl: 'views/sections/perfis.html',
					controller: 'gestaoController'
				})
				.when('/cargos', {
					templateUrl: 'views/sections/cargos.html',
					controller: 'gestaoController'
				})
				.otherwise({
					redirectTo: '/',
					templateUrl: 'views/sections/home.html',
					controller: 'gestaoController'
				});

		}

	])


	.controller('AppCtrl', ["$scope", "$rootScope",
		function($scope, $rootScope) {

			$scope.init = function() {
                $rootScope.loading = 0;
			};

			$scope.init();


		}

	]);

})(jQuery);