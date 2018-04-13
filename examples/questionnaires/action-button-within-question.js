define(['questAPI'], function(Quest){
    var API = new Quest();

    API.addQuestionsSet('sound',{
        type:'slider',
        stem: '<%= questionsData.stem %> '
            + '<button class="play-sound btn btn-default"><span class="glyphicon glyphicon-volume-up" aria-hidden="true"></span></button>',

        onLoad: function(question, current){
            var nodeList = document.getElementsByClassName('play-sound'); // can't use id because onLoad there can be multiple elements with the same id
            for (var i = 0; i < nodeList.length; i++) nodeList[i].addEventListener('click', soundListener);

            function soundListener(){
                if (current.audio) current.audio.pause();
                current.audio = new Audio(question.data.src);
                current.audio.play();
            }
        }
    });

    API.addSequence(
        [
            {questions: [
                {inherit: 'sound', data: {stem: 'Hi Boss', src: '/test/sound/Fmean.wav'}, name:1}
            ]},
            { questions: [
                {inherit: 'sound', data: {stem: 'Yo man', src: '/test/sound/Fnice.wav'}, name:2}
            ]},
        ]);
    return API.script;
});
