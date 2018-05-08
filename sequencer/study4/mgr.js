define(['managerAPI'], function(Manager){
    var API = new Manager();

    API.addSequence([
        { type:'quest', scriptUrl: 'branches.js' }
    ]);

    return API.script;
});
