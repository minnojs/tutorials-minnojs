define(['managerAPI'], function(Manager){

    var API = new Manager();
    var timeUrl = 'https://app-prod-03.implicit.harvard.edu/implicit/common/all/js/pip/0.3/dist/js/';

    // a trick to get the path realtive to the manager file
    var mediaURL = document.querySelector('[pi-manager]').getAttribute('pi-manager').replace(/[^/]+$/g, 'media/');
    API.addGlobal({mediaURL:mediaURL });

    //Important for the right-left presentation
    API.addSettings('injectStyle', '.list-group-item {text-align:right}label{width:100%}');
    API.addSettings('skip',true);

    API.addTasksSet({

        instructions: [{
            type: 'message',
            buttonText: 'Click here to play the super fun game!'
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

        demog : [{
            type: 'quest', name: 'demog', scriptUrl: 'demog.js'
        }], 
        simpleq : [{
            type: 'quest', name: 'simpleq', scriptUrl: 'simpleq.js'
        }], 
        exampleq : [{
            type: 'quest', name: 'exampleq', scriptUrl: 'examplequestions.js'
        }], 

        iatmiz: [{
            type: 'pip',
            name: 'iatmiz',
            version: '0.3',
            scriptUrl: 'iatmiz.js',
            baseUrl: timeUrl
        }]

    });

    API.addSequence([
        {inherit: 'demog'},
        {inherit: 'instiat'},
        {inherit: 'iatmiz'},
        {inherit: 'instqst'},
        {inherit: 'simpleq'},
        {inherit: 'exampleq'},
        {type:'postCsv',url:'csv.php'},
        {inherit: 'end'}
    ]);

    return API.script;
});
