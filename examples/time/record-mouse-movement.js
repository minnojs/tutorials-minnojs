define(['pipAPI', 'lodash'], function(APIconstructor, _) {

	var API = new APIconstructor();

	API.addSequence([
		{
			input: [
				{handle:'space',on:'space'}
			],
			stimuli: [
				// This is a stimulus object
				{
                    handle: 'start-message',
					media :{word:'Mouse movement is being tracked'},
					css:{fontSize:'2em',color:'red'}
				},
                {
                    handle: 'end-message',
					media :{word:'No more mouse tracking'},
					css:{fontSize:'2em',color:'green'}
				}
			],
			interactions: [
                {
                    conditions:[{type:'begin'}],
                    actions:[
                        {type:'showStim', handle:'start-message'},
                        /**
                         * Activate mouse tracking
                         * ***********************
                         **/
                        function(e, ed, trial){
                            var listener = _.throttle(function(e){
                                trial.data.mousetracker.push([e.clientX, e.clientY, parseInt(performance.now())]);
                            }, 100);
                            trial.data.mousetracker = [];
                            trial.data.listener = listener;
                            document.addEventListener('mousemove', listener);
                            trial.$events.end.map(function(){ // make sure that the listener is removed at the end of the trial
                                document.removeEventListener('mousemove', listener);
                            });
                        }
                    ]
                },
				{
					conditions: [
						{type:'inputEquals',value:'space'}
					],
					actions: [
                        {type:'showStim', handle:'end-message'},
                        {type:'hideStim', handle:'start-message'},
                        {type:'log'},
                        {type:'trigger',handle:'endTrial',duration:2000},
                        /**
                         * Deactivate mouse tracking
                         * *************************
                         **/
                        function(e, ed, trial){
                            console.log(trial.data.mousetracker);
                            document.removeEventListener('mousemove', trial.data.listener);
                        }
					]
				},
                {
					conditions: [
						{type:'inputEquals',value:'endTrial'}
					],
					actions: [
						{type:'endTrial'}
					]
				}
			]
		}
	]);

	// #### Activate the player
	return API.script;
});
