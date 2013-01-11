

/* Play sound check*/
var soundCheck = function(){
   playAudioFile("sound_check");
};

/* Play sound check*/
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

var believe = new StressStimuli( "./../audio_stimuli/stressTest/believe_full.wav","./../audio_stimuli/stressTest/believe.gif",2,2);
var biology = new StressStimuli( "./../audio_stimuli/stressTest/biology_full.wav","./../audio_stimuli/stressTest/biology.gif",4,2);
var blanket = new StressStimuli( "./../audio_stimuli/stressTest/blanket_full.wav","./../audio_stimuli/stressTest/blanket.gif",2,1);
var critical = new StressStimuli( "./../audio_stimuli/stressTest/critical_full.wav","./../audio_stimuli/stressTest/critical.gif",3,1);
var energy = new StressStimuli( "./../audio_stimuli/stressTest/energy_full.wav","./../audio_stimuli/stressTest/energy.gif",3,1);
var evaporate = new StressStimuli( "./../audio_stimuli/stressTest/evaporate_full.wav","./../audio_stimuli/stressTest/evaporate.gif",4,2);
var paper = new StressStimuli( "./../audio_stimuli/stressTest/paper_full.wav","./../audio_stimuli/stressTest/paper.gif",2,1);
var politician = new StressStimuli( "./../audio_stimuli/stressTest/politician_full.wav","./../audio_stimuli/stressTest/politician.gif",4,3);
var procedure = new StressStimuli( "./../audio_stimuli/stressTest/procedure_full.wav","./../audio_stimuli/stressTest/procedure.gif",3,2);
var reputation = new StressStimuli( "./../audio_stimuli/stressTest/reputation_full.wav","./../audio_stimuli/stressTest/reputation.gif",4,3);
var today = new StressStimuli( "./../audio_stimuli/stressTest/today_full.wav","./../audio_stimuli/stressTest/today.gif",2,2);
var tomato = new StressStimuli( "./../audio_stimuli/stressTest/tomato_full.wav","./../audio_stimuli/stressTest/tomato.gif",3,2);

/*array of stimuli*/
var stressStimuli = [believe, biology, blanket, critical, energy, evaporate, paper, politician, procedure, reputation, today, tomato];
var i = 0;

/* Inserts Image placeholder*/
var stressImg = document.createElement("img");

/* Inserts audio stimuli*/
var stressAudio = document.createElement("audio");
stressAudio.id = "stress_test_stimuli";
audio_div.appendChild(stressAudio);



/* Start Stress Test*/
var stressTest = function(){
		
	/* Plays audio stimuli*/	
	var sample = stressStimuli[i];
	stressAudio.src = sample.audio;
	playAudioFile("stress_test_stimuli");
	i++;
		
	/* Inserts Image*/
	stressImg.src = sample.image;
	stress_test_image.appendChild(stressImg);
	

	/* Inserts Map*/
	var stressMap = document.createElement("map");
	stress_test_image.appendChild(stressMap);
	stressMap.name = "stressMap";
	stressImg.useMap = "#stressMap";

};

var syllable1 = function(){
	console.log("first syllable");
};

var syllable2 = function(){
	console.log("second syllable");
};



