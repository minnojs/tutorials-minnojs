define(['managerAPI'], function(Manager){
    var API = new Manager();

    API.addSequence([
        { type:'message', keys: ' ', template: 'Introduction' },
        {
            mixer:'choose',
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
                }
            ]
        },
        { type:'message', keys: ' ', template: 'The rest of the study' }
    ]);

    return API.script;
});
