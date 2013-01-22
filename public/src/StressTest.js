/* Play sound check*/
var soundCheck = function(){
   playAudioFile("sound_check");
};

var playAudioFile = function(divid) {
    document.getElementById(divid).play();
};

/*Constructor*/
function StressStimuli(audio,image,numSyllables,stressSyllable){
	this.audio = audio;
	this.image = image;
	this.numSyllables = numSyllables;
	this.stressSyllable = stressSyllable;

}

/*Stimuli*/
var believe = new StressStimuli( "./../audio_stimuli/stressTest/believe_full.wav","./../stress_images/believe.gif",2,2);
var biology = new StressStimuli( "./../audio_stimuli/stressTest/biology_full.wav","./../stress_images/biology.gif",4,2);
var blanket = new StressStimuli( "./../audio_stimuli/stressTest/blanket_full.wav","./../stress_images/blanket.gif",2,1);
var critical = new StressStimuli( "./../audio_stimuli/stressTest/critical_full.wav","./../stress_images/critical.gif",3,1);
var energy = new StressStimuli( "./../audio_stimuli/stressTest/energy_full.wav","./../stress_images/energy.gif",3,1);
var evaporate = new StressStimuli( "./../audio_stimuli/stressTest/evaporate_full.wav","./../stress_images/evaporate.gif",4,2);
var paper = new StressStimuli( "./../audio_stimuli/stressTest/paper_full.wav","./../stress_images/paper.gif",2,1);
var politician = new StressStimuli( "./../audio_stimuli/stressTest/politician_full.wav","./../stress_images/politician.gif",4,3);
var procedure = new StressStimuli( "./../audio_stimuli/stressTest/procedure_full.wav","./../stress_images/procedure.gif",3,2);
var reputation = new StressStimuli( "./../audio_stimuli/stressTest/reputation_full.wav","./../stress_images/reputation.gif",4,3);
var today = new StressStimuli( "./../audio_stimuli/stressTest/today_full.wav","./../stress_images/today.gif",2,2);
var tomato = new StressStimuli( "./../audio_stimuli/stressTest/tomato_full.wav","./../stress_images/tomato.gif",3,2);

/*array of stimuli*/
var stressStimuli = [believe, biology, blanket, critical, energy, evaporate, paper, politician, procedure, reputation, today, tomato];
var i = 0;

/* Inserts Image placeholder*/
var stressImg = document.createElement("img");

/* Inserts audio stimuli*/
var stressAudio = document.createElement("audio");
stressAudio.id = "stress_test_stimuli";
audio_div.appendChild(stressAudio);

var totalAnswer = 0;
var correctAnswer = 0;

/* Creates the Maps*/
var createMap1 = function(sample){
	var stressMap1 = document.createElement("map");
	stressMap1.name = "stressMap1";

	var area1 = document.createElement("area");
	area1.shape = "rect";
	area1.coords = "0,0,300,300";
	area1.href = "#";
	area1.onclick = function(){
		if(sample.stressSyllable === 1){
			correctAnswer++;
		}
		console.log("The correct answer is" + correctAnswer);
		totalAnswer++;
		stress_test_image.removeChild(stressMap1);
		stressTest();

	};

	var area2 = document.createElement("area");
		area2.shape = "rect";
		area2.coords = "300,0,640,300";
		area2.href = "#";
		area2.onclick = function(){
			if(sample.stressSyllable === 2){
				correctAnswer++;
			}
			totalAnswer++;
			stress_test_image.removeChild(stressMap1);
			stressTest();
			console.log("The correct answer is" + correctAnswer);

	};

	stressImg.useMap = "#stressMap1";
	stress_test_image.appendChild(stressMap1);
	stressMap1.appendChild(area1);
	stressMap1.appendChild(area2);
};

