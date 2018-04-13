define(['questAPI'], function(quest){
	var API = new quest();
	var global = API.getGlobal();

	/**
	Settings
	**/
	API.addSettings('logger', 
	{
		url: '/implicit/PiQuest'
	});
	/*API.addSettings('DEBUG', {
        tags: 'all',
        level: 'debug'
    });*/
	API.addQuestionsSet('basicSelect', 
	{
		type: 'selectOne',
		autoSubmit:true, 
		required: true,
		numericValues:true, 
		help: '<%= pagesMeta.number < 3 %>'
	});
	
	API.addQuestionsSet('text', 
	{
		type: 'textarea',
		autoSubmit:true, 
		required: true,
		numericValues:true
	});
	
	API.addQuestionsSet('genderQ', 
	{
		answers: ["נ", "ז"],
		inherit : 'basicSelect'
	});
	API.addQuestionsSet('langQ', 
	{
    	answers: ["עברית", "ערבית","רוסית", "אמהרית", "תגרית", "אחר"],
		inherit : 'basicSelect'
	});
	
	API.addQuestionsSet('gender', 
	[
		{
			inherit : 'genderQ',
			name : 'gender', 
		    stem: '<p style="text-align:right; direction:rtl">מין:</p>'
		}
	]);	
	
	API.addQuestionsSet('lang', 
	[
		{
			inherit : 'langQ',
			name : 'lang', 
		    stem: '<p style="text-align:right; direction:rtl">שפת אם:</p>',
		    helpText: '<p style="text-align:right; direction:rtl">לחיצה על תשובה פעם אחת צובעת אותה בכחול.<br/>אתם יכולים לשנות את תשובתכם ע״י לחיצה על אפשרות אחרת.<br/>כדי לאשר את תשובתכם, לחצו על האפשרות בכחול פעם שניה, או לחצו על ״המשך״.</p>'

		}
	]);	
	
	API.addQuestionsSet('sub_number', 
	[
		{
			inherit : 'text',
			name : 'sub_number', 
		    stem: '<p style="text-align:right; direction:rtl">מספר נבדק:</p>'
		}
	]);	
	
	API.addQuestionsSet('age', 
	[
		{
			inherit : 'text',
			name : 'age', 
		    stem: '<p style="text-align:right; direction:rtl">גיל:</p>'
		}
	]);	

	/**
	Pages
	**/
	API.addPagesSet('page', 
	{
		headerStyle : {'font-size':'1em', 'text-align':'right','direction': 'rtl'},
		decline:false,
		submitText: "המשך",
		v1style:2,
		numbered: false
	});



	/**
	Sequence
	**/
	API.addSequence([
	   {mixer:'random',
	   data :[
	   			{
				mixer:'wrapper',
				data :
				[
		   {
			   mixer : 'repeat', 
			   times : 1,
			   data : 
			   [
				   {
					   inherit : 'page', 
				  	   questions : [
				  	       {inherit:{set:'sub_number', type:'exRandom'}},
				  	       {inherit:{set:'age', type:'exRandom'}},
				  	       {inherit:{set:'gender', type:'exRandom'}}				  	       ]
				    },
				    {
					   inherit : 'page', 
				  	   questions : 
				  	       {inherit:{set:'lang', type:'exRandom'}}
				    }
			    ]
		    }
			]}
		]}
	]);
	
	/**
	Return the script to piquest's god, or something of that sort.
	**/
	return API.script;
});