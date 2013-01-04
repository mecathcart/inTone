
/* Initial hello world test will eventually eliminate*/
var StressTest = function(){
	console.log("This is the stress test");
	return true;
};

/* Play sound check*/

var soundCheck = function(){
   playAudioFile("sound_check");
};

var playAudioFile = function(divid) {
    document.getElementById(divid).play();
};
