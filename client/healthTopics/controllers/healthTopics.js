angular.module('pillsWatch')
    .controller('HealthTopicsCtrl', ['$scope', '$meteor', '$mdDialog', '$animate', 'healthTopicsService', function ($scope, $meteor, $mdDialog, $animate, healthTopicsService) {

        $scope.healthTopics = $meteor.collection(HealthTopics);
        console.log($scope.healthTopics);
        $scope.showNewTopicForm = false;
        $scope.showConfirm = function () {
            // Appending dialog to document.body to cover sidenav in docs app
            var confirm = $mdDialog.confirm()
                .title('You are about to delete all the topics')
                .content('Are you sure you want to <span class="debt-be-gone">delete all</span> your topics?')
                .ok('OK')
                .cancel('cancel');

            $mdDialog.show(confirm).then(function () {
                $scope.removeAllTopics();
            });

        };


        $scope.removeTopic = function (topic) {
            $scope.healthTopics.remove(topic);

        }
        $scope.removeAllTopics = function () {

            $scope.healthTopics.remove();

        }

        $scope.toggleNewTopicForm = function () {
            $scope.showNewTopicForm = !$scope.showNewTopicForm;
            if ($scope.showNewTopicForm == true) {
                $scope.newHealthTopic = healthTopicsService.createTopicPrototype();
                console.log('$scope.newHealthTopic:', $scope.newHealthTopic);
            }
        }

        $scope.addTopic = function (topic) {
            $scope.healthTopics.save(topic);
            $scope.newHealthTopic = healthTopicsService.createTopicPrototype();
        }

        $scope.addMedicament = function (topicId) {
            var newMedicament = {
                healthTopicId: topicId,
                name: '',
                description: '',

            }

        }









        //charts google
        angular.forEach($scope.healthTopics, function (topic) {
            console.log('topic:', topic);
            if (topic.checks) {
                console.log('topic checks:', topic.checks);
                topic.chartObject = {};
                topic.chartObject.type = "LineChart";


                topic.chartObject.data = {
                    "cols": [
                        {
                            id: "t",
                            label: "datum",
                            type: "date"
                    },
                        {
                            id: "s",
                            label: "INR",
                            type: "number"
                    }
    ],
                    "rows": []
                };
                angular.forEach(topic.checks, (function (check) {

                    topic.chartObject.data.rows.push({
                        c: [
                            {
                                v: new Date(check.date)
                        },
                            {
                                v: check.result
                        },
                        ]
                    })
                }));
                var title = topic.units ? topic.units + ' ' + topic.okLevel[0] + ' - ' + topic.okLevel[1] : 'unknown title';
                topic.chartObject.options = {
                    'title': title,
                    curveType: 'function',
                    pointSize: 4,
                    legend: 'none'
                };
            }
        })

    }]);
