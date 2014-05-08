(function () {
    "use strict";


    var admin = angular.module('admin', [
        'ngResource',
        'ngRoute',
        'routesModule',
        'CommonDirectives',
        'controllers'
    ]);

}());


window.DB = [
    {

        "services": {
            "ru": "Русская версия",
            "en": "English version"
        },


        "pages": {
            "about": {
                "ru": {
                    "title": "О компании"
                },
                "en": {
                    "title": "About the Company"
                }
            },
            "president": {
                "ru": {
                    "title": "Президент компании"
                },
                "en": {
                    "title": "THE PRESIDENT OF THE COMPANY"
                }
            },
            "upstream": {
                "ru": {
                    "title": "Upstream"
                },
                "en": {
                    "title": "Upstream"
                }
            },
            "geographic": {
                "ru": {
                    "title": "География деятельности"
                },
                "en": {
                    "title": "Geography Activity"
                }
            },
            "projects": {
                "ru": {
                    "title": "Крупные стратегические проекты"
                },
                "en": {
                    "title": "Strategic Projects"
                }
            },
            "md": {
                "ru": {
                    "title": "Международная деятельность"
                },
                "en": {
                    "title": "International Business"
                }
            },
            "dev": {
                "ru": {
                    "title": "Перспективы развития"
                },
                "en": {
                    "title": "Development Strategy"
                }
            },
            "environment": {
                "ru": {
                    "title": "Экология"
                },
                "en": {
                    "title": "Environment"
                }
            },
            "social": {
                "ru": {
                    "title": "Социальная ответственность"
                },
                "en": {
                    "title": "Social Responsibility"
                }
            },
            "contacts": {
                "ru": {
                    "title": "Контакты"
                },
                "en": {
                    "title": "Contacts"
                }
            }
        }

    }
]