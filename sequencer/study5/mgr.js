define(['managerAPI'], function(Manager){
    var API = new Manager();

    API.addSequence([
        { type:'quest', scriptUrl: 'remix.js' }
    ]);

    return API.script;
});
