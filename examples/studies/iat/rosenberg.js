define(['questAPI'], function(Quest){
	var API = new Quest();

    /***
     * Example for a questionnaire (Rosenberg's self-esteem).
    ***/

	API.addQuestionsSet('basicSelect',
	{
		type: 'selectOne',
		autoSubmit:true, 
		style:'multiButtons',
		numericValues:true,
		errorMsg: {
			required: "Please select an answer, or click 'decline to answer'"
		},
		answers : ['Strongly Disagree', 'Disagree', 'Agree', 'Strongly Agree'], 
		help: '<%= pagesMeta.number < 3 %>',
		helpText: 'Tip: For quick response, click to select your answer, and then click again to submit.'
	});

	API.addQuestionsSet('item',
	[
		{inherit : 'basicSelect', name:'item1',
		stem : 'On the whole, I am satisfied with myself.'},
		{inherit : 'basicSelect', name:'item2',
		stem : 'At times I think I am no good at all.'},
		{inherit : 'basicSelect', name:'item3',
		stem : 'I feel that I have a number of good qualities.'},
		{inherit : 'basicSelect', name:'item4',
		stem : 'I am able to do things as well as most other people.'},
		{inherit : 'basicSelect', name:'item5',
		stem : 'I feel I do not have much to be proud of.'},
		{inherit : 'basicSelect', name:'item6',
		stem : 'I certainly feel useless at times.'},
		{inherit : 'basicSelect', name:'item7',
		stem : 'I wish I could have more respect for myself.'},
		{inherit : 'basicSelect', name:'item8',
		stem : 'All in all, I am inclined to feel that I am a failure.'},
		{inherit : 'basicSelect', name:'item9',
		stem : 'I take a positive attitude toward myself.'},
		{inherit : 'basicSelect', name:'item10',
		stem : "I feel that I'm a person of worth, at least on an equal plane with others."}
	]);

	API.addPagesSet('basicPage',{
		decline: true,
		numbered: false,
		progressBar: 'Page <%= pagesMeta.number %> out of 10'
	});

	API.addSequence(
	[
		{
			mixer : 'repeat',
			times : 10,
			data :
			[
			    {
		            inherit:'basicPage',
		            questions : {inherit:{set:'item', type:'exRandom'}}
            	}
			]
		}
	]);

	return API.script;
});
		


