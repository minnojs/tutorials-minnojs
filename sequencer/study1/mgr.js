define(['managerAPI'], function(Manager){

    var API = new Manager();

    API.addSequence([
        {
            type:'message',
            keys: ' ',
            template: 'Task 1'
        },
        {
            type:'message',
            keys: ' ',
            template: 'Task 2'
        },
        {
            type:'message',
            keys: ' ',
            template: 'Task 3'
        },
        {
            type:'message',
            keys:' ',
            template: 'Task 4'

        }
    ]);

    return API.script;
});
