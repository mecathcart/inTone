var participant = localStorage.getObject('participant');
participant.correctAudiosPractice = [];
participant.incorrectAudiosPractice = [];
var correctAudiosPractice = participant.correctAudiosPractice;
var incorrectAudiosPractice = participant.incorrectAudiosPractice;

//console.log( participant.incorrectAudiosPractice);

/*initiate my variables*/
var i = 0;
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
	$("#next").hide();
	$("#practice_results").hide();
	$(".banner").hide();
	
	//Start the experiment!
	nextStimuli(practiceStimuli);		
}


/*The function that is called when the top continuation is clicked*/
var clickContA = function(){

	participant.totalAnswerPractice++;	
	if(answerArrayPractice[i-1] == "A" && correctAnswer == continuationA){
		
		/*Add name of audio that they got correct to the array of correct audios*/
		var answer= intoneAudio.src;
		answer = answer.replace("file://localhost/Users/mdotedot/Desktop/inTone/public/audio_stimuli", "");
		correctAudiosPractice.push(answer);

		participant.answersCorrectPractice++;
		if(practiceStimuli[i-1].category == "compliment"){
			participant.complimentCorrectPractice++;
		}else if(practiceStimuli[i-1].category == "stressAdj"){
			participant.stressCorrectPractice++;
		}else if(practiceStimuli[i-1].category == "verb"){
			participant.verbCorrectPractice++
		}else if(practiceStimuli[i-1].hasOwnProperty('audio')){
			participant.fillerCorrectPractice++;
		}

	}else if(answerArrayPractice[i-1] == "B" && correctAnswer == continuationB){

		answer= intoneAudio.src;
		answer = answer.replace("file://localhost/Users/mdotedot/Desktop/inTone/public/audio_stimuli", "");
		correctAudiosPractice.push(answer);

		participant.answersCorrectPractice++;
		if(practiceStimuli[i-1].category == "compliment"){
			participant.complimentCorrectPractice++;
		}else if(practiceStimuli[i-1].category == "stressAdj"){
			participant.stressCorrectPractice++;
		}else if(practiceStimuli[i-1].category == "verb"){
			participant.verbCorrectPractice++
		}else if(practiceStimuli[i-1].hasOwnProperty('audio')){
			participant.fillerCorrectPractice++;
		}
	}else{
		answer= intoneAudio.src;
		answer = answer.replace("file://localhost/Users/mdotedot/Desktop/inTone/public/audio_stimuli", "");
		incorrectAudiosPractice.push(answer);
	}


	feedback();
	console.log(correctAudiosPractice);
	console.log(incorrectAudiosPractice);

}

var clickContB = function(){
	participant.totalAnswerPractice++;	
	if(answerArrayPractice[i-1]=="B" && correctAnswer == continuationA){

		answer= intoneAudio.src;
		answer = answer.replace("file://localhost/Users/mdotedot/Desktop/inTone/public/audio_stimuli", "");
		correctAudiosPractice.push(answer);

		participant.answersCorrectPractice++;
		if(practiceStimuli[i-1].category == "compliment"){
			participant.complimentCorrectPractice++;
		}else if(practiceStimuli[i-1].category == "stressAdj"){
			participant.stressCorrectPractice++;
		}else if(practiceStimuli[i-1].category == "verb"){
			participant.verbCorrectPractice++
		}else if(practiceStimuli[i-1].hasOwnProperty('audio')){
			participant.fillerCorrectPractice++;
		}
	}else if(answerArrayPractice[i-1]=="A" && correctAnswer == continuationB ){

		answer= intoneAudio.src;
		answer = answer.replace("file://localhost/Users/mdotedot/Desktop/inTone/public/audio_stimuli", "");
		correctAudiosPractice.push(answer);

		participant.answersCorrectPractice++;
		if(practiceStimuli[i-1].category == "compliment"){
			participant.complimentCorrectPractice++;
		}else if(practiceStimuli[i-1].category == "stressAdj"){
			participant.stressCorrectPractice++;
		}else if(practiceStimuli[i-1].category == "verb"){
			participant.verbCorrectPractice++
		}else if(practiceStimuli[i-1].hasOwnProperty('audio')){
			participant.fillerCorrectPractice++;
		}
	}

		answer= intoneAudio.src;
		answer = answer.replace("file://localhost/Users/mdotedot/Desktop/inTone/public/audio_stimuli", "");
		incorrectAudiosPractice.push(answer);
	//nextStimuli(practiceStimuli);
	feedback();
}

var feedback = function(){
		$("#continuationA").hide();
		$("#continuationB").hide();
		$("#practice_cross").hide();
		document.getElementById("practice_results").innerHTML ="Your score is " + eval(Math.round(participant.answersCorrectPractice/participant.totalAnswerPractice*100))+"%";
		$("#practice_results").show();
		$("#next").show();
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
		}else if(sample.condition === "I"){
			intoneAudio.src = sample.audioI;
			playAudioFile("intone_stimuli");
			correctAnswer = continuationA;
		}
		else{
			intoneAudio.src = sample.audioN;
			playAudioFile("intone_stimuli");
			correctAnswer = continuationB;
		}	
		var continuationArray = [sample.continuationA, sample.continuationB];
		window.setTimeout(insertContinuations,3000, continuationArray, i);

		/*Move on to next stimuli*/
		i++;
	/*Show results after last question*/	
	}else{
		$("#continuationA").hide();
		$("#continuationB").hide();
		$("#practice_cross").hide();
		document.getElementById("practice_results").innerHTML ="Your score is " + eval(Math.round(participant.answersCorrectPractice/participant.totalAnswerPractice*100))+"%";
		$("#practice_results").show();
		$("#test_1").show();
		console.log(participant.practiceAnswers);
	}
}

var playAudioFile = function(divid) {
    document.getElementById(divid).play();
};

/*Insert continuations*/
var insertContinuations = function(array, counter){
		$("#practice_cross").hide();
		if(answerArrayPractice[counter] == "A"){
			//console.log(answerArrayPractice[counter]);
			document.getElementById("continuationA").innerHTML = array[0];
			document.getElementById("continuationB").innerHTML = array[1];
		}else{
			//console.log(answerArrayPractice[counter]);
			document.getElementById("continuationA").innerHTML = array[1];
			document.getElementById("continuationB").innerHTML = array[0];	
		}
		$("#continuationA").show();
		$("#continuationB").show();
}









