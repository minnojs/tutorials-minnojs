define(['questAPI'], function(Quest){
    var API = new Quest();

    API.addQuestionsSet('view', [
        { type:'info', stem: '<%= questionsMeta.number %>. &larr; <%= questionsData.text %>' }
    ]);

    API.addSequence([
        {
            header: 'Setting up the variables',
            questions: [
                {
                    stem: 'Please pick a target name. It will be used in subsequent mixers',
                    type:'selectOne',
                    name: 'targetName',
                    answers: ['Adam', 'Jake', 'Andy']
                },
                { 
                    stem: 'please insert a numeric score for this subject',
                    type: 'textNumber', 
                    name: 'score' 
                }
            ]
        },
        {
            header: 'Conditional elements (only Adam)',
            questions: [
                {inherit:'view', data:{text:'This questions always appears.'}},
                {
                    mixer: 'branch',
                    conditions: [
                        {compare:'current.questions.targetName.response', to: 'Adam'}
                    ],
                    data: [
                        {inherit:'view', data:{text:'Displayed only when Adam was chosen'}}
                    ]
                }
            ]
        },
        {
            header: 'A simple branch (Adam vs the rest)',
            questions: [
                {inherit:'view', data:{text:'This questions always appears.'}},
                {
                    mixer: 'branch',
                    conditions: [
                        {compare:'current.questions.targetName.response', to: 'Adam'}
                    ],
                    data: [
                        {inherit:'view', data:{text:'Displayed only when Adam was chosen'}}
                    ],
                    elseData: [
                        {inherit:'view', data:{text:'Displayed when Jake or Andy were chosen'}}
                    ]
                }
            ]
        },
        {
            header: 'Multiple branches (For each name)',
            questions: [
                {inherit:'view', data:{text:'This questions always appears.'}},
                {
                    mixer:'multiBranch',
                    branches: [
                        {
                            conditions: {compare:'current.questions.targetName.response', to: 'Adam'},
                            data: [ {inherit:'view', data:{text: 'Adam specific questions'}} ]
                        },
                        {
                            conditions: {compare:'current.questions.targetName.response', to: 'Jake'},
                            data: [ {inherit:'view', data:{text: 'Jake specific questions'}} ]
                        },
                        {
                            conditions: {compare:'current.questions.targetName.response', to: 'Andy'},
                            data: [ {inherit:'view', data:{text: 'Andy specific questions'}} ]
                        }
                    ]
                }
            ]
        },
        {
            header:'Complex conditions (Jake and score above 80)',
            questions: [
                {inherit:'view', data:{text:'This question always appears.'}},
                {
                    mixer: 'branch',
                    conditions: [
                        {compare:'current.questions.targetName.response', to: 'Jake'},
                        {compare:'current.questions.score.response', to:80, operator:'greaterThan'},
                    ],
                    data: [
                        {inherit:'view', data:{text:'Jake was picked and he got a score above 80'}}
                    ]
                }
            ]
        },
        {
            header:'Complex conditions (Adam || Jake and score above 80)',
            questions: [
                {inherit:'view', data:{text:'This question always appears.'}},
                {
                    mixer: 'branch',
                    conditions: [
                        {or: [
                            {compare:'current.questions.targetName.response', to: 'Adam'},
                            {compare:'current.questions.targetName.response', to: 'Jake'},
                        ]},
                        {compare:'current.questions.score.response', to:60, operator:'greaterThan', negate:true},
                    ],
                    data: [
                        {inherit:'view', data:{text:'Displayed if either Adam or Jake are picked AND the score is less that 60'}}
                    ]
                }
            ]

        },
    ]);

    return API.script;
});
