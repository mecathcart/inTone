var i = 0;

/*creates audio div*/
var intoneAudio = document.createElement("audio");
intoneAudio.id = "intone_stimuli";
audio_div.appendChild(intoneAudio);

var complimentCount = 0;
var stressCount = 0;
var verbCount = 0;

/*The function that is called when the practice button is clicked*/
var practice = function(){

	/*hide start button and instructions*/
	$("h2").hide();
	$("#practice_instructions").hide();
	$("#start_practice").hide();
		
	nextPracticeStimuli();
	
}

var correctAnswer = 0;
var totalAnswer = 0;

var clickContA = function(){
	totalAnswer++;
	var sample = window.practiceStimuli[i];	
	if(sample.audioI == intoneAudio.src){
		correctAnswer++;
		console.log(correctAnswer);
	}
	nextPracticeStimuli();

}

var nextPracticeStimuli =  function(){
 /*Go through stimuli*/
	if(i < practiceStimuli.length){	

		var sample = window.practiceStimuli[i];	

		/* Plays audio stimuli*/	
		if (sample.hasOwnProperty('audio') ) {
			intoneAudio.src = sample.audio;
			playAudioFile("intone_stimuli");
		}else{
			if(sample.category == 'compliment'){
				if(complimentCount < 1){
					intoneAudio.src = sample.audioI;
					playAudioFile("intone_stimuli");
					complimentCount++
				}else{
				intoneAudio.src = sample.audioN;
				playAudioFile("intone_stimuli");
				}
			}else if(sample.category == 'stressAdj'){
				if(stressCount < 1){
					intoneAudio.src = sample.audioI;
					playAudioFile("intone_stimuli");
					stressCount++
				}else{
				intoneAudio.src = sample.audioN;
				playAudioFile("intone_stimuli");
				}
			}else{
				if(verbCount < 1){
					intoneAudio.src = sample.audioN;
					playAudioFile("intone_stimuli");
					verbCount++
				}else{
				intoneAudio.src = sample.audioI;
				playAudioFile("intone_stimuli");
				}
			}
		}

		/*Insert continuations*/
		document.getElementById("continuationA").innerHTML = sample.continuationA;
		document.getElementById("continuationB").innerHTML = sample.continuationB;

		/*Move on to next stimuli*/
		i++;
	}else{
		console.log("asldfajf");
	}
}

var playAudioFile = function(divid) {
    document.getElementById(divid).play();
};




