
/*Constructors*/
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
/*Test 1 Compliment*/
var ambitious = new IntoneStimuli("compliment", 
	"./../audio_stimuli/Test1/01-CI-ambitious.mp3",
	"./../audio_stimuli/Test1/01-CN-ambitious.mp3",
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
	"./../audio_stimuli/Test1/06-CN-hair.mp3",
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


/*Test 1 Stress Adjectives*/
var applepie = new IntoneStimuli("stressAdj",
	 "./../audio_stimuli/Test1/13-SA-applepie.mp3",
	 "./../audio_stimuli/Test1/13-SI-applepie.mp3",
	 "The peach pie tasted bad.",
	 "The apple cake tasted bad."
	);
var bigcities = new IntoneStimuli("stressAdj",
	 "./../audio_stimuli/Test1/14-SA-bigcities.mp3",
	 "./../audio_stimuli/Test1/14-SI-bigcities.mp3",
	 "The small cities are safe.",
	 "The big towns are safe."
	);

var favoriteuncle = new IntoneStimuli("stressAdj",
	 "./../audio_stimuli/Test1/15-SA-favoriteuncle.mp3",
	 "./../audio_stimuli/Test1/15-SI-favoriteuncle.mp3",
	 "My boring uncle takes me to the movies.",
	 "My favorite aunt takes me to the movies."
	);
var glassplate = new IntoneStimuli("stressAdj",
	 "./../audio_stimuli/Test1/16-SA-glassplate.mp3",
	 "./../audio_stimuli/Test1/16-SI-glassplate.mp3",
	 "The plastic plate is dirty.",
	 "The glass bowl is dirty."
	);
var goldbracelet = new IntoneStimuli("stressAdj",
	 "./../audio_stimuli/Test1/17-SA-goldbracelet.mp3",
	 "./../audio_stimuli/Test1/17-SI-goldbracelet.mp3",
	 "The silver bracelet is cheap.",
	 "The gold earrings are cheap."
	);
var greenolives = new IntoneStimuli("stressAdj",
	 "./../audio_stimuli/Test1/18-SA-greenolives.mp3",
	 "./../audio_stimuli/Test1/18-SI-greenolives.mp3",
	 "The black olives are big.",
	 "The green beans are big."
	);
var newcamera = new IntoneStimuli("stressAdj",
	"./../audio_stimuli/Test1/19-SA-newcamera.mp3",
	 "./../audio_stimuli/Test1/19-SI-newcamera.mp3",
	 "The old camera still works.",
	 "The new phone works fine."
	);
var oldman = new IntoneStimuli("stressAdj",
	"./../audio_stimuli/Test1/20-SA-oldman.mp3",
	 "./../audio_stimuli/Test1/20-SI-oldman.mp3",
	 "The young man is nice.",
	 "The old woman is nice."
	);
var redshirt = new IntoneStimuli("stressAdj",
	 "./../audio_stimuli/Test1/21-SA-redshirt.mp3",
	 "./../audio_stimuli/Test1/21-SI-redshirt.mp3",
	 "The blue shirt is dry.",
	 "The red pants are dry."

	);
var uglydog = new IntoneStimuli("stressAdj",
	"./../audio_stimuli/Test1/22-SA-uglydog.mp3",
	 "./../audio_stimuli/Test1/22-SI-uglydog.mp3",
	 "The cute dog sat quietly.",
	 "The ugly cat sat quietly."

		);
var winterjacket = new IntoneStimuli("stressAdj",
	"./../audio_stimuli/Test1/23-SA-winterjacket.mp3",
	 "./../audio_stimuli/Test1/23-SI-winterjacket.mp3",
	 "My spring jacket is in the closet.",
	 "My winter boots are in the closet."
	);
var youngerbrother = new IntoneStimuli("stressAdj",
	"./../audio_stimuli/Test1/24-SA-youngerbrother.mp3",
	 "./../audio_stimuli/Test1/24-SI-youngerbrother.mp3",
	 "Her older brother is single.",
	 "Her younger sister is single."
	);

/*Test 1 Verb*/
var appears = new IntoneStimuli("verb",
	"./../audio_stimuli/Test1/25-VI-appears.mp3",
	 "./../audio_stimuli/Test1/25-VN-appears.mp3",
	 "Which is strange, because he hates crowds.",
	 "I’m so glad he was invited.");
var hoping = new IntoneStimuli("verb",
	"./../audio_stimuli/Test1/26-VI-hoping.mp3",
	 "./../audio_stimuli/Test1/26-VN-hoping.mp3",
	 "But he is afraid that he is not qualified.",
	 "He would really like to work for that company.");
var intends = new IntoneStimuli("verb",
	"./../audio_stimuli/Test1/27-VI-intends.mp3",
	 "./../audio_stimuli/Test1/27-VN-intends.mp3",
	 "He might have to find a job instead.",
	 "He wants to go to Harvard University.");
var like = new IntoneStimuli("verb",
	"./../audio_stimuli/Test1/28-VI-like.mp3",
	 "./../audio_stimuli/Test1/28-VN-like.mp3",
	 "He can’t have one, though.",
	 "And he wants fries with it.");
var looks = new IntoneStimuli("verb",
	"./../audio_stimuli/Test1/29-VI-looks.mp3",
	 "./../audio_stimuli/Test1/29-VN-looks.mp3",
	 "But he is actually very sick.",
	 "I wonder if he joined a gym.");
var planning = new IntoneStimuli("verb",
	"./../audio_stimuli/Test1/30-VI-planning.mp3",
	 "./../audio_stimuli/Test1/30-VN-planning.mp3",
	 "But she doesn’t know when she will have time.",
	 "She wants to impress all of her friends.");
var says = new IntoneStimuli("verb",
	"./../audio_stimuli/Test1/31-VI-says.mp3",
	 "./../audio_stimuli/Test1/31-VN-says.mp3",
	 "We don’t believe she’ll actually come.",
	 "We will be so happy to see her.");
var seemed = new IntoneStimuli("verb",
	"./../audio_stimuli/Test1/32-VI-seemed.mp3",
	 "./../audio_stimuli/Test1/32-VN-seemed.mp3",
	 "However, maybe he was just being polite.",
	 "Next time I’ll make an extra one, just for him.");
var smells = new IntoneStimuli("verb",
	"./../audio_stimuli/Test1/33-VI-smells.mp3",
	 "./../audio_stimuli/Test1/33-VN-smells.mp3",
	 "But it tastes terrible!",
	 "And it tastes great too!");
var sounds = new IntoneStimuli("verb",
	"./../audio_stimuli/Test1/34-VI-sounds.mp3",
	 "./../audio_stimuli/Test1/34-VN-sounds.mp3",
	 "But he doesn’t know what he’s talking about.",
	 "I think I am going to like his class.");
var thinks = new IntoneStimuli("verb",
	"./../audio_stimuli/Test1/35-VI-thinks.mp3",
	 "./../audio_stimuli/Test1/35-VN-thinks.mp3",
	 "But her teacher’s exams can be quite hard.",
	 "She won't know her grade until Thursday.");
var wants = new IntoneStimuli("verb",
	"./../audio_stimuli/Test1/36-VI-wants.mp3",
	 "./../audio_stimuli/Test1/36-VN-wants.mp3",
	 "But his parents won’t let him.",
	 "Maybe you should invite him.");





var intoneStimuli = [ambitious, children, colorful, food, hair, intelligent, large, popular, read, rich, swimmer];
var i = 0;

var intoneAudio = document.createElement("audio");
intoneAudio.id = "intone_stimuli";
audio_div.appendChild(intoneAudio);

var practice = function(){
	/*hide start button and instructions*/
	$("#practice_instructions").hide();
	$("#start_practice").hide();

	var sample = intoneStimuli[i];	

	/* Plays audio stimuli*/	
	intoneAudio.src = sample.audioI;
	playAudioFile("intone_stimuli");

	/*Insert continuations*/
	document.getElementById("continuationA").innerHTML = sample.continuationA;
	document.getElementById("continuationB").innerHTML = sample.continuationB;

	/*Move on to next stimuli*/
	i++;
}

var playAudioFile = function(divid) {
    document.getElementById(divid).play();
};




