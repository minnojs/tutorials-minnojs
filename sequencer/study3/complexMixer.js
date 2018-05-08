define(['questAPI'], function(Quest){
    var API = new Quest();

    API.addQuestionsSet('view', [
        { type:'info', stem: '<%= questionsMeta.number %>. &larr; <%= questionsData.text %>' }
    ]);

    API.addSequence([
        { 
            header: 'plain random',
            questions: [
                {
                    mixer:'random',
                    data: [
                        { inherit: 'view', data: {text:'A1'}},
                        { inherit: 'view', data: {text:'A2'}},
                        { inherit: 'view', data: {text:'B'}},
                        { inherit: 'view', data: {text:'C'}}
                    ]
                }
            ]
        },
        { 
            header: 'keep A# together (wrapper)',
            questions: [
                {
                    mixer:'random',
                    data: [
                        {
                            mixer:'wrapper',
                            data: [
                                { inherit: 'view', data: {text:'A1'}},
                                { inherit: 'view', data: {text:'A2'}}
                            ]
                        },
                        { inherit: 'view', data: {text:'B'}},
                        { inherit: 'view', data: {text:'C'}}
                    ]
                }
            ]
        },
        {
            header: 'deep random',
            questions: [
                { inherit: 'view', data: {text:'before random'}},
                {
                    mixer:'random',
                    data: [
                        {
                            mixer: 'repeat',
                            times: 5,
                            data: [
                                { inherit: 'view', data: {text:'A'}}
                            ]
                        },
                        { inherit: 'view', data: {text:'B'}}
                    ]
                },
                { inherit: 'view', data: {text:'after random'}},
            ]
        },
        {
            header: 'deep random with wrapper',
            questions: [
                { inherit: 'view', data: {text:'before random'}},
                {
                    mixer:'random',
                    data: [
                        {
                            mixer: 'repeat',
                            wrapper: true,
                            times: 5,
                            data: [
                                { inherit: 'view', data: {text:'A'}}
                            ]
                        },
                        { inherit: 'view', data: {text:'B'}}
                    ]
                },
                { inherit: 'view', data: {text:'after random'}},
            ]
        },
    ]);

    return API.script;
});
