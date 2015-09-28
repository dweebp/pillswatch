angular.module('pillsWatch')
    .controller('HealthTopicsDetailsCtrl', ['$scope', '$meteor', '$stateParams', function ($scope, $meteor, $stateParams) {
            var healtTopicId = $stateParams.healthTopicId;

            $scope.healthTopic = HealthTopics.findOne(healtTopicId);
            Template.highchartsHelper.healthTopicDetailOverview = function () {
                return {
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: null,
                        plotShadow: false
                    },
                    title: {
                        text: this.username + "'s top genres"
                    },
                    tooltip: {
                        pointFormat: '<b>{point.percentage:.1f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                                style: {
                                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                                },
                                connectorColor: 'silver'
                            }
                        }
                    },
                    series: [{
                        type: 'pie',
                        name: 'genre',
                        data: [
                ['Adventure', 45.0],
                ['Action', 26.8],
                ['Ecchi', 12.8],
                ['Comedy', 8.5],
                ['Yuri', 6.2]
            ]
        }]
                };

            }
    }
            ]);
