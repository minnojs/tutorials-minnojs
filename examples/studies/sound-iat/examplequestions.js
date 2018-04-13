define(['questAPI'], function(Quest){
	var API = new Quest();

    /***
     * Shows one example for each question type. 
     * Please visit the documentation website to learn more about these types.
    ***/

	API.addQuestionsSet('basicDrop',
	{
		type: 'dropdown',
		numericValues:true,
		answers : ['Strongly Disagree', 'Disagree', 'Agree', 'Strongly Agree']
	});

	API.addQuestionsSet('basicSelect',
	{
		type: 'selectOne',
		numericValues:true,
		style:'multiButtons',
		errorMsg: {
			required: "Please select an answer, or click 'decline to answer'"
		},
		answers : ['Strongly Disagree', 'Disagree', 'Agree', 'Strongly Agree']
	});
	
	API.addQuestionsSet('basicSelectMulti',
	{
        type: 'selectMulti',
		numericValues:true,
        style: 'multiButtons'
    });

	API.addQuestionsSet('basicGrid',
    {
        type: 'grid',
        columns: ['Strongly agree' , 'agree' , 'don\'t know' , 'disagree' , 'Strongly disagree']
    });

	API.addQuestionsSet('basicMultiGrid',
    {
        type: 'multiGrid',
        columns: [
            {stem:'Gender', type:'dropdown', answers: ['Male', 'Female']},
            'Study together',
            'Work together',
            {stem:'Description', type:'input'}
        ],
        rows: ['Friend 1', 'Friend 2' ]
    });

	API.addQuestionsSet('basicTextNumber',
	{
        type: 'textNumber'
    });

	API.addQuestionsSet('basicText',
	{
        type: 'text'
    });

	API.addQuestionsSet('basicSlider',
	{
        type: 'slider', 
        min:1,
        max:100,
        steps:100
    });

	API.addQuestionsSet('basicRank',
	{
        type: 'rank'
    });

	API.addQuestionsSet('myQuestions',
	[
		{
	        inherit : 'basicSlider', name:'sliders', 
	        stem: 'How much do you like this question?', 
	        labels: ['Dislike', 'Neutral', 'Like']
        },
        {
            inherit : 'basicDrop', name:'drop',
	        stem : 'There is never a good reason to use a dropdown menu in a question.'
        },
    	{
            inherit : 'basicSelect', name:'satisfy',
	        stem : 'On the whole, I am satisfied with myself.'
    	},
	    {
            inherit : 'basicSelectMulti', name:'breakfast',
            minWidth: '13%',
            stem: 'Please select all the days in which days you had breakfast last week.',
            answers: [
                'Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'
            ]
    	},
		{
	        inherit : 'basicRank', name:'days', 
	        stem: 'Please rank the days of the week.', 
	        list: [
                'Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'
            ]
        },
	    {
            inherit:'basicGrid',  name:'life',
            stem: 'Please state your agreement with the following statement?',
            rows: ['Life is good', 'Life is not so good']
	    },
        {
            inherit : 'basicMultiGrid', name:'whatisthis'
        },
		{
	        inherit : 'basicText', name:'age', pattern:'^[0-9]*$',
	        stem : "What is your age?", errorMsg:{pattern: "Digits only please"}
        },
		{
	        inherit : 'basicTextNumber', name:'agewish', 
	        stem : "What is your wishful age?"
        }
	]);

	API.addSequence(
	[
	    {
	        mixer:'repeat',
	        times:9,
	        data:
	        {
        		progressBar: '<%= pagesMeta.number %> out of 9',
	            header:'Example for question types',
                questions : {inherit : {set:'myQuestions', type:'sequential'}}
            }
	    }
	]);

	return API.script;
});
		

