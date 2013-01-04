

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
	playAudioFile("stress_test_stimuli");

	/* Inserts Image*/
	var DOM_img = document.createElement("img");
	DOM_img.src = "./../audio_stimuli/stressTest/believe.gif";
	stress_test_image.appendChild(DOM_img);
};
