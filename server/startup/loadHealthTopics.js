Meteor.startup(function () {
    if (HealthTopics.find().count() === 0) {
        var topics = [
            {
                'name': 'Srážlivost krve',
                'description': 'nějaký ten popis',
                'units': 'INR',
                'okLevel': [2.5, 3.5],
                checks: [
                    {
                        'date': new Date(),
                        'result': '2.15'
                    }
                ]
                }
      ];
        for (var i = 0; i < topics.length; i++)
            HealthTopics.insert(topics[i]);
    }
});
