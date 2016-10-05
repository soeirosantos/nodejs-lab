'use strict';

angular.module('contactsApp.auth', ['contactsApp.constants', 'contactsApp.util', 'ngCookies',
    'ngRoute'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
