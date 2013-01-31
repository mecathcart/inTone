var j = 0;
var T1answersCorrect = 0;
var T1totalAnswer = 0;
var T1correctAnswer = "";

var T1complimentCount = 0;
var T1stressCount = 0;
var T1verbCount = 0;

var T1complimentCorrect = 0;
var T1stressCorrect = 0;
var T1verbCorrect = 0;
var T1fillerCorrect = 0;

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
		document.getElementById("T1_results").innerHTML ="Your score is " + T1answersCorrect +"/" +T1totalAnswer;
		$("#T1_results").show();
		$("#T1_next").show();
}


var T1_clickContA = function(){
	T1totalAnswer++;

	if(answerArrayT1[j-1] == "A" && T1correctAnswer == test1Stimuli[j-1].continuationA){
		if(test1Stimuli[j-1].category == "compliment"){
			T1complimentCorrect++;
		}else if(test1Stimuli[j-1].category == "stressAdj"){
			T1stressCorrect++;
		}else if(test1Stimuli[j-1].category == "verb"){
			T1verbCorrect++
		}else if(test1Stimuli[j-1].hasOwnProperty('audio')){
			T1fillerCorrect++;
		}
		T1answersCorrect++;

	}else if(answerArrayT1[j-1] == "B" && T1correctAnswer == test1Stimuli[j-1].continuationB){
		if(test1Stimuli[j-1].category == "compliment"){
			T1complimentCorrect++;
		}else if(test1Stimuli[j-1].category == "stressAdj"){
			T1stressCorrect++;
		}else if(test1Stimuli[j-1].category == "verb"){
			T1verbCorrect++
		}else if(test1Stimuli[j-1].hasOwnProperty('audio')){
			T1fillerCorrect++;
		}
		T1answersCorrect++;
	}

	if(T1totalAnswer%6==0){
		T1feedback();
	}else{
		nextT1Stimuli(test1Stimuli);
	}
}

var T1_clickContB = function(){

	T1totalAnswer++;	
	if(answerArrayT1[j-1] == "B" && T1correctAnswer == test1Stimuli[j-1].continuationA){
		if(test1Stimuli[j-1].category == "compliment"){
			T1complimentCorrect++;
		}else if(test1Stimuli[j-1].category == "stressAdj"){
			T1stressCorrect++;
		}else if(test1Stimuli[j-1].category == "verb"){
			T1verbCorrect++
		}else if(test1Stimuli[j-1].hasOwnProperty('audio')){
			T1fillerCorrect++;
		}
		T1answersCorrect++;

	}else if(answerArrayT1[j-1] == "A" && T1correctAnswer == test1Stimuli[j-1].continuationB){
		if(test1Stimuli[j-1].category == "compliment"){
			T1complimentCorrect++;
		}else if(test1Stimuli[j-1].category == "stressAdj"){
			T1stressCorrect++;
		}else if(test1Stimuli[j-1].category == "verb"){
			T1verbCorrect++
		}else if(test1Stimuli[j-1].hasOwnProperty('audio')){
			T1fillerCorrect++;
		}
		T1answersCorrect++;
	}

	if(T1totalAnswer%6==0){
		T1feedback();
	}else{
		nextT1Stimuli(test1Stimuli);
	}	
}

var nextT1Stimuli = function(sampleArray){
	$("#T1_next").hide();
	$("#T1_results").hide();
	$("#T1_continuationA").hide();
	$("#T1_continuationB").hide();
	$("#T1_cross").show();

 /*Go through stimuli*/
if(j < sampleArray.length){	

	var sample = sampleArray[j];	

	/* Plays audio stimuli*/	
	/*Filler*/
	if (sample.hasOwnProperty('audio') ) {
		intoneAudio.src = sample.audio;
		playAudioFile("intone_stimuli");
		T1correctAnswer = sample.continuationA;
	/*Compliment*/
	}else if(sample.category == 'compliment'){ 
		if(complimentCount%2 == 0){
			intoneAudio.src = sample.audioI;
			playAudioFile("intone_stimuli");
			T1correctAnswer = sample.continuationA;
		}else{
			intoneAudio.src = sample.audioN;
			playAudioFile("intone_stimuli");
			T1correctAnswer = sample.continuationB;
			}
		T1complimentCount++;

		/*Stress*/
	}else if(sample.category == 'stressAdj'){
		if(stressCount%2 ==0){
			intoneAudio.src = sample.audioI;
			playAudioFile("intone_stimuli");
			T1correctAnswer = sample.continuationA;
		}else{
			intoneAudio.src = sample.audioN;
			playAudioFile("intone_stimuli");
			T1correctAnswer = sample.continuationB;
			}
		T1stressCount++;

		/*Verb*/
	}else if(sample.category == 'verb'){
		if(verbCount%2 ==0){
			intoneAudio.src = sample.audioN;
			playAudioFile("intone_stimuli");
			T1correctAnswer = sample.continuationB;
		}else{
			intoneAudio.src = sample.audioI;
			playAudioFile("intone_stimuli");
			T1correctAnswer = sample.continuationA;
			}
		T1verbCount++
	
		}
		var continuationArray = [sample.continuationA, sample.continuationB];
		window.setTimeout(insertContinuationsT1,1000, continuationArray, j);

		/*Move on to next stimuli*/
		j++;
	/*Show results after last question*/	
	}else{
		$("#T1_continuationA").hide();
		$("#T1_continuationB").hide();
		$("#T1_cross").hide();
		document.getElementById("T1_results").innerHTML ="Your score is " + T1answersCorrect +"/" +T1totalAnswer;
		$("#test_2").show();
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

