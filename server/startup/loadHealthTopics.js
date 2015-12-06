Meteor.startup(function () {
    if (HealthTopics.find().count() === 0) {
        var topics = [
            {
                'name': 'Srážlivost krve',
                'description': 'nějaký ten popis',
                'units': 'INR',
                'okLevel': [2.5, 3.5],
                'checks': [
                    {
                        'date': new Date().setDate(2),
                        'result': '2.15'
                    },
                    {
                        'date': new Date().setDate(3),
                        'result': '3.13'
                    },
                    {
                        'date': new Date().setDate(4),
                        'result': '2.44'
                    },
                    {
                        'date': new Date().setDate(5),
                        'result': '5.15'
                    },
                    {
                        'date': new Date().setDate(9),
                        'result': '2.16'
                    },
                    {
                        'date': new Date().setDate(13),
                        'result': '1.25'
                    },
                    {
                        'date': new Date().setDate(16),
                        'result': '2.88'
                    },
                    {
                        'date': new Date().setDate(25),
                        'result': '2.25'
                    }
                ]
                }
      ];
        for (var i = 0; i < topics.length; i++)
            HealthTopics.insert(topics[i]);
    }
});
