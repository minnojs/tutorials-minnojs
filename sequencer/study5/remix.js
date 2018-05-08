define(['questAPI'], function(Quest){
    var API = new Quest();

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
                    mixer: 'branch',
                    remix: true,
                    conditions: [
                        {compare:'current.questions.targetName.response', to: 'Adam'}
                    ],
                    data: [
                        {type:'info', stem:'Displayed only when Adam was chosen'}
                    ],
                    elseData: [
                        { type:'info', stem: 'Please choose Adam and see what happens' }
                    ]
                }
            ]
        }
    ]);

    return API.script;
});
