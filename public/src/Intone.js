
/*Constructor*/
function IntoneStimuli(category,audioI, audioN, continuationA,continuationB){
	this.category = category;
	this.audioI = audioI;
	this.audioN = audioN;
	this.continuationA = continuationA;
	this.continuationB = continuationB;

}

function Filler(audio,continuationA,continuationB,answer){
	this.audio = audio;
	this.continuationA = continuationA;
	this.continuationB = continuationB;
	this.answer = answer;	

}

/*Stimuli*/
var ambitious = new IntoneStimuli("compliment", 
	"./../audio_stimuli/Test1/01-CI-ambitious.mp3",
	"./../audio_stimuli/Test1/01-CN-ambitious.mp3"
	"She doesn’t have much talent, unfortunately.", 
	"She has achieved so much in her career.");
var children = new IntoneStimuli("compliment", 
	"./../audio_stimuli/Test1/02-CI-children.mp3",
	"./../audio_stimuli/Test1/02-CN-children.mp3",
	"We hated their parents.", 
	"They are surprisingly polite.");
var colorful = new IntoneStimuli("compliment", 
	"./../audio_stimuli/Test1/03-CI-colorful.mp3",
	"./../audio_stimuli/Test1/03-CN-colorful.mp3",
	"It’s really ugly otherwise.", 
	"It has amazing details.");
var food = new IntoneStimuli("compliment", 
	"./../audio_stimuli/Test1/04-CI-food.mp3",
	"./../audio_stimuli/Test1/04-CN-food.mp3",
	"However, it has terrible service.", 
	"It’s one of our favorite places.");
var friendly = new IntoneStimuli("compliment",
	"./../audio_stimuli/Test1/05-CI-friendly.mp3",
	 "./../audio_stimuli/Test1/05-CN-friendly.mp3",
	"However, she isn’t very smart.", 
	"She is wonderful with children.");
var hair = new IntoneStimuli("compliment",
	"./../audio_stimuli/Test1/06-CI-hair.mp3",
	"./../audio_stimuli/Test1/06-CN-hair.mp3"
	"She is not very pretty otherwise.", 
	"She has a nice face, too.");
var intelligent = new IntoneStimuli("compliment",
	"./../audio_stimuli/Test1/07-CI-intelligent.mp3",
	"./../audio_stimuli/Test1/07-CN-intelligent.mp3",
	"She has no friends, though.", 
	"She is an expert in her field.");
var large = new IntoneStimuli("compliment",
 	"./../audio_stimuli/Test1/08-CI-large.mp3",
 	"./../audio_stimuli/Test1/08-CN-large.mp3",
	"But it feels dark and depressing.", 
 	"It has a beautiful kitchen, too.");
var popular = new IntoneStimuli("compliment",
	"./../audio_stimuli/Test1/09-CI-popular.mp3",
	"./../audio_stimuli/Test1/09-CN-popular.mp3",
	"She can be very selfish, though.", 
	"Everyone loves spending time with her.");
var read = new IntoneStimuli("compliment",
 	 "./../audio_stimuli/Test1/10-CI-read.mp3",
     "./../audio_stimuli/Test1/10-CN-read.mp3",
 	 "But the story is a little boring.", 
     "It has great illustrations, too.");
var rich = new IntoneStimuli("compliment", 
	 "./../audio_stimuli/Test1/11-CI-rich.mp3",
	 "./../audio_stimuli/Test1/11-CN-rich.mp3",
	 "However, he’s not very handsome.", 
	 "He inherited a lot of money.");
var swimmer = new IntoneStimuli("compliment", 
	 "./../audio_stimuli/Test1/12-CI-swimmer.mp3",
	 "./../audio_stimuli/Test1/12-CN-swimmer.mp3",
	 "He can’t play any other sports, though.", 
	 "He could even win an Olympic medal.");



var practice = function(){
	console.log(ambitious.audioN);
}

var playAudioFile = function(divid) {
    document.getElementById(divid).play();
};



