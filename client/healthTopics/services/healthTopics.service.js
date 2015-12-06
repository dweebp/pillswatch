(function () {
    'use strict';

    angular.module('pillsWatch')
        .factory('healthTopicsService', healthTopicsService);


    function healthTopicsService() {
        var factory = {
            createTopicPrototype: createTopicPrototype
        };

        return factory;




        function createTopicPrototype() {
            var prototype = {};

            prototype.name = '';
            prototype.desc = '';
            prototype.statusType = null; // null (for They say), '>', '<', 'i' (for interval)
            prototype.statusComparator = null // null, aray
            prototype.currentValue = '';
            prototype.medicamentIds = [];

            return prototype;
        }
    }
}());
