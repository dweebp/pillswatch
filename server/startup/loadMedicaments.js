Meteor.startup(function () {
    if (Medicaments.find().count() === 0) {
        /*
        var medicaments = [
            {
                'name': 'Warfarin',
                'description': 'srazlivost',
                'dosageHistory': [
                    {
                        'date': new Date(),
                        'dosage': '6*8 + 1*7.5'
                    }
                ]
                }
      ];
        for (var i = 0; i < medicaments.length; i++) {
            Medicaments.insert(medicaments[i]);
        }
    }
    */
    }
});
