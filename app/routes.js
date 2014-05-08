(function () {
    "use strict";


    angular.module('routesModule', []).config(function ($routeProvider) {
        $routeProvider
            .when('/menu', {
                controller: 'MenuCtrl',
                templateUrl: 'app/views/menu.html'
            })
            .when('/about', {
                controller: 'AboutCtrl',
                templateUrl: 'app/views/about.html'
            })
            .when('/president', {
                controller: 'PresidentCtrl',
                templateUrl: 'app/views/president.html'
            })
            .when('/upstream', {
                controller: 'upstreamCtrl',
                templateUrl: 'app/views/upstream.html'
            })
            .when('/upstream/neft', {
                controller: 'upstreamCtrl',
                templateUrl: 'app/views/upstream-neft.html'
            })
            .when('/upstream/gas', {
                controller: 'upstreamCtrl',
                templateUrl: 'app/views/upstream-gas.html'
            })
            .when('/upstream/gas/1', {
                controller: 'upstreamCtrl',
                templateUrl: 'app/views/upstream-gas-1.html'
            })
            .when('/upstream/gas/2', {
                controller: 'upstreamCtrl',
                templateUrl: 'app/views/upstream-gas-2.html'
            })
            .when('/upstream/gas/3', {
                controller: 'upstreamCtrl',
                templateUrl: 'app/views/upstream-gas-3.html'
            })
            .when('/upstream/geo', {
                controller: 'upstreamCtrl',
                templateUrl: 'app/views/upstream-geo.html'
            })
            .when('/geographic', {
                controller: 'geographicCtrl',
                templateUrl: 'app/views/geographic.html'
            })
            .when('/geographic/ru', {
                controller: 'geographicCtrl',
                templateUrl: 'app/views/geographic-ru.html'
            })
            .when('/geographic/mv', {
                controller: 'geographicCtrl',
                templateUrl: 'app/views/geographic-mv.html'
            })
            .when('/geographic/az', {
                controller: 'geographicCtrl',
                templateUrl: 'app/views/geographic-az.html'
            })
            .when('/geographic/be', {
                controller: 'geographicCtrl',
                templateUrl: 'app/views/geographic-be.html'
            })
            .when('/projects', {
                controller: 'projectsCtrl',
                templateUrl: 'app/views/projects.html'
            })
            .when('/projects/1', {
                controller: 'projectsCtrl',
                templateUrl: 'app/views/projects-1.html'
            })
            .when('/projects/2', {
                controller: 'projectsCtrl',
                templateUrl: 'app/views/projects-2.html'
            })
            .when('/md', {
                controller: 'mdCtrl',
                templateUrl: 'app/views/md.html'
            })
            .when('/dev', {
                controller: 'devCtrl',
                templateUrl: 'app/views/dev.html'
            })
            .when('/environment', {
                controller: 'environmentCtrl',
                templateUrl: 'app/views/environment.html'
            })
            .when('/environment/1', {
                controller: 'environmentCtrl',
                templateUrl: 'app/views/environment-1.html'
            })
            .when('/environment/2', {
                controller: 'environmentCtrl',
                templateUrl: 'app/views/environment-2.html'
            })
            .when('/social', {
                controller: 'SocialCtrl',
                templateUrl: 'app/views/social.html'
            })
            .when('/social/1', {
                controller: 'SocialCtrl',
                templateUrl: 'app/views/social-1.html'
            })
            .when('/social/1/1', {
                controller: 'SocialCtrl',
                templateUrl: 'app/views/social-1-1.html'
            })
            .when('/social/1/2', {
                controller: 'SocialCtrl',
                templateUrl: 'app/views/social-1-2.html'
            })
            .when('/social/1/3', {
                controller: 'SocialCtrl',
                templateUrl: 'app/views/social-1-3.html'
            })
            .when('/social/1/4', {
                controller: 'SocialCtrl',
                templateUrl: 'app/views/social-1-4.html'
            })
            .when('/social/2', {
                controller: 'SocialCtrl',
                templateUrl: 'app/views/social-2.html'
            })
            .when('/social/3', {
                controller: 'SocialCtrl',
                templateUrl: 'app/views/social-3.html'
            })
            .when('/social/4', {
                controller: 'SocialCtrl',
                templateUrl: 'app/views/social-4.html'
            })
            .when('/contacts', {
                controller: 'contactsCtrl',
                templateUrl: 'app/views/contacts.html'
            })
            .when('/video', {
                controller: 'videoCtrl',
                templateUrl: 'app/views/video.html'
            })
            .when('/', {
                controller: 'HomesCtrl',
                templateUrl: 'app/views/homes.html'
            });
//            .otherwise({
//                redirectTo: '/'
//            });
    });


}());