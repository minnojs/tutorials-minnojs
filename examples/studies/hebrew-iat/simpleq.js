define(['questAPI'], function(Quest){
	var API = new Quest();

    /***
     * Example for a questionnaire (Rosenberg's self-esteem).
    ***/

	API.addQuestionsSet('agree',
	{
		type: 'selectOne',
		autoSubmit:true, 
		style:'multiButtons',
		numericValues:true,
		errorMsg: {
			required: "Please select an answer, or click 'decline to answer'"
		},
		answers : ['מאוד לא מסכימ\ה', 'לא מסכימ\ה', 'מסכימ\ה', 'מסכימ\ה מאוד'], 
		help: '<%= pagesMeta.number < 3 %>',
        helpText: '<p style="text-align:right; direction:rtl">לחיצה על תשובה פעם אחת צובעת אותה בכחול.<br/>אתם יכולים לשנות את תשובתכם ע״י לחיצה על אפשרות אחרת.<br/>כדי לאשר את תשובתכם, לחצו על האפשרות בכחול פעם שניה, או לחצו על ״המשך״.</p>'
	});

	API.addQuestionsSet('item',
	[
		{
			inherit : 'agree',
			name : 'iSec', 
		    stem: '<p style="text-align:right; direction:rtl">אנא ציינ/י את מידת הסכמתך עם המשפט הבא: <br/>'+
		    '<b/>אני מזדהה מאוד עם יהודים חילונים</p>'
		}, 
		{
			inherit : 'agree',
			name : 'iArb', 
		    stem: '<p style="text-align:right; direction:rtl">אנא ציינ/י את מידת הסכמתך עם המשפט הבא: <br/>'+
		    '<b/>אני מזדהה מאוד עם ערבים</p>'	
		},
		{
			inherit : 'agree',
			name : 'iOrt', 
		    stem: '<p style="text-align:right; direction:rtl">אנא ציינ/י את מידת הסכמתך עם המשפט הבא: <br/>'+
		    '<b/>אני מזדהה מאוד עם יהודים חרדים</p>'
		}
	]);

	API.addPagesSet('basicPage', 
	{
		headerStyle : {'font-size':'1em', 'text-align':'right','direction': 'rtl'},
		decline:false,
		submitText: "המשך",
		progressBar: 'Page <%= pagesMeta.number %> out of 3',
		numbered: false
	});


	API.addSequence(
	[
		{
			mixer : 'repeat',
			times : 3,
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
		



