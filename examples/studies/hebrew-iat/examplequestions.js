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
		answers : ['מאוד לא מסכימ\ה', 'לא מסכימ\ה', 'מסכימ\ה', 'מסכימ\ה מאוד'], 
	});

	API.addQuestionsSet('basicSelect',
	{
		type: 'selectOne',
		numericValues:true,
		style:'multiButtons',
		answers : ['מאוד לא מסכימ\ה', 'לא מסכימ\ה', 'מסכימ\ה', 'מסכימ\ה מאוד'], 
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
        columns : ['מאוד לא מסכימ\ה', 'לא מסכימ\ה', 'מסכימ\ה', 'מסכימ\ה מאוד']
    });

	API.addQuestionsSet('basicMultiGrid',
    {
        type: 'multiGrid',
        columns: [
            {stem:'מגדר', type:'dropdown', answers: ['גבר', 'אישה']},
            'מהלימודים',
            'מהעבודה',
            {stem:'תיאור', type:'input'}
        ],
        rows: ['חבר\ה 1', 'חבר\ה 2' ]
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
	        stem: 'עד כמה את\ה מחבב\ת את השאלה הזו?', 
	        labels: ['לא מחבבת', 'נייטרלית', 'מחבבת']
        },
        {
            inherit : 'basicDrop', name:'drop',
	        stem : 'שאלות עם תפריט שכזה אינן רעיון טוב.'
        },
    	{
            inherit : 'basicSelect', name:'satisfy',
	        stem : 'בסה"כ, אני מרוצה מעצמי.'
    	},
	    {
            inherit : 'basicSelectMulti', name:'breakfast',
            minWidth: '13%',
            stem: 'בחר\י את כל הימים בשבוע שעבר בהם אכלת ארוחת בוקר',
            answers: [
                'ראשון','שני','שלישי','רביעי','חמישי','שישי','שבת'
            ]
    	},
		{
	        inherit : 'basicRank', name:'days', 
	        stem: 'אנא דרג\י את הימים בשבוע מהאהוב ביותר לשנוא ביותר', 
	        list: [
                'ראשון','שני','שלישי','רביעי','חמישי','שישי','שבת'
            ]
        },
	    {
            inherit:'basicGrid',  name:'life',
            stem: 'עד כמה את\ה מסכימ\ה עם ההיגדים הבאים',
            rows: ['החיים טובים', 'החיים לא משהו']
	    },
        {
            inherit : 'basicMultiGrid', name:'whatisthis'
        },
		{
	        inherit : 'basicText', name:'age', pattern:'^[0-9]*$',
	        stem : "מה גילך?", errorMsg:{pattern: "ספרות בלבד"}
        },
		{
	        inherit : 'basicTextNumber', name:'agewish', 
	        stem : "לאיזה גיל היית רוצה לחזור?"
        }
	]);

	API.addSequence(
	[
	    {
	        mixer:'repeat',
	        times:9,
	        data:
	        {
                progressBar: '<%= pagesMeta.number %>/9',
                header:'דוגמאות לסוגי שאלות',
                questions : {inherit : {set:'myQuestions', type:'sequential'}}
            }
	    }
	]);

	return API.script;
});
		


