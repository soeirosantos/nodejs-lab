'use strict';

angular.module('contactsApp', ['contactsApp.auth', 'contactsApp.admin','contactsApp.contacts', 'contactsApp.constants',
    'ngCookies', 'ngResource', 'ngSanitize', 'ngRoute', 'ui.bootstrap', 'validation.match'
  ])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider.otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
  });