var createMap2 = function(sample){
	var stressMap2 = document.createElement("map");
	stressMap2.name = "stressMap2";

	var area1 = document.createElement("area");
	area1.shape = "rect";
	area1.coords = "0,0,200,300";
	area1.href = "#";
	area1.onclick = function(){
		if(sample.stressSyllable === 1){
				correctAnswer++;
			}
			totalAnswer++;
			stress_test_image.removeChild(stressMap2);
			stressTest();
			console.log("The correct answer is" + correctAnswer);

	};

	var area2 = document.createElement("area");
		area2.shape = "rect";
		area2.coords = "200,0,400,300";
		area2.href = "#";
		area2.onclick = function(){
			if(sample.stressSyllable === 2){
				correctAnswer++;
			}
			totalAnswer++;
			stress_test_image.removeChild(stressMap2);
			stressTest();
			console.log("The correct answer is" + correctAnswer);
		};

	var area3 = document.createElement("area");
		area3.shape = "rect";
		area3.coords = "400,0,640,300";
		area3.href = "#";
		area3.onclick = function(){
			if(sample.stressSyllable === 3){
				correctAnswer++;
			}
			totalAnswer++;
			stress_test_image.removeChild(stressMap2);
			stressTest();
			console.log("The correct answer is" + correctAnswer);
		};

	stressImg.useMap = "#stressMap2";
	stress_test_image.appendChild(stressMap2);
	stressMap2.appendChild(area1);
	stressMap2.appendChild(area2);
	stressMap2.appendChild(area3);

};

var createMap3 = function(sample){
	var stressMap3 = document.createElement("map");
	stressMap3.name = "stressMap3";

	var area1 = document.createElement("area");
	area1.shape = "rect";
	area1.coords = "0,0,150,300";
	area1.href = "#";
	area1.onclick = function(){
		if(sample.stressSyllable === 1){
				correctAnswer++;
				console.log(sample);

			}
			totalAnswer++;
			stress_test_image.removeChild(stressMap3);
			stressTest();
			console.log("The correct answer is" + correctAnswer);

	};

	var area2 = document.createElement("area");
		area2.shape = "rect";
		area2.coords = "150,0,300,300";
		area2.href = "#";
		area2.onclick = function(){
			if(sample.stressSyllable === 2){
				correctAnswer++;
			}
			totalAnswer++;
			stress_test_image.removeChild(stressMap3);
			stressTest();
			console.log("The correct answer is" + correctAnswer);
		};

	var area3 = document.createElement("area");
		area3.shape = "rect";
		area3.coords = "300,0,450,300";
		area3.href = "#";
		area3.onclick = function(){
			if(sample.stressSyllable === 3){
				correctAnswer++;
			}
			totalAnswer++;
			stress_test_image.removeChild(stressMap3);
			stressTest();
			console.log("The correct answer is" + correctAnswer);

		};

	var area4 = document.createElement("area");
		area4.shape = "rect";
		area4.coords = "450,0,640,300";
		area4.href = "#";
		area4.onclick = function(){
			if(sample.stressSyllable === 4){
				correctAnswer++;
			}
			totalAnswer++;
			stress_test_image.removeChild(stressMap3);
			stressTest();
			console.log("The correct answer is" + correctAnswer);

		};

	stressImg.useMap = "#stressMap3";
	stress_test_image.appendChild(stressMap3);
	stressMap3.appendChild(area1);
	stressMap3.appendChild(area2);
	stressMap3.appendChild(area3);
	stressMap3.appendChild(area4);
};

/* Start Stress Test*/
var stressTest = function(){
	/*hide start button and instructions*/
	$("#stress_test_image").hide();
	$("#stress_test_instructions").hide();
	$("#start_stress_test").hide();
	$("h1").hide();
	$("h2").hide();

	if(i < stressStimuli.length){	

		/* Plays audio stimuli*/
		var sample = stressStimuli[i];	
		stressAudio.src = sample.audio;
		playAudioFile("stress_test_stimuli");
		$("#cross").show();
		window.setTimeout(insertImage,1000,[stressStimuli[i].image]);

		/*Inserts Map*/
		if(sample.numSyllables === 2){
			createMap1(sample);
		}else if(sample.numSyllables === 3){
			createMap2(sample);
		}else {
			createMap3(sample);
		}
		
		/*Move on to next stimuli*/
		i++;
	}else{
		/*stops stress test when stimuli is done*/
		$("#stress_test_image").hide();
		document.getElementById("results").innerHTML ="Your score is " + correctAnswer +"/" +totalAnswer;
		$("#practice").show();
	}

};


var insertImage = function(sample){
		$("#cross").hide();

		/* Inserts Image*/
		stressImg.src = sample;
		stress_test_image.appendChild(stressImg);
		$("#stress_test_image").show();

	
}


