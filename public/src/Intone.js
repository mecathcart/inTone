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

var answersCorrect = 0;
var totalAnswer = 0;
var correctAnswer = "";

var clickContA = function(){
	totalAnswer++;
	var sample = window.practiceStimuli[i-1];	
	
	if(correctAnswer == continuationA){
		answersCorrect++;
	}
	nextPracticeStimuli();
}

var clickContB = function(){
	totalAnswer++;
	var sample = window.practiceStimuli[i-1];	
	
	if(correctAnswer == continuationB){
		answersCorrect++;
	}
	nextPracticeStimuli();
}

var nextPracticeStimuli =  function(){
	$("#practice_cross").show();
	$("#continuationA").hide();
	$("#continuationB").hide();



 /*Go through stimuli*/
	if(i < practiceStimuli.length){	

		var sample = window.practiceStimuli[i];	

		/* Plays audio stimuli*/	

		/*Filler*/
		if (sample.hasOwnProperty('audio') ) {
			intoneAudio.src = sample.audio;
			playAudioFile("intone_stimuli");
			correctAnswer = continuationA;
		/*Compliment*/
		}else if(sample.category == 'compliment'){ 
			if(complimentCount < 1){
				intoneAudio.src = sample.audioI;
				playAudioFile("intone_stimuli");
				correctAnswer = continuationA;
				complimentCount++
			}else{
				intoneAudio.src = sample.audioN;
				playAudioFile("intone_stimuli");
				correctAnswer = continuationB;
			}
		/*Stress*/
		}else if(sample.category == 'stressAdj'){
			if(stressCount < 1){
				intoneAudio.src = sample.audioI;
				playAudioFile("intone_stimuli");
				correctAnswer = continuationA;
				stressCount++
			}else{
				intoneAudio.src = sample.audioN;
				playAudioFile("intone_stimuli");
				correctAnswer = continuationB;
			}
		/*Verb*/
		}else{
			if(verbCount < 1){
				intoneAudio.src = sample.audioN;
				playAudioFile("intone_stimuli");
				correctAnswer = continuationA;
				verbCount++
			}else{
				intoneAudio.src = sample.audioI;
				playAudioFile("intone_stimuli");
				correctAnswer = continuationA;
			}
		}
		window.setTimeout(insertContinuations,1000, practiceStimuli[i].continuationA , practiceStimuli[i].continuationB);

		/*Move on to next stimuli*/
		i++;
	/*Show results after last question*/	
	}else{
		$("#continuationA").hide();
		$("#continuationB").hide();
		document.getElementById("practice_results").innerHTML ="Your score is " + answersCorrect +"/" +totalAnswer;
	}
}

var playAudioFile = function(divid) {
    document.getElementById(divid).play();
};

/*Insert continuations*/
var insertContinuations = function(a, b){
		$("#practice_cross").hide();

		document.getElementById("continuationA").innerHTML = a;
		document.getElementById("continuationB").innerHTML = b;
		$("#continuationA").show();
		$("#continuationB").show();
}

