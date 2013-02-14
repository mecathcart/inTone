var participant = localStorage.getObject('participant');
participant.correctAudiosT1 = [];
participant.incorrectAudiosT1 = [];
var correctAudiosT1 = participant.correctAudiosT1;
var incorrectAudiosT1 = participant.incorrectAudiosT1;


//console.log(participant);

var j = 0;
var T1correctAnswer = "";

var T1complimentCount = 0;
var T1stressCount = 0;
var T1verbCount = 0;

/*creates audio div*/
var intoneAudio = document.createElement("audio");
intoneAudio.id = "intone_stimuli";
audio_div.appendChild(intoneAudio);

var playAudioFile = function(divid) {
    document.getElementById(divid).play();
};

var testOne = function(){	
	$("#T1_next").hide();
	$("#T1_continuationA").show();
	$("#T1_continuationB").show();
	nextT1Stimuli(test1Stimuli);	
}

var T1feedback = function(){
		$("#T1_continuationA").hide();
		$("#T1_continuationB").hide();
		$("#T1__cross").hide();
		document.getElementById("T1_results").innerHTML ="Your score is " + eval(Math.round(participant.T1answersCorrect/participant.T1totalAnswer*100))+"%";
		$("#T1_results").show();
		$("#T1_next").show();
}


var T1_clickContA = function(){
	participant.T1totalAnswer++;

	if(answerArrayT1[j-1] == "A" && T1correctAnswer == test1Stimuli[j-1].continuationA){

		var answer= intoneAudio.src;
		answer = answer.replace("file://localhost/Users/mdotedot/Desktop/inTone/public/audio_stimuli", "");
		correctAudiosT1.push(answer);
		//console.log(correctAudiosT1);

		if(test1Stimuli[j-1].category == "compliment"){
			participant.T1complimentCorrect++;
		}else if(test1Stimuli[j-1].category == "stressAdj"){
			participant.T1stressCorrect++;
		}else if(test1Stimuli[j-1].category == "verb"){
			participant.T1verbCorrect++
		}else if(test1Stimuli[j-1].hasOwnProperty('audio')){
			participant.T1fillerCorrect++;
		}
		participant.T1answersCorrect++;

	}else if(answerArrayT1[j-1] == "B" && T1correctAnswer == test1Stimuli[j-1].continuationB){

		answer= intoneAudio.src;
		answer = answer.replace("file://localhost/Users/mdotedot/Desktop/inTone/public/audio_stimuli", "");
		correctAudiosT1.push(answer);

		if(test1Stimuli[j-1].category == "compliment"){
			participant.T1complimentCorrect++;
		}else if(test1Stimuli[j-1].category == "stressAdj"){
			participant.T1stressCorrect++;
		}else if(test1Stimuli[j-1].category == "verb"){
			participant.T1verbCorrect++
		}else if(test1Stimuli[j-1].hasOwnProperty('audio')){
			participant.T1fillerCorrect++;
		}
		participant.T1answersCorrect++;
	}else{

		answer= intoneAudio.src;
		answer = answer.replace("file://localhost/Users/mdotedot/Desktop/inTone/public/audio_stimuli", "");
		incorrectAudiosT1.push(answer);
	}

	if(participant.T1totalAnswer%6==0){
		T1feedback();
	}else{
		showCross();
	}
	console.log(correctAudiosT1);
	console.log(incorrectAudiosT1);	
}

