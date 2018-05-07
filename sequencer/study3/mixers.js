define(['questAPI'], function(Quest){
    var API = new Quest();

    API.addQuestionsSet('view', [
        { type:'info', stem: '<%= questionsMeta.number %>. &larr; <%= questionsData.text %>' }
    ]);

    API.addSequence([
        { 
            header: 'no mixer',
            questions: [
                { inherit: 'view', data: {text:'A'}},
                { inherit: 'view', data: {text:'B'}},
                { inherit: 'view', data: {text:'C'}}
            ]
        },
        {
            header: 'random',
            questions: [
                { inherit: 'view', data: {text:'before'}},
                {
                    mixer:'random',
                    data: [
                        { inherit: 'view', data: {text:'A'}},
                        { inherit: 'view', data: {text:'B'}},
                        { inherit: 'view', data: {text:'C'}}
                    ]
                },
                { inherit: 'view', data: {text:'after'}}
            ]
        },
        {
            header: 'repeat',
            questions: [
                { inherit: 'view', data: {text:'before'}},
                {
                    mixer:'repeat',
                    times: 3,
                    data: [
                        { inherit: 'view', data: {text:'A'}},
                        { inherit: 'view', data: {text:'B'}}
                    ]
                },
                { inherit: 'view', data: {text:'after'}}
            ]
        },
        {
            header: 'choose',
            questions: [
                { inherit: 'view', data: {text:'before'}},
                {
                    mixer:'choose',
                    n: 2, 
                    data: [
                        { inherit: 'view', data: {text:'A'}},
                        { inherit: 'view', data: {text:'B'}},
                        { inherit: 'view', data: {text:'C'}}
                    ]
                },
                { inherit: 'view', data: {text:'after'}}
            ]
        },
        {
            header: 'weightedChoose',
            questions: [
                { inherit: 'view', data: {text:'before'}},
                {
                    mixer:'weightedChoose',
                    n: 10, 
                    weights: [0.2,0.8],
                    data: [
                        { inherit: 'view', data: {text:'A'}},
                        { inherit: 'view', data: {text:'B'}}
                    ]
                },
                { inherit: 'view', data: {text:'after'}}
            ]
        },
        {
            header:'custom',
            questions: [
                {
                    mixer:'custom',
                    fn: function(obj){
                        return [
                            { inherit:'view', data:{text: Math.random()}} 
                        ]
                    }
                }
            ]
        }
    ]);

    return API.script;
});
