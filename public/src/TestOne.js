var i = 0;
var answersCorrect = 0;
var totalAnswer = 0;
var correctAnswer = "";

var complimentCount = 0;
var stressCount = 0;
var verbCount = 0;

var testOne = function(){	
	$("#T1_continuationA").show();
	$("#T1_continuationB").show();
	nextT1Stimuli(test1Stimuli);	
}

var T1_clickContA = function(){
	totalAnswer++;	
	if(correctAnswer == sample.continuationA){
		answersCorrect++;
	}
	nextT1Stimuli(test1Stimuli);
}

var T1_clickContB = function(){
	totalAnswer++;	
	if(correctAnswer == sample.continuationB){
		answersCorrect++;
	}
	nextT1Stimuli(test1Stimuli);
}


var nextT1Stimuli = function(sampleArray){
$("#T1_continuationA").hide();
$("#T1_continuationB").hide();

 /*Go through stimuli*/
	if(i < sampleArray.length){	

		var sample = sampleArray[i];	

		/* Plays audio stimuli*/	

		/*Filler*/
		if (sample.hasOwnProperty('audio') ) {
			intoneAudio.src = sample.audio;
			playAudioFile("intone_stimuli");
			correctAnswer = sample.continuationA;
		/*Compliment*/
		}else if(sample.category == 'compliment'){ 
			if(complimentCount%2 == 0){
				intoneAudio.src = sample.audioI;
				playAudioFile("intone_stimuli");
				correctAnswer = sample.continuationA;
				complimentCount++
			}else{
				intoneAudio.src = sample.audioN;
				playAudioFile("intone_stimuli");
				correctAnswer = sample.continuationB;
			}
		/*Stress*/
		}else if(sample.category == 'stressAdj'){
			if(stressCount%2 ==0){
				intoneAudio.src = sample.audioI;
				playAudioFile("intone_stimuli");
				correctAnswer = sample.continuationA;
				stressCount++
			}else{
				intoneAudio.src = sample.audioN;
				playAudioFile("intone_stimuli");
				correctAnswer = sample.continuationB;
			}
		/*Verb*/
		}else{
			if(verbCount%2 ==0){
				intoneAudio.src = sample.audioN;
				playAudioFile("intone_stimuli");
				correctAnswer = sample.continuationA;
				verbCount++
			}else{
				intoneAudio.src = sample.audioI;
				playAudioFile("intone_stimuli");
				correctAnswer = sample.continuationA;
			}
		}
		var continuationArray = [sample.continuationA, sample.continuationB];
		window.setTimeout(insertContinuationsT1,1000, continuationArray);

		/*Move on to next stimuli*/
		i++;
	/*Show results after last question*/	
	}else{
		$("#T1_continuationA").hide();
		$("#T1_continuationB").hide();
		$("#T1_cross").hide();
		document.getElementById("T1_results").innerHTML ="Your score is " + answersCorrect +"/" +totalAnswer;
		$("#test_2").show();
	}

}

/*Insert continuations*/
var insertContinuationsT1 = function(array){
		$("#T1_cross").hide();
		fisherYates(array);
		document.getElementById("T1_continuationA").innerHTML = array[1];
		document.getElementById("T1_continuationB").innerHTML = array[0];
		$("#T1_continuationA").show();
		$("#T1_continuationB").show();
}

