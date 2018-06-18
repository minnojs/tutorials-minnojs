define(['managerAPI'], function(Manager){
    var API = new Manager();

    // set up inheritance
    API.addTasksSet('intensiveTask', [
        { type:'message', keys: ' ', template: 'intensiveTask1' },
        { type:'message', keys: ' ', template: 'intensiveTask2' },
        { type:'message', keys: ' ', template: 'intensiveTask3' }
    ]);

    // the sequence itself
    API.addSequence([
        {
            mixer:'repeat',
            times:3,
            data: [
                { type:'message', keys: ' ', template: 'Repeated task A' },
                { type:'message', keys: ' ', template: 'Repeated task B' }
            ]
        },
        {
            mixer:'repeat',
            times: 3,
            data: [
                { inherit: {type:'exRandom', set:'intensiveTask'}, name: 'intensive<%= tasksMeta.number %>' },
                { type:'message', keys: ' ', template: 'Relaxation' },
                { type:'message', keys: ' ', template: 'Same questionnaire, different name', name: 'quest<%= tasksMeta.number -2 %>'  },
            ]
        }
    ]);

    return API.script;
});
