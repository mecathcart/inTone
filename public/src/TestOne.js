var j = 0;
var T1answersCorrect = 0;
var T1totalAnswer = 0;
var T1correctAnswer = "";

var T1complimentCount = 0;
var T1stressCount = 0;
var T1verbCount = 0;

var testOne = function(){	
	$("#T1_continuationA").show();
	$("#T1_continuationB").show();
	nextT1Stimuli(test1Stimuli);	
}

var T1_clickContA = function(){
	T1totalAnswer++;	
	//console.log(test1Stimuli[j-1].continuationA);
	//console.log(T1correctAnswer);
	if(T1correctAnswer == test1Stimuli[j-1].continuationA){
		T1answersCorrect++;
		console.log(T1answersCorrect);
	}
	nextT1Stimuli(test1Stimuli);
}

var T1_clickContB = function(){
//	console.log(test1Stimuli[j-1].continuationB);
//	console.log(T1correctAnswer);
	T1totalAnswer++;	
	if(T1correctAnswer == test1Stimuli[j-1].continuationB){
		T1answersCorrect++;
		console.log(T1answersCorrect);
	}
	nextT1Stimuli(test1Stimuli);
}

var nextT1Stimuli = function(sampleArray){
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
			T1complimentCount++
		}else{
			intoneAudio.src = sample.audioN;
			playAudioFile("intone_stimuli");
			T1correctAnswer = sample.continuationB;
			T1complimentCount++
			}
		/*Stress*/
	}else if(sample.category == 'stressAdj'){
		if(stressCount%2 ==0){
			intoneAudio.src = sample.audioI;
			playAudioFile("intone_stimuli");
			T1correctAnswer = sample.continuationA;
			T1stressCount++
		}else{
			intoneAudio.src = sample.audioN;
			playAudioFile("intone_stimuli");
			T1correctAnswer = sample.continuationB;
			T1stressCount++
			}
		/*Verb*/
	}else{
		if(verbCount%2 ==0){
			intoneAudio.src = sample.audioN;
			playAudioFile("intone_stimuli");
			T1correctAnswer = sample.continuationA;
			T1verbCount++
		}else{
			intoneAudio.src = sample.audioI;
			playAudioFile("intone_stimuli");
			T1correctAnswer = sample.continuationA;
			T1verbCount++
			}
		}
		var continuationArray = [sample.continuationA, sample.continuationB];
		window.setTimeout(insertContinuationsT1,1000, continuationArray);

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
var insertContinuationsT1 = function(array){
		$("#T1_cross").hide();
		//fisherYates(array);
		document.getElementById("T1_continuationA").innerHTML = array[0];
		document.getElementById("T1_continuationB").innerHTML = array[1];
		$("#T1_continuationA").show();
		$("#T1_continuationB").show();
}