var T1_clickContB = function(){

	participant.T1totalAnswer++;	
	if(answerArrayT1[j-1] == "B" && T1correctAnswer == test1Stimuli[j-1].continuationA){

		var answer= intoneAudio.src;
		answer = answer.replace("file://localhost/Users/mdotedot/Desktop/inTone/public/audio_stimuli", "");
		correctAudiosT1.push(answer);

		if(test1Stimuli[j-1].category == "compliment"){
			participant.T1complimentCorrect++;
		}else if(test1Stimuli[j-1].category == "stressAdj"){
			participant.T1stressCorrect++;
		}else if(test1Stimuli[j-1].category == "verb"){
			participant.T1verbCorrect++
		}else if(test1Stimuli[j-1].hasOwnProperty('audio')){
			participant.T1fillerCorrect++;
		}
		participant.T1answersCorrect++;

	}else if(answerArrayT1[j-1] == "A" && T1correctAnswer == test1Stimuli[j-1].continuationB){

		answer= intoneAudio.src;
		answer = answer.replace("file://localhost/Users/mdotedot/Desktop/inTone/public/audio_stimuli", "");
		correctAudiosT1.push(answer);

		if(test1Stimuli[j-1].category == "compliment"){
			participant.T1complimentCorrect++;
		}else if(test1Stimuli[j-1].category == "stressAdj"){
			participant.T1stressCorrect++;
		}else if(test1Stimuli[j-1].category == "verb"){
			participant.T1verbCorrect++
		}else if(test1Stimuli[j-1].hasOwnProperty('audio')){
			participant.T1fillerCorrect++;
		}
		participant.T1answersCorrect++;
	}else{
		answer= intoneAudio.src;
		answer = answer.replace("file://localhost/Users/mdotedot/Desktop/inTone/public/audio_stimuli", "");
		incorrectAudiosT1.push(answer);
	}

	if(participant.T1totalAnswer%6==0){
		T1feedback();
	}else{
		showCross();
	}
	console.log(correctAudiosT1);
	console.log(incorrectAudiosT1);	
}

var showCross = function(){
	$("#T1_next").hide();
	$("#T1_results").hide();
	$("#T1_continuationA").hide();
	$("#T1_continuationB").hide();
	$("#T1_cross").show();
	window.setTimeout(nextT1Stimuli,500, test1Stimuli);

};

var nextT1Stimuli = function(sampleArray){
	
 /*Go through stimuli*/
if(j < sampleArray.length){	

	var sample = sampleArray[j];	
	if(participant.num%4==0 || participant.num%4 == 1){
		console.log("Je suis version un");
		/* Plays audio stimuli*/	
		/*Filler*/
		if (sample.hasOwnProperty('audio') ) {
			intoneAudio.src = sample.audio;
			playAudioFile("intone_stimuli");
			T1correctAnswer = sample.continuationA;
		}
		else if(sample.condition === "I"){
			intoneAudio.src = sample.audioI;
			playAudioFile("intone_stimuli");
			T1correctAnswer = sample.continuationA;
		}
		else{
			intoneAudio.src = sample.audioN;
			playAudioFile("intone_stimuli");
			T1correctAnswer = sample.continuationB;
		}	

		var continuationArray = [sample.continuationA, sample.continuationB];
		window.setTimeout(insertContinuationsT1,3000, continuationArray, j);

	}else{
		console.log("Je suis version deux");

		/* Plays audio stimuli*/	
	/*Filler*/
		if (sample.hasOwnProperty('audio') ) {
			intoneAudio.src = sample.audio;
			playAudioFile("intone_stimuli");
			T1correctAnswer = sample.continuationA;
		}
		else if(sample.condition === "N"){
			intoneAudio.src = sample.audioI;
			playAudioFile("intone_stimuli");
			T1correctAnswer = sample.continuationA;
		}
		else{
			intoneAudio.src = sample.audioN;
			playAudioFile("intone_stimuli");
			T1correctAnswer = sample.continuationB;
		}	
		var continuationArray = [sample.continuationA, sample.continuationB];
		window.setTimeout(insertContinuationsT1,3000, continuationArray, j);
	}
	
	/*Move on to next stimuli*/
	j++;
	/*Show results after last question*/	
	}else{
		$("#T1_continuationA").hide();
		$("#T1_continuationB").hide();
		$("#T1_cross").hide();
		//document.getElementById("T1_results").innerHTML ="Your score is " + participant.T1answersCorrect +"/" +participant.T1totalAnswer;
		if(participant.num%2 == 0){
			$("#test_2").show();
		}else{
			$(".end").show();

			// submitForm(actionURL);
		}
	}
}

/*Insert continuations*/
var insertContinuationsT1 = function(array, counter){
		$("#T1_cross").hide();
		if(answerArrayT1[counter] == "A"){
			document.getElementById("T1_continuationA").innerHTML = array[0];
			document.getElementById("T1_continuationB").innerHTML = array[1];	
		}else{
			document.getElementById("T1_continuationA").innerHTML = array[1];
			document.getElementById("T1_continuationB").innerHTML = array[0];		
		}
		$("#T1_continuationA").show();
		$("#T1_continuationB").show();
		
}

