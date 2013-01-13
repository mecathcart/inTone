

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

/* Creates the Maps*/
var createMap1 = function(){
	var stressMap1 = document.createElement("map");
	stressMap1.name = "stressMap1";

	var area1 = document.createElement("area");
	area1.shape = "rect";
	area1.coords = "0,0,155,300";
	area1.href = "#";
	area1.onclick = function(){
		console.log("I clicked on the first syllable");
	};

	var area2 = document.createElement("area");
		area2.shape = "rect";
		area2.coords = "155,0,400,300";
		area2.href = "#";
		area2.onclick = function(){
			console.log("I clicked on the second syllable");
	};

	stressImg.useMap = "#stressMap1";
	stress_test_image.appendChild(stressMap1);
	stressMap1.appendChild(area1);
	stressMap1.appendChild(area2);
};

var createMap2 = function(){
	var stressMap2 = document.createElement("map");
	stressMap2.name = "stressMap2";

	var area1 = document.createElement("area");
	area1.shape = "rect";
	area1.coords = "0,0,100,300";
	area1.href = "#";
	area1.onclick = function(){
		console.log("I clicked on the first syllable");
	};

	var area2 = document.createElement("area");
		area2.shape = "rect";
		area2.coords = "100,0,200,300";
		area2.href = "#";
		area2.onclick = function(){
			console.log("I clicked on the second syllable");
	};

	var area3 = document.createElement("area");
		area3.shape = "rect";
		area3.coords = "200,0,300,300";
		area3.href = "#";
		area3.onclick = function(){
			console.log("I clicked on the third syllable");
	};

	stressImg.useMap = "#stressMap2";
	stress_test_image.appendChild(stressMap2);
	stressMap2.appendChild(area1);
	stressMap2.appendChild(area2);
	stressMap2.appendChild(area3);

};






var stressMap3 = document.createElement("map");
stressMap3.name = "stressMap3";

var stressMap4 = document.createElement("map");
stressMap4.name = "stressMap4";





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

	if(sample.numSyllables === 2){

		createMap1();

	}else{
		createMap2();
	}


	
};





