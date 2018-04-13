define(['pipAPI', './iatextension.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();
	var global = API.getGlobal();

	return iatExtension({
		category1 : {
			name : 'מזרחים', //Will appear in the data.
			title : {
				media : {word : 'מזרחים'}, //Name of the category presented in the task.
				css : {color:'#336600','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: "מועלם"},
				{word: "בוסקילה"},
				{word: "אמזלג"},
				{word: "אוחיון"},
				{word: "ביטון"}
			],
			//Stimulus css (style)
			stimulusCss : {color:'#336600','font-size':'2.3em'}
		},
		category2 :	{
			name : 'אשכנזים', //Will appear in the data.
			title : {
				media : {word : 'אשכנזים'}, //Name of the category presented in the task.
				css : {color:'#336600','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: 'בלומפלד'},
				{word: 'ברגסון'},
				{word: 'רוזנסקי'},
				{word: 'אייזנברג'},
				{word: 'גליקסון'}
			],
			//Stimulus css
			stimulusCss : {color:'#336600','font-size':'2.3em'}
		},
		attribute2 : 
		{
			name : 'מילים חיוביות', 
			title : {
				media : {word : 'מילים חיוביות'}, 
				css : {color:'#0000FF','font-size':'2em'}, 
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: 'כיף'},
				{word: 'נהדר'},
				{word: 'שמחה'},
				{word: 'שלום'},
				{word: 'אושר'},
				{word: 'נפלא'}
			], 
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'1.8em'} 
		},
		attribute1 : 
		{
			name : 'מילים שליליות', 
			title : {
				media : {word : 'מילים שליליות'}, 
				css : {color:'#0000FF','font-size':'2em'}, 
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: 'נורא'},
				{word: 'איום'},
				{word: 'רשע'},
				{word: 'כשלון'},
				{word: 'כאב'},
				{word: 'צער'}
			], 
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'1.8em'}
		},

		leftKeyText : 'E לשמאל', 
		rightKeyText : 'I לימין', 
		//Text and style for the separator between the top and bottom category labels.
		orText : 'או', 
		finalText : 'לחצו על מקש הרווח בכדי להמשיך למטלה הבאה', 			

		base_url : {//Where are your images at?
			image : global.mediaURL
		},

        instAttributePractice: '<div><p align="center" style="font-size:20px; font-family:arial; direction: rtl">' +
            '<font color="#000000"><u> חלק blockNum מתוך nBlocks </u><br/><br/></p>' +
			'<p style="font-size:20px; text-align: right; vertical-align:bottom; margin-right:10px; font-family:arial; direction: rtl">' +
            'הקישו באצבע שמאל על מקש <b>E</b> ' + 
            'עבור פריטים ששייכים לקטגוריה <font color="#0000ff">leftAttribute</font>.<br/>'+
            'הקישו באצבע ימין על מקש <b>I</b> '+ 
            'עבור פריטים ששייכים לקטגוריה <font color="#0000ff">rightAttribute</font>.<br/><br/>'+
            'אם תבצעו טעות, <font color="#ff0000"><b>X</b></font> אדום יופיע. '+
			'לחצו על המקש האחר כדי להמשיך.<br/>' +
			'<u>השיבו מהר ככל האפשר אך היו מדויקים</u>.<br/><br/></p>'+
			'<p align="center">לחצו על מקש הרווח כאשר אתם מוכנים להתחיל</font></p></div>'			,			

		instCategoriesPractice: '<div><p align="center" style="font-size:20px; font-family:arial; direction: rtl">' +
            '<font color="#000000"><u> חלק blockNum מתוך nBlocks </u><br/><br/></p>' +
			'<p style="font-size:20px; text-align:right; vertical-align:bottom; margin-right:10px; font-family:arial; direction: rtl">' +
            'לחצו באצבע שמאל על מקש <b>E</b> ' + 
            'עבור פריטים ששייכים לקטגוריה <font color="#336600">leftCategory</font>.<br/>'+
            'לחצו באצבע ימין על מקש <b>I</b> ' + 
            'עבור פריטים ששייכים לקטגוריה <font color="#336600">rightCategory</font>.<br/><br/>'+
            'אם תבצעו טעות, <font color="#ff0000"><b>X</b></font> אדום יופיע. '+
			'לחצו על המקש האחר כדי להמשיך.<br/>' +
			'<u>השיבו מהר ככל האפשר אך היו מדויקים</u>.<br/><br/></p>'+
			'<p align="center">לחצו על מקש הרווח כאשר אתם מוכנים להתחיל</font></p></div>'			,			

		instFirstCombined : '<div><p align="center" style="font-size:20px; font-family:arial; direction: rtl">' +
            '<font color="#000000"><u> חלק blockNum מתוך nBlocks </u><br/><br/></p>' +
			'<p style="font-size:20px; text-align: right; vertical-align:bottom; margin-right:10px; font-family:arial; direction: rtl">' +
            'לחצו באצבע שמאל על מקש <b>E</b> '+ 
            'עבור פריטים ששייכים לקטגוריה <font color="#0000ff">leftAttribute</font> ' +
            'או עבור פריטים ששייכים לקטגוריה <font color="#336600">leftCategory</font>.<br/>'+
            'לחצו באצבע ימין על מקש <b>I</b> ' + 
            'עבור פריטים ששייכים לקטגוריה <font color="#0000ff">rightAttribute</font> '+
            'או עבור פריטים ששייכים לקטגוריה <font color="#336600">rightCategory</font>.<br/>'+
			'כל פריט מתאים רק לקטגוריה אחת.<br/><br/>' +
            'אם תבצעו טעות, <font color="#ff0000"><b>X</b></font> אדום יופיע. '+
			'לחצו על המקש האחר כדי להמשיך.<br/>' +
			'<u>השיבו מהר ככל האפשר אך היו מדויקים</u>.<br/><br/></p>'+
			'<p align="center">לחצו על מקש הרווח כאשר אתם מוכנים להתחיל</font></p></div>'			,			
		
		instSecondCombined : '<div><p align="center" style="font-size:20px; font-family:arial; direction: rtl">' +
            '<font color="#000000"><u> חלק blockNum מתוך nBlocks </u><br/><br/></p>' +
			'<p style="font-size:20px; text-align: right; vertical-align:bottom; margin-right:10px; font-family:arial; direction: rtl">' +
            'לחצו באצבע שמאל על מקש <b>E</b> '+ 
            'עבור פריטים ששייכים לקטגוריה <font color="#0000ff">leftAttribute</font> '+
            'או עבור פריטים ששייכים לקטגוריה <font color="#336600">leftCategory</font>.<br/>'+
            'לחצו באצבע ימין על מקש <b>I</b> '+ 
            'עבור פריטים ששייכים לקטגוריה <font color="#0000ff">rightAttribute</font> ' +
            'או עבור פריטים ששייכים לקטגוריה <font color="#336600">rightCategory</font>.<br/>'+
			'כל פריט מתאים רק לקטגוריה אחת.<br/><br/>' +
            'אם תבצעו טעות, <font color="#ff0000"><b>X</b></font> אדום יופיע. '+
			'לחצו על המקש האחר כדי להמשיך.<br/>' +
			'<u>השיבו מהר ככל האפשר אך היו מדויקים</u>.<br/><br/></p>'+
			'<p align="center">לחצו על מקש הרווח כאשר אתם מוכנים להתחיל</font></p></div>'			,			
		
		instSwitchCategories : '<div><p align="center" style="font-size:20px; font-family:arial; direction: rtl">' +
            '<font color="#000000"><u> חלק blockNum מתוך nBlocks </u><br/><br/></p>' +
			'<p style="font-size:20px; text-align: right; vertical-align:bottom; margin-right:10px; font-family:arial; direction: rtl">' +
			'<b>שימו לב! הקטגוריות החליפו מיקום</b>.<br/>' +
            'לחצו באצבע שמאל על מקש <b>E</b> '+ 
            'עבור פריטים ששייכים לקטגוריה <font color="#336600">leftCategory</font>.<br/>'+
            'לחצו באצבע ימין על מקש <b>I</b> '+ 
            'עבור פריטים ששייכים לקטגוריה <font color="#336600">rightCategory</font>.<br/>'+
			'<u>השיבו מהר ככל האפשר אך היו מדויקים</u>.<br/><br/></p>'+
			'<p align="center">לחצו על מקש הרווח כאשר אתם מוכנים להתחיל</font></p></div>'
	});
});

