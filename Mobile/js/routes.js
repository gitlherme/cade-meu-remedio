angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('meusCartEs', {
    url: '/home',
    templateUrl: 'templates/meusCartEs.html',
    controller: 'meusCartEsCtrl'
  })

  .state('cadastrar', {
    url: '/cadastrar',
    templateUrl: 'templates/cadastrar.html',
    controller: 'cadastrarCtrl'
  })

  .state('guilhermeLimaVieiraDaSilva', {
    url: '/cartao',
    templateUrl: 'templates/guilhermeLimaVieiraDaSilva.html',
    controller: 'guilhermeLimaVieiraDaSilvaCtrl'
  })

  .state('medicamento', {
    url: '/remedio',
    templateUrl: 'templates/medicamento.html',
    controller: 'medicamentoCtrl'
  })

  .state('receita', {
    url: '/receita',
    templateUrl: 'templates/receita.html',
    controller: 'receitaCtrl'
  })

  .state('adicionarReceita', {
    url: '/adicionar-receita',
    templateUrl: 'templates/adicionarReceita.html',
    controller: 'adicionarReceitaCtrl'
  })

  .state('adicionarCartO', {
    url: '/adicionar-cartao',
    templateUrl: 'templates/adicionarCartO.html',
    controller: 'adicionarCartOCtrl'
  })

  .state('enviarDenNcia', {
    url: '/cade-meu-remedio',
    templateUrl: 'templates/enviarDenNcia.html',
    controller: 'enviarDenNciaCtrl'
  })

  .state('denNciaEnviada', {
    url: '/denuncia-enviada',
    templateUrl: 'templates/denNciaEnviada.html',
    controller: 'denNciaEnviadaCtrl'
  })

$urlRouterProvider.otherwise('/login')


});