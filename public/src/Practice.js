var i = 0;
var answersCorrect = 0;
var totalAnswer = 0;
var correctAnswer = "";

var complimentCorrect = 0;
var stressCorrect = 0;
var verbCorrect = 0;
var fillerCorrect = 0;

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
	if(answerArrayPractice[i-1] == "A" && correctAnswer == continuationA){
		answersCorrect++;
		if(practiceStimuli[i-1].category == "compliment"){
			complimentCorrect++;
		}else if(practiceStimuli[i-1].category == "stressAdj"){
			stressCorrect++;
		}else if(practiceStimuli[i-1].category == "verb"){
			verbCorrect++
		}else if(practiceStimuli[i-1].hasOwnProperty('audio')){
			fillerCorrect++;
		}

	}else if(answerArrayPractice[i-1] == "B" && correctAnswer == continuationB){
		answersCorrect++;
		if(practiceStimuli[i-1].category == "compliment"){
			complimentCorrect++;
		}else if(practiceStimuli[i-1].category == "stressAdj"){
			stressCorrect++;
		}else if(practiceStimuli[i-1].category == "verb"){
			verbCorrect++
		}else if(practiceStimuli[i-1].hasOwnProperty('audio')){
			fillerCorrect++;
		}
	}
	nextStimuli(practiceStimuli);
}

var clickContB = function(){
	totalAnswer++;	
	if(answerArrayPractice[i-1]=="B" && correctAnswer == continuationA){
		answersCorrect++;
		if(practiceStimuli[i-1].category == "compliment"){
			complimentCorrect++;
		}else if(practiceStimuli[i-1].category == "stressAdj"){
			stressCorrect++;
		}else if(practiceStimuli[i-1].category == "verb"){
			verbCorrect++
		}else if(practiceStimuli[i-1].hasOwnProperty('audio')){
			fillerCorrect++;
		}
	}else if(answerArrayPractice[i-1]=="A" && correctAnswer == continuationB ){
		answersCorrect++;
		if(practiceStimuli[i-1].category == "compliment"){
			complimentCorrect++;
		}else if(practiceStimuli[i-1].category == "stressAdj"){
			stressCorrect++;
		}else if(practiceStimuli[i-1].category == "verb"){
			verbCorrect++
		}else if(practiceStimuli[i-1].hasOwnProperty('audio')){
			fillerCorrect++;
		}
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
				intoneAudio.src = sample.audioN;
				playAudioFile("intone_stimuli");
				correctAnswer = continuationB;
			}else{
				intoneAudio.src = sample.audioI;
				playAudioFile("intone_stimuli");
				correctAnswer = continuationA;
			}
			stressCount++

		/*Verb*/
		}else if(sample.category == 'verb') {
			if(verbCount%2 ==0){
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
		window.setTimeout(insertContinuations,1000, continuationArray, i);

		/*Move on to next stimuli*/
		i++;
	/*Show results after last question*/	
	}else{
		$("#continuationA").hide();
		$("#continuationB").hide();
		$("#practice_cross").hide();
		document.getElementById("practice_results").innerHTML =" Compliment correct = " + complimentCorrect +
		" Stress correct = " +stressCorrect +" Verb correct = " +verbCorrect;
		$("#test_1").show();
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









