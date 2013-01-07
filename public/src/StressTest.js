

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
	var stressImg = document.createElement("img");
	stressImg.src = "./../audio_stimuli/stressTest/believe.gif";
	stress_test_image.appendChild(stressImg);




	/* Creates Map*/
	//Not sure why this bit of code won't work
	var stressMap = document.createElement("map");
	stressMap.name = "stressMap";
	stress_test_image.appendChild(stressMap);
	stressMap.shape = "default";
	//stressMap.coords = "0,0,500,500";
	stressMap.alt = "be";
	stressImg.useMap = "#stressMap";
	stressMap.onclick = function() {
		console.log("be");
 	};
};
