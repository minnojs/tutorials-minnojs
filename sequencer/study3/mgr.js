define(['managerAPI'], function(Manager){

    var API = new Manager();

    API.addSequence([
        {
            mixer:'random',
            data: [
                {
                    mixer:'wrapper',
                    data: [
                        { type:'message', keys: ' ', template: 'Instructions for task 1' },
                        { type:'message', keys: ' ', template: 'Task 1' },
                    ]
                },
                {
                    mixer:'wrapper',
                    data: [
                        { type:'message', keys: ' ', template: 'Instructions for task 2' },
                        { type:'message', keys: ' ', template: 'Task 2' }       
                    ]
                },
                {
                    mixer:'wrapper',
                    data: [
                        { type:'message', keys: ' ', template: 'Instructions for task 3' },
                        {
                            mixer: 'random',
                            data: [
                                { type:'message', keys: ' ', template: 'Task 3a' },
                                { type:'message', keys: ' ', template: 'Task 3a' }       
                            ]
                        }
                    ]
                }
            ]
        }
    ]);

    return API.script;
});
