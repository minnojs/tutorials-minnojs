define(['managerAPI'], function(Manager){

    var API = new Manager();
    var timeUrl = 'https://app-prod-03.implicit.harvard.edu/implicit/common/all/js/pip/0.3/dist/js/';

    // a trick to get the path realtive to the manager file
    var mediaURL = document.querySelector('[pi-manager]').getAttribute('pi-manager').replace(/[^/]+$/g, 'media/');
    API.addGlobal({mediaURL:mediaURL });

    API.addSettings('skip',true);

    API.addTasksSet({
        instructions: [{
            type: 'message',
            buttonText: 'Click here to play the super fun game!'
        }],

        intro : [{
            inherit:'instructions', name:'realstart', templateUrl: 'intro.jst', title:'Hi there',
            header:'Welcome'
        }],

        instiat : [{
            inherit:'instructions', name:'instiat', templateUrl: 'instiat.jst', title:'The Implicit Association Test',
            header:'The Implicit Association Test'
        }],

        instqst : [{
            inherit:'instructions', name:'instqst', templateUrl: 'instqst.jst', title:'Ready?',
            header:'Questionnaire'
        }],

        end : [{
            inherit:'instructions', name:'end', templateUrl: 'end.jst', title:'Thanks',
            header:'Thank you very much'
        }],

        exampleqs : [{
            type: 'quest', name: 'exmpq', scriptUrl: 'examplequestions.js'
        }], 

        rosenberg : [{
            type: 'quest', name: 'rosenberg', scriptUrl: 'rosenberg.js'
        }], 

        iatrace: [{
            type: 'pip',
            name: 'iatrace',
            version: '0.3',
            scriptUrl: 'iatrace.js',
            baseUrl: timeUrl
        }]
    });


    API.addSequence([
        {inherit: 'intro'},
        {inherit: 'instiat'},
        {inherit: 'iatrace'},
        {inherit: 'instqst'},
        {inherit: 'rosenberg'},
        {inherit: 'exampleqs'},
        {inherit: 'end'}
    ]);

    return API.script;
});
