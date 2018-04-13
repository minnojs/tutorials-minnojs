define(['questAPI'], function(Quest){

    var API = new Quest();

    API.addSequence([
        {
            header: '',
            questions: [
                {
                    type: 'info',
                    stem: 'first <%= (questions.first ? questions.first.response : 0) || "_____"%> second <%= (questions.second ? questions.second.response : 0) || "_____"%>',
                    regenerateTemplate: true
                },
                {
                    type: 'selectOne',
                    style:'multiButtons',
                    name:'first',
                    answers: ['Duck', 'Ballon', 'Women', 'Kindness', 'Glitter'],
                },
                {
                    type: 'selectOne',
                    style:'multiButtons',
                    name:'second',
                    answers: ['Duck', 'Ballon', 'Women', 'Kindness', 'Glitter'],
                }
            ]
        }
    ]);

    return API.script;
});

