define(['questAPI'], function(Quest){
    var API = new Quest();

    API.addSequence([
        {
            header: 'random - not very usefull',
            questions: [
                {
                    mixer:'random',
                    remix:true,
                    data: [
                        { type: 'text', stem: 'first question'},
                        { type: 'text', stem: 'second question'}
                    ]
                }
            ]
        },
        {
            header: 'branch - this is where the magic happens',
            questions: [
                { type: 'text', stem: 'Do you speak Spanish? (type "yes")'},
                {
                    mixer:'branch',
                    conditions: { compare:'current.questions.regular.response', to:'yes' },
                    remix:true,
                    data: [
                        { type: 'text', stem: 'How do you say "Fantastic" in Spanish?'}
                    ]
                }
            ]
        }
    ]);

    return API.script;
});
