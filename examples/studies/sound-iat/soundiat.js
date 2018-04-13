define(['pipAPI', './iatsoundextension.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();
	var global = API.getGlobal();
	var soundURL = global.mediaURL;

	return iatExtension({
		category1 : {
			name : 'Black People', //Will appear in the data.
			title : {
				media : {image : soundURL+'bm1_nc.jpg'}, //Name of the category presented in the task.
				//If you want to use text:
				//media : {word : 'Black people'}, //Name of the category presented in the task.
				css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{image: 'bf1_nc.jpg'},
				{image: 'bf2_nc.jpg'},
				{image: 'bf3_nc.jpg'},
				{image: 'bm1_nc.jpg'},
				{image: 'bm2_nc.jpg'},
				{image: 'bm3_nc.jpg'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31b404','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'White People', //Will appear in the data.
			title : {
				media : {image : soundURL+'wm1_nc.jpg'}, //Name of the category presented in the task.
				//If you want to use text:
				//media : {word : 'White people'}, //Name of the category presented in the task.
				css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{image: 'wf1_nc.jpg'},
				{image: 'wf2_nc.jpg'},
				{image: 'wf3_nc.jpg'},
				{image: 'wm1_nc.jpg'},
				{image: 'wm2_nc.jpg'},
				{image: 'wm3_nc.jpg'}
			], 
			//Stimulus css
			stimulusCss : {color:'#31b404','font-size':'1.8em'}
		},
		attribute2 : 
		{
			name : 'Good words', 
			title : {
				media : {image : soundURL+'good.jpg'}, 
				//If you want to use text:
				//media : {word : 'Good words'}, //Name of the category presented in the task.
				css : {color:'#0000FF','font-size':'2em'}, 
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: ' ', sound:soundURL+'Ffun.wav', alias:'Ffun'},
				{word: ' ', sound:soundURL+'Fnice.wav', alias:'Fnice'},
				{word: ' ', sound:soundURL+'Fgood.wav', alias:'Fgood'},
				{word: ' ', sound:soundURL+'Fhappy.wav', alias:'Fhappy'}
			], 
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'1.8em'} 
		},
		attribute1 : 
		{
			name : 'Bad words', 
			title : {
				media : {image:soundURL+'bad.jpg'}, 
				//If you want to use text:
				//media : {word : 'Bad words'}, //Name of the category presented in the task.
				css : {color:'#0000FF','font-size':'2em'}, 
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
				
				{word: ' ', sound:soundURL+'Fbad.wav', alias:'Fbad'},
				{word: ' ', sound:soundURL+'Fmad.wav', alias:'Fmad'},
				{word: ' ', sound:soundURL+'Fmean.wav', alias:'Fmean'},
				{word: ' ', sound:soundURL+'Fyucky.wav', alias:'Fyucky'}
			], 
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'1.8em'}
		},	

		////In each block, we can include a number of mini-blocks, to reduce repetition of same group/response.
		blockSwitch_nTrials : 40, //Default is 24, but the demo studies are using 40 currently.
		blockSwitch_nMiniBlocks : 5, 

		fb_strong_Att1WithCatA_Att2WithCatB : 'Your data suggest strong automatic preference for categoryB over categoryA.',
		fb_moderate_Att1WithCatA_Att2WithCatB : 'Your data suggest moderate automatic preference for categoryB over categoryA.',
		fb_slight_Att1WithCatA_Att2WithCatB : 'Your data suggest weak automatic preference for categoryB over categoryA.',
		fb_equal_CatAvsCatB : 'Your data suggest no automatic preference between categoryA and categoryB.',

		fontColor : '#000000', //The default color used for printed messages.

		ITIDuration : 500, //Duration between trials.

		//Instructions text.
		// You can use the following variables and they will be replaced by 
		// the name of the categories and the block's number variables:
		// leftCategory, rightCategory, leftAttribute and rightAttribute, blockNum, nBlocks.
		// Notice that this is HTML text.
		instAttributePractice: '<div><p align="center" style="font-size:20px; font-family:arial">' +
			'<font color="#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' + 
			'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' + 
			'Press the <b>E</b> key when you hear <font color="#0000ff">leftAttribute.</font>' + 
			'<br/>Press the <b>I</b> key when you hear <font color="#0000ff">rightAttribute</font>.<br/><br/>' + 
			'If a red <font color="#ff0000"><b>X</b></font> appears press the other key. ' +  
			'<u>Go as fast as you can</u>.<br/><br/>'+
			'<p align="center">Press the <b>space bar</b> when you are ready to start.</font></p></div>', 
		instCategoriesPractice: '<div><p align="center" style="font-size:20px; font-family:arial">' +
			'<font color="#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' + 
			'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' + 
			'Press the <b>E</b> key for <font color="#31b404">leftCategory</font> images. ' + 
			'<br/>Press the <b>I</b> key for <font color="#31b404">rightCategory</font> images.<br/>' + 
			'Items will appear one at a time.<br/><br/>' + 
			'If a red <font color="#ff0000"><b>X</b></font> appears press the other key. ' + 
			'<u>Go as fast as you can</u>.<br/><br/>'+
			'<p align="center">Press the <b>space bar</b> when you are ready to start.</font></p></div>', 
		instFirstCombined : '<div><p align="center" style="font-size:20px; font-family:arial">' +
			'<font color="#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' + 
			'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' + 
			'Press the <b>E</b> key for <font color="#31b404">leftCategory</font> images and for sounds of <font color="#0000ff">leftAttribute</font><br/>' + 
			'Press the <b>I</b> key for <font color="#31b404">rightCategory</font> images and for sounds of <font color="#0000ff">rightAttribute</font><br/>' + 
			'If a red <font color="#ff0000"><b>X</b></font> appears press the other key.' + 
			' <u>Go as fast as you can</u>.<br/><br/>' + 
			'<p align="center">Press the <b>space bar</b> when you are ready to start.</font></p></div>', 
		instSecondCombined : '<div><p align="center" style="font-size:20px; font-family:arial">' +
			'<font color="#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' + 
			'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' + 
			'This is the same as the last part.<br/>' + 
			'Press the <b>E</b> key for <font color="#31b404">leftCategory</font> images and for sounds of <font color="#0000ff">leftAttribute</font><br/>' + 
			'Press the <b>I</b> key for <font color="#31b404">rightCategory</font> images and for sounds of <font color="#0000ff">rightAttribute</font><br/>' + 
			'<u>Go as fast as you can</u>.<br/><br/>' + 
			'<p align="center">Press the <b>space bar</b> when you are ready to start.</font></p></div>', 
		instSwitchCategories : '<div><p align="center" style="font-size:20px; font-family:arial">' +
			'<font color="#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' + 
			'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' + 
			'<b>Watch out, the labels have changed position!</b><br/>' + 
			'Press the <b>E</b> key for <font color="#31b404">leftCategory</font> images.<br/>' + 
			'Press the <b>I</b> key for <font color="#31b404">rightCategory</font> images.<br/><br/>' + 
			'<u>Go as fast as you can.</u><br/><br/>' + 
			'<p align="center">Press the <b>space bar</b> when you are ready to start.</font></p></div>', 

		canvas : {
			maxWidth: 725,
			proportions : 0.7,
			background: '#ffffff',
			borderWidth: 5,
			canvasBackground: '#ffffff',
			borderColor: 'lightblue'
		},

		base_url : {//Where are your images at?
			image : global.mediaURL
		} 
	});
});

