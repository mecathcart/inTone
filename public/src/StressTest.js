

/* Play sound check*/
var soundCheck = function(){
   playAudioFile("sound_check");
};

/* Play sound check*/
var playAudioFile = function(divid) {
    document.getElementById(divid).play();
};

/* Start Stress Test*/
var stressTest = function(){
	
	/* Play stimuli*/
	var stressAudio = document.createElement("audio");
	stressAudio.id = "stress_test_stimuli"
	stressAudio.src = "./../audio_stimuli/stressTest/believe_full.wav";
	audio_div.appendChild(stressAudio);
	playAudioFile("stress_test_stimuli");

	/* Inserts Image*/
	var stressImg = document.createElement("img");
	stressImg.src = "./../audio_stimuli/stressTest/believe.gif";
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
