var i = 0;
var answersCorrect = 0;
var totalAnswer = 0;
var correctAnswer = "";

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
		
	nextStimuli(practiceStimuli);		
}

var clickContA = function(){
	totalAnswer++;	
	if(correctAnswer == continuationA){
		answersCorrect++;
		console.log(answersCorrect);
	}
	nextStimuli(practiceStimuli);
}

var clickContB = function(){
	totalAnswer++;	
	if(correctAnswer == continuationB){
		answersCorrect++;
				console.log(answersCorrect);
	}
	nextStimuli(practiceStimuli);
}

var nextStimuli =  function(sampleArray){
	$("#practice_cross").show();
	$("#continuationA").hide();
	$("#continuationB").hide();

 /*Go through stimuli*/
	if(i < sampleArray.length){	

		var sample = sampleArray[i];	

		/* Plays audio stimuli*/	

		/*Filler*/
		if (sample.hasOwnProperty('audio') ) {
			intoneAudio.src = sample.audio;
			playAudioFile("intone_stimuli");
			correctAnswer = continuationA;
		/*Compliment*/
		}else if(sample.category == 'compliment'){ 
			if(complimentCount%2 == 0){
				intoneAudio.src = sample.audioI;
				playAudioFile("intone_stimuli");
				correctAnswer = continuationA;
			}else{
				intoneAudio.src = sample.audioN;
				playAudioFile("intone_stimuli");
				correctAnswer = continuationB;
			}
			complimentCount++

		/*Stress*/
		}else if(sample.category == 'stressAdj'){
			if(stressCount%2 ==0){
				intoneAudio.src = sample.audioI;
				playAudioFile("intone_stimuli");
				correctAnswer = continuationA;
			}else{
				intoneAudio.src = sample.audioN;
				playAudioFile("intone_stimuli");
				correctAnswer = continuationB;
			}
			stressCount++

		/*Verb*/
		}else{
			if(verbCount%2 ==1){
				intoneAudio.src = sample.audioI;
				playAudioFile("intone_stimuli");
				correctAnswer = continuationA;
			}else{
				intoneAudio.src = sample.audioN;
				playAudioFile("intone_stimuli");
				correctAnswer = continuationB;
			}
			verbCount++

		}
		var continuationArray = [sample.continuationA, sample.continuationB];
		window.setTimeout(insertContinuations,1000, continuationArray);

		/*Move on to next stimuli*/
		i++;
	/*Show results after last question*/	
	}else{
		$("#continuationA").hide();
		$("#continuationB").hide();
		$("#practice_cross").hide();
		document.getElementById("practice_results").innerHTML ="Your score is " + answersCorrect +"/" +totalAnswer;
		$("#test_1").show();

	}
}

var playAudioFile = function(divid) {
    document.getElementById(divid).play();
};

/*Insert continuations*/
var insertContinuations = function(array){
		$("#practice_cross").hide();
		if(answerArrayPractice[i]){
			document.getElementById("continuationA").innerHTML = array[0];
			document.getElementById("continuationB").innerHTML = array[1];
		}else{
			document.getElementById("continuationA").innerHTML = array[1];
			document.getElementById("continuationB").innerHTML = array[0];
		}
		
		$("#continuationA").show();
		$("#continuationB").show();
}









