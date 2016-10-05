'use strict';

angular.module('contactsApp.contacts')
  .config(function($routeProvider) {
    $routeProvider.when('/contacts', {
      templateUrl: 'app/contacts/contacts.html',
      controller: 'ContactController'
    });
  });
