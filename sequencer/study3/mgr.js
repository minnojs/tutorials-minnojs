define(['managerAPI'], function(Manager){
  var API = new Manager();

  API.addSequence([
      { type:'quest', scriptUrl: 'mixers.js' },
      { type:'quest', scriptUrl: 'complexMixer.js' }
  ]);

  return API.script;
});
