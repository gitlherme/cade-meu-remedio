angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('login', {
    url: '/page3',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/page4',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('inicio', {
    url: '/page1',
    templateUrl: 'templates/inicio.html',
    controller: 'inicioCtrl'
  })

  .state('home', {
    url: '/page10',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

  .state('centroDeSaDe', {
    url: '/page6',
    templateUrl: 'templates/centroDeSaDe.html',
    controller: 'centroDeSaDeCtrl'
  })

  .state('receita', {
    url: '/page7',
    templateUrl: 'templates/receita.html',
    controller: 'receitaCtrl'
  })

  .state('meusRemDios', {
    url: '/page8',
    templateUrl: 'templates/meusRemDios.html',
    controller: 'meusRemDiosCtrl'
  })

  .state('cMera', {
    url: '/page11',
    templateUrl: 'templates/cMera.html',
    controller: 'cMeraCtrl'
  })

  .state('foto', {
    url: '/page12',
    templateUrl: 'templates/foto.html',
    controller: 'fotoCtrl'
  })

  .state('lexotan', {
    url: '/page13',
    templateUrl: 'templates/lexotan.html',
    controller: 'lexotanCtrl'
  })

  .state('losartana', {
    url: '/page14',
    templateUrl: 'templates/losartana.html',
    controller: 'losartanaCtrl'
  })

  .state('agendaDeConsultas', {
    url: '/page17',
    templateUrl: 'templates/agendaDeConsultas.html',
    controller: 'agendaDeConsultasCtrl'
  })

  .state('avisos', {
    url: '/page18',
    templateUrl: 'templates/avisos.html',
    controller: 'avisosCtrl'
  })

  .state('reclamaEs', {
    url: '/page19',
    templateUrl: 'templates/reclamaEs.html',
    controller: 'reclamaEsCtrl'
  })

  .state('emFalta', {
    url: '/page20',
    templateUrl: 'templates/emFalta.html',
    controller: 'emFaltaCtrl'
  })

$urlRouterProvider.otherwise('/page3')


});