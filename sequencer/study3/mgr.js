define(['managerAPI'], function(Manager){
  var API = new Manager();

  API.addSequence([
      {
          type:'quest',
          scriptUrl: 'mixers.js',
      }
  ]);

  return API.script;
});
