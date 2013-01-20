var i = 0;

function fisherYates ( myArray ) {
  var i = myArray.length, j, tempi, tempj;
  if ( i == 0 ) return false;
  while ( --i ) {
     j = Math.floor( Math.random() * ( i + 1 ) );
     tempi = myArray[i];
     tempj = myArray[j];
     myArray[i] = tempj;
     myArray[j] = tempi;
   }
}

//fisherYates(window.practiceStimuli);	

/*creates audio div*/
var intoneAudio = document.createElement("audio");
intoneAudio.id = "intone_stimuli";
audio_div.appendChild(intoneAudio);


/*The function that is called when the practice button is clicked*/
var practice = function(){

	/*hide start button and instructions*/
	$("#practice_instructions").hide();
	$("#start_practice").hide()

	/*Go through stimuli*/
	if(i < practiceStimuli.length){	

		var sample = window.practiceStimuli[i];	

		/* Plays audio stimuli*/	
		if ( sample.hasOwnProperty('audio') ) {
			intoneAudio.src = sample.audio;
			playAudioFile("intone_stimuli");
		}else{
			intoneAudio.src = sample.audioI;
			playAudioFile("intone_stimuli");
		}

		/*Insert continuations*/
		document.getElementById("continuationA").innerHTML = sample.continuationA;
		document.getElementById("continuationB").innerHTML = sample.continuationB;

		/*Move on to next stimuli*/
		i++;
	}else{
		console.log("asldfajf");
	}
	
}

var playAudioFile = function(divid) {
    document.getElementById(divid).play();
};




