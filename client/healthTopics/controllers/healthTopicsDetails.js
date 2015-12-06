angular.module('pillsWatch')
    .controller('HealthTopicsDetailsCtrl', ['$scope', '$meteor', '$stateParams', function ($scope, $meteor, $stateParams) {
            var healtTopicId = $stateParams.healthTopicId;

            $scope.healthTopic = HealthTopics.findOne(healtTopicId);
            $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
            $scope.series = ['Series A', 'Series B'];
            $scope.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
            $scope.onClick = function (points, evt) {
                console.log(points, evt);
            };


    }
            ]);
