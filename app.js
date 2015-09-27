HealthTopics = new Mongo.Collection('healthTopics');

if (Meteor.isClient) {
    angular.module('PillsWatch', ['angular-meteor']);


    angular.module('PillsWatch').controller('pillsWatchCtrl', ['$scope', '$meteor', function ($scope, $meteor) {

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
            }]);

}
if (Meteor.isServer) {
    Meteor.startup(function () {
        if (HealthTopics.find().count() === 0) {
            var topics = [
                {
                    'name': 'INR',
                    'description': 'Srazlivost krve'
                }
      ];
            for (var i = 0; i < topics.length; i++)
                HealthTopics.insert(topics[i]);
        }
    });
}
