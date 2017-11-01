var susbasApp = angular.module('susbasApp', [
  'ngRoute',
]);

susbasApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      // when('/home', {
      //   templateUrl: 'views/home.html',
      //   controller: 'HomeCtrl'
      // }).
      when('product', {
        templateUrl: 'views/product.html',
        controller: 'ProductCtrl'
      }).
      when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      }).
      when('/ebook', {
        templateUrl: 'views/ebook.html',
        controller: 'EbookCtrl'
      }).
      when('/fordev', {
        templateUrl: 'views/fordev.html',
        controller: 'FordevCtrl'
      }).
      when('/topic/:topicId', {
        templateUrl: 'views/topic-detail.html',
        controller: 'TopicDetailCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);