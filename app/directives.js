(function () {
	"use strict";

	angular.module('CommonDirectives', []).


		directive('headerPartial', ['$templateCache', function ($templateCache) {
			return {
				template: ''
			};
		}])


	/**
	 * BEGIN headCart
	 */
//		.directive('headCart', ['$templateCache', '$rootScope', '$timeout', function ($templateCache, $rootScope, $timeout) {
//			return {
//				templateUrl: '/assets/shop-app/views/directives/headCart.html',
//				link       : function link($scope) {
//
//
//					$rootScope.cartProductLength = 0;
//					$scope.addCart = function (productId) {
//						$scope.alert = true;
//						$rootScope.cartProductLength += 1;
//						alertHides();
//					}
//
//					$scope.alertHide = function () {
//						$scope.alert = false;
//					}
//
//					function alertHides() {
//						$timeout(function () {
//							$scope.alert = false;
//						}, 1000)
//					}
//
//				}
//			}
//		}])
	/**
	 * END headCart
	 */


}());


window.mockupPhotoList = [
	{"id": 1, "path": "http://placehold.it/1000x300/A92B48/fff"},
	{"id": 2, "path": "http://placehold.it/1000x300/A92B48/fff"},
	{"id": 3, "path": "http://placehold.it/1000x300/A92B48/fff"},
	{"id": 4, "path": "http://placehold.it/1000x300/A92B48/fff"},
	{"id": 5, "path": "http://placehold.it/1000x300/A92B48/fff"}
]