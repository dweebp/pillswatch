angular.module("pillsWatch").config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
  function ($urlRouterProvider, $stateProvider, $locationProvider) {

        $locationProvider.html5Mode(true);

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'client/home/views/home.ng.html',
                controller: 'HomeCtrl'
            })
            .state('healthTopics', {
                url: '/healthTopics',
                templateUrl: 'client/healthTopics/views/healthTopicsOverview.ng.html',
                controller: 'HealthTopicsCtrl'
            })
            .state('healthTopicsDetail', {
                url: '/healthTopics/:healthTopicId',
                templateUrl: 'client/healthTopics/views/healthTopicsDetail.ng.html',
                controller: 'HealthTopicsDetailsCtrl'
            })
            .state('medicaments', {
                url: '/medicaments',
                templateUrl: 'client/healthTopics/views/medicamentsOverview.ng.html',
                controller: 'MedicamentsCtrl'
            })
            .state('medicamentsDetail', {
                url: '/medicaments/:medicamentId',
                templateUrl: 'client/medicaments/views/medicamentsDetail.ng.html',
                controller: 'MedicamentsDetailsCtrl'
            });



        $urlRouterProvider.otherwise("/healthTopics");
  }]);
