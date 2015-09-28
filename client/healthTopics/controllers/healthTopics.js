angular.module('pillsWatch')
    .controller('HealthTopicsCtrl', ['$scope', '$meteor', function ($scope, $meteor) {

        $scope.healthTopics = $meteor.collection(HealthTopics);

        $scope.removeTopic = function (topic) {
            $scope.healthTopics.remove(topic);

        }
        $scope.removeAllTopics = function () {

            $scope.healthTopics.remove();

        }

        $scope.addTopic = function (topic) {
            $scope.healthTopics.save(topic);
            $scope.newHealthTopic = '';
        }

        $scope.addMedicament = function (topicId) {
            var newMedicament = {
                healthTopicId: topicId,
                name: '',
                description: '',

            }
        }
            }]);
