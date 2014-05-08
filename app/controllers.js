(function () {
    "use strict";


    angular.module('controllers', [])

        .controller('MiscCtrl', ['$scope', '$rootScope', '$timeout', function MiscCtrl($scope, $rootScope, $timeout) {
            var services = window.DB[0].services;
            var pages = window.DB[0].pages;
            $scope.ru = services.ru;
            $scope.en = services.en;

            $scope.$watch('lang', function (lang) {
                $scope.about = lang == 1 ? pages.about.ru.title : pages.about.en.title;
                $scope.president = lang == 1 ? pages.president.ru.title : pages.president.en.title;
                $scope.upstream = lang == 1 ? pages.upstream.ru.title : pages.upstream.en.title;
                $scope.geographic = lang == 1 ? pages.geographic.ru.title : pages.geographic.en.title;
                $scope.projects = lang == 1 ? pages.projects.ru.title : pages.projects.en.title;
                $scope.md = lang == 1 ? pages.md.ru.title : pages.md.en.title;
                $scope.dev = lang == 1 ? pages.dev.ru.title : pages.dev.en.title;
                $scope.environment = lang == 1 ? pages.environment.ru.title : pages.environment.en.title;
                $scope.social = lang == 1 ? pages.social.ru.title : pages.social.en.title;
                $scope.contacts = lang == 1 ? pages.contacts.ru.title : pages.contacts.en.title;
            });

            $scope.loaded = function () {
                $rootScope.loader = 1;
                $rootScope.content = 0;
                $timeout(function () {
                    $rootScope.loader = 0;
                    $rootScope.content = 1;
                }, 300);
            };

            $scope.menuShow = function (a) {
                $scope.menuOpen = a;
            };
            $scope.menuShow(0);

        }])

        .controller('LangCtrl', ['$scope', '$rootScope', '$timeout', function LangCtrl($scope, $rootScope, $timeout) {
            $scope.setEn = function () {
                $rootScope.lang = 2;
            }
            $scope.setRu = function () {
                $rootScope.lang = 1;
            }
            $scope.setRu();
        }])

        .controller('MenuCtrl', ['$scope', '$rootScope', function MenuCtrl($scope, $rootScope) {
            $rootScope.homes = 0;
            $rootScope.content = 1;
            $scope.menuShow(1);
        }])

        .controller('HomesCtrl', ['$scope', '$rootScope', '$timeout', function HomesCtrl($scope, $rootScope, $timeout) {
            $rootScope.title = "HomesCtrl";
            $rootScope.loader = 1;
            $rootScope.homes = 1;

            $timeout(function () {
                $rootScope.loader = 0;
                $rootScope.content = 1;
            }, 300);
        }])

        .controller('AboutCtrl', ['$scope', '$rootScope', '$timeout', function AboutCtrl($scope, $rootScope, $timeout) {
            $rootScope.homes = 0;
            $rootScope.content = 1;

            $scope.$watch('lang', function (lang) {
                $scope.DB = lang == 1 ? window.DB[0].pages.about.ru : window.DB[0].pages.about.en;
                $rootScope.title = $scope.DB.title;
//                    graph(
//                        '#neft_en',
//                        [ 80, 40, 40, 45],
//                        '<div class="text-center">Dynamics of oil production at RussNeft Group<br>in 2012-2015, million tons</div>',
//                        ['2012', '2013', '2014', '2015'],
//                        'million tons',
//                        'Production: <b>{point.y:.1f} million tons</b>',
//                        [16.3, 17, 17.0, 18.0]
//                    )
//                    graph(
//                        '#gas_en',
//                        [ 80, 40, 40, 62],
//                        '<div class="text-center">Gas production dynamics of RussNeft Group<br> in 2012-2015, million m<sup>3</sup></div>',
//                        ['2012', '2013', '2014', '2015'],
//                        'million м<sup>3</sup>',
//                        'Production: <b>{point.y:.1f} million м<sup>3</sup></b>',
//                        [2333, 2257, 2336, 2400]
//                    )
//                    graph(
//                        '#neft',
//                        [ 80, 40, 40, 45],
//                        '<div class="text-center">Динамика добычи нефти Группы Компаний «РуссНефть»<br> в 2012–2015 годах, млн. тонн</div>',
//                        ['2012', '2013', '2014', '2015'],
//                        'Добыча млн. тонн',
//                        'Добыча: <b>{point.y:.1f} млн. тонн</b>',
//                        [16.3, 17.0, 17.0, 18.0]
//                    )
//                    graph(
//                        '#gas',
//                        [ 80, 40, 40, 62],
//                        '<div class="text-center">Динамика добычи газа Группы Компаний «РуссНефть»<br> в 2012–2015 годах, млн. м<sup>3</sup></div>',
//                        ['2012', '2013', '2014', '2015'],
//                        'Добыча млн. м<sup>3</sup>',
//                        'Добыча: <b>{point.y:.1f} млн. м<sup>3</sup></b>',
//                        [2333, 2257, 2336, 2400]
//                    )
            });

        }])

        .controller('PresidentCtrl', ['$scope', '$rootScope', '$timeout', function PresidentCtrl($scope, $rootScope, $timeout) {
            $rootScope.homes = 0;
            $rootScope.content = 1;
        }])

        .controller('upstreamCtrl', ['$scope', '$rootScope', '$timeout', function upstreamCtrl($scope, $rootScope, $timeout) {
            $rootScope.homes = 0;
            $rootScope.content = 1;
            $scope.$watch('lang', function (lang) {
                $scope.DB = lang == 1 ? window.DB[0].pages.about.ru : window.DB[0].pages.about.en;
                $rootScope.title = $scope.DB.title;
//                if (lang == 1) {
//                    graph(
//                        '#neft_up',
//                        [ 80, 40, 40, 45],
//                        '<div class="text-center">Динамика добычи нефти Группы Компаний «РуссНефть»<br> в 2012–2015 годах, млн. тонн</div>',
//                        ['2012', '2013', '2014', '2015'],
//                        'Добыча млн. тонн',
//                        'Добыча: <b>{point.y:.1f} млн. тонн</b>',
//                        [16.3, 17.0, 17.0, 18.0]
//                    )
//                }
//                if (lang == 2) {
//                    graph(
//                        '#neft_up-en',
//                        [ 80, 40, 40, 45],
//                        '<div class="text-center">Dynamics of oil production at OAO NK RussNeft<br> in 2012-2015, million tons</div>',
//                        ['2012', '2013', '2014', '2015'],
//                        'million tons',
//                        'Production: <b>{point.y:.1f} million tons</b>',
//                        [16.3, 17.0, 17.0, 18.0]
//                    )
//                }
            });
        }])

        .controller('geographicCtrl', ['$scope', '$rootScope', '$timeout', function geographicCtrl($scope, $rootScope, $timeout) {
            $rootScope.homes = 0;
            $rootScope.content = 1;
            $scope.panelRus = 0;
        }])

        .controller('projectsCtrl', ['$scope', '$rootScope', '$timeout', function projectsCtrl($scope, $rootScope, $timeout) {
            $rootScope.homes = 0;
            $rootScope.content = 1;
        }])

        .controller('mdCtrl', ['$scope', '$rootScope', '$timeout', function mdCtrl($scope, $rootScope, $timeout) {
            $rootScope.homes = 0;
            $rootScope.content = 1;
        }])

        .controller('devCtrl', ['$scope', '$rootScope', '$timeout', function devCtrl($scope, $rootScope, $timeout) {
            $rootScope.homes = 0;
            $rootScope.content = 1;
        }])

        .controller('environmentCtrl', ['$scope', '$rootScope', '$timeout', function environmentCtrl($scope, $rootScope, $timeout) {
            $rootScope.homes = 0;
            $rootScope.content = 1;
        }])

        .controller('SocialCtrl', ['$scope', '$rootScope', '$timeout', function SocialCtrl($scope, $rootScope, $timeout) {
            $rootScope.homes = 0;
            $rootScope.content = 1;
        }])

        .controller('contactsCtrl', ['$scope', '$rootScope', '$timeout', function contactsCtrl($scope, $rootScope, $timeout) {
            $rootScope.homes = 0;
            $rootScope.content = 1;
        }])

        .controller('videoCtrl', ['$scope', '$rootScope', '$timeout', function videoCtrl($scope, $rootScope, $timeout) {
            $rootScope.homes = 0;
            $rootScope.content = 1;
        }]);

}());


function graph(id_block, margin, title, categories, yAxis, tooltip, data) {
    $(id_block).highcharts({
        chart: {
            type: 'column',
            margin: margin
        },
        title: {
            useHTML: true,
            text: title,
            align: 'center',
            style: {
                fontSize: '18px',
                fontFamily: 'Cuprum',
                fontWeight: 'bold'
            }
        },
        xAxis: {
            categories: categories,
            labels: {
                rotation: 0,
                align: 'center',
                style: {
                    fontSize: '16px',
                    fontFamily: 'Cuprum',
                    fontWeight: 'bold'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                useHTML: true,
                text: yAxis,
                style: {
                    fontSize: '14px',
                    fontFamily: 'Cuprum',
                    fontWeight: 'bold'
                }
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: tooltip,
            useHTML: true,
            style: {
                fontSize: '16px',
                fontFamily: 'Cuprum',
                fontWeight: 'bold'
            }
        },
        series: [
            {
                data: data,
                color: '#0085C2',
                dataLabels: {
                    enabled: true,
                    rotation: 0,
                    color: '#333',
                    align: 'center',
                    style: {
                        fontSize: '17px',
                        fontFamily: 'Cuprum',
                        fontWeight: 'bold'
                    }
                }
            }
        ]
    });
}
