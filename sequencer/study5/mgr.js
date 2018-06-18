define(['managerAPI'], function(Manager){
    var API = new Manager();

    API.addSequence([
        { type:'message', keys: ' ', template: 'Have you ever been in therapy?' },
        // This  set task stands in for a user interaction
        { type:'set', path: 'global.therapy.questions.hadTherapy.response', value: 'no' },
        {
            mixer:'branch',
            conditions: [
                {compare: 'global.therapy.questions.hadTherapy.response', to: 'yes'}
            ],
            data: [
                { type:'message', keys: ' ', template: 'Please elaborate on your experience in therapy' },
            ]
        },

        { type:'message', keys: ' ', template: 'Do you suffer from Social Anxiety Disorder?' },
        { type:'set', path: 'global.therapy.questions.hadSAD.response', value: 'yes' },
        {
            mixer:'branch',
            conditions: [
                {compare: 'global.therapy.questions.hadSAD.response', to: 'yes'}
            ],
            data: [
                { type:'message', keys: ' ', template: 'Social Anxiety task' },
            ],
            elseData: [
                { type:'message', keys: ' ', template: 'General population task' },
            ]
        },

        { type:'set', path: 'global.therapy.questions.hadSAD.response', value: 'yes' },
        { type:'set', path: 'global.therapy.questions.hadSAD.response', value: 23},
        {
            mixer:'branch',
            conditions: [
                {compare: 'global.therapy.questions.hadSAD.response', to: 'yes'},
                {compare: 'global.therapy.questions.BDI.response', operator: 'greaterThanOrEquals', to: 29}
            ],
            data: [
                { type:'message', keys: ' ', template: 'Social Anxiety AND depression task' },
            ]
        },

        { type:'set', path: 'global.therapy.questions.primaryDiagnosis.response', value: 'depression'},
        {
            mixer: 'multiBranch',
            branches: [
                {
                    conditions: [
                        {compare: 'global.therapy.questions.primaryDiagnosis.response', to: 'SAD'},
                    ],
                    data: [
                        { type:'message', keys: ' ', template: 'Social Anxiety Disorder questionnaire' },
                    ]
                },
                {
                    conditions: [
                        {compare: 'global.therapy.questions.primaryDiagnosis.response', to: 'depression'},
                    ],
                    data: [
                        { type:'message', keys: ' ', template: 'Major Depression questionnaire' },
                    ]
                },
                {
                    conditions: [
                        {compare: 'global.therapy.questions.primaryDiagnosis.response', to: 'panic'},
                    ],
                    data: [
                        { type:'message', keys: ' ', template: 'Panic Disorder questionnaire' },
                    ]
                }
            ],
            elseData: [
                { type:'message', keys: ' ', template: 'Unspecified Disorder questionnaire' },
            ]
        }
    ]);

    return API.script;
});
