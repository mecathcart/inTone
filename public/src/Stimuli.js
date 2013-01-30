/*Constructors*/
function IntoneStimuli(category,audioI, audioN, continuationA,continuationB){
	this.category = category;
	this.audioI = audioI;
	this.audioN = audioN;
	this.continuationA = continuationA;
	this.continuationB = continuationB;

}

function Filler(audio,continuationA,continuationB){
	this.audio = audio;
	this.continuationA = continuationA;
	this.continuationB = continuationB;
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
	 "./../audio_stimuli/Test1/13-SN-applepie.mp3",
	 "The peach pie tasted bad.",
	 "The apple cake tasted bad."
	);
var bigcities = new IntoneStimuli("stressAdj",
	 "./../audio_stimuli/Test1/14-SA-bigcities.mp3",
	 "./../audio_stimuli/Test1/14-SN-bigcities.mp3",
	 "The small cities are safe.",
	 "The big towns are safe."
	);

var favoriteuncle = new IntoneStimuli("stressAdj",
	 "./../audio_stimuli/Test1/15-SA-favoriteuncle.mp3",
	 "./../audio_stimuli/Test1/15-SN-favoriteuncle.mp3",
	 "My boring uncle takes me to the movies.",
	 "My favorite aunt takes me to the movies."
	);
var glassplate = new IntoneStimuli("stressAdj",
	 "./../audio_stimuli/Test1/16-SA-glassplate.mp3",
	 "./../audio_stimuli/Test1/16-SN-glassplate.mp3",
	 "The plastic plate is dirty.",
	 "The glass bowl is dirty."
	);
var goldbracelet = new IntoneStimuli("stressAdj",
	 "./../audio_stimuli/Test1/17-SA-goldbracelet.mp3",
	 "./../audio_stimuli/Test1/17-SN-goldbracelet.mp3",
	 "The silver bracelet is cheap.",
	 "The gold earrings are cheap."
	);
var greenolives = new IntoneStimuli("stressAdj",
	 "./../audio_stimuli/Test1/18-SA-greenolives.mp3",
	 "./../audio_stimuli/Test1/18-SN-greenolives.mp3",
	 "The black olives are big.",
	 "The green beans are big."
	);
var newcamera = new IntoneStimuli("stressAdj",
	"./../audio_stimuli/Test1/19-SA-newcamera.mp3",
	 "./../audio_stimuli/Test1/19-SN-newcamera.mp3",
	 "The old camera still works.",
	 "The new phone works fine."
	);
var oldman = new IntoneStimuli("stressAdj",
	"./../audio_stimuli/Test1/20-SA-oldman.mp3",
	 "./../audio_stimuli/Test1/20-SN-oldman.mp3",
	 "The young man is nice.",
	 "The old woman is nice."
	);
var redshirt = new IntoneStimuli("stressAdj",
	 "./../audio_stimuli/Test1/21-SA-redshirt.mp3",
	 "./../audio_stimuli/Test1/21-SN-redshirt.mp3",
	 "The blue shirt is dry.",
	 "The red pants are dry."

	);
var uglydog = new IntoneStimuli("stressAdj",
	"./../audio_stimuli/Test1/22-SA-uglydog.mp3",
	 "./../audio_stimuli/Test1/22-SN-uglydog.mp3",
	 "The cute dog sat quietly.",
	 "The ugly cat sat quietly."

		);
var winterjacket = new IntoneStimuli("stressAdj",
	"./../audio_stimuli/Test1/23-SA-winterjacket.mp3",
	 "./../audio_stimuli/Test1/23-SN-winterjacket.mp3",
	 "My spring jacket is in the closet.",
	 "My winter boots are in the closet."
	);
var youngerbrother = new IntoneStimuli("stressAdj",
	"./../audio_stimuli/Test1/24-SA-youngerbrother.mp3",
	 "./../audio_stimuli/Test1/24-SN-youngerbrother.mp3",
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

/*Fillers*/
var beach = new Filler(
	"./../audio_stimuli/Test1/F1-P-beach.mp3",
	"She played in the water.",
	"She went roller-skating.");
var boatride = new Filler(
	"./../audio_stimuli/Test1/F2-I-boatride.mp3",
	"He got sick, though.",
	"He went skiing, too.");
var boyfriend = new Filler(
	"./../audio_stimuli/Test1/F3-I-boyfriend.mp3",
	"They talked for a long time.",
	"She was also reading a book.");
var cake = new Filler(
	"./../audio_stimuli/Test1/F4-I-cake.mp3",
	"But she didn’t have enough flour.",
	"She added vegetables to it.");
var childrenF = new Filler(
	"./../audio_stimuli/Test1/F5-I-children.mp3",
	"She fed them breakfast.",
	"But she didn’t say goodbye.");
var clothes = new Filler(
	"./../audio_stimuli/Test1/F6-I-clothes.mp3",
	"Then she put them in the dryer.",
	"Then she lit some candles.");
var concert = new Filler(
	"./../audio_stimuli/Test1/F7-I-concert.mp3",
	"They wouldn’t sign autographs, though.",
	"They watched the football game.");
var dinner = new Filler(
	"./../audio_stimuli/Test1/F8-I-dinner.mp3",
	"Then he washed the dishes.",
	"Then he drove home from work.");
var drowning = new Filler(
	"./../audio_stimuli/Test1/F9-I-drowning.mp3",
	"He brought the boy to the hospital afterwards.",
	"He ate some pizza for dinner afterwards.");
var fishing = new Filler(
	"./../audio_stimuli/Test1/F10-I-fishing.mp3",
	"She only caught one fish, though.",
	"She rode a pony through the woods.");
var flowers = new Filler(
	"./../audio_stimuli/Test1/F11-I-flowers.mp3",
	"Then she watered them.",
	"Then she parked the car.");
var goal = new Filler(
	"./../audio_stimuli/Test1/F12-I-goal.mp3",
	"The soccer player cheered.",
	"But he was upset.");
var haircut = new Filler(
	"./../audio_stimuli/Test1/F13-I-haircut.mp3",
	"Then she went on a date.",
	"Then she took a shower.");
var hand = new Filler(
	"./../audio_stimuli/Test1/F14-I-hand.mp3",
	"He bandaged it later.",
	"He played tennis later.");
var home = new Filler(
	"./../audio_stimuli/Test1/F15-I-home.mp3",
	"She didn’t hear the doorbell ring, though.",
	"She went swimming near the park.");
var homework = new Filler(
	"./../audio_stimuli/Test1/F16-I-homework.mp3",
	"He graded it right away.",
	"He drew pictures on it.");
var house = new Filler(
	"./../audio_stimuli/Test1/F17-I-house.mp3",
	"He wants to move across the country.",
	"He wants to become an artist.");
var joke = new Filler(
	"./../audio_stimuli/Test1/F18-I-joke.mp3",
	"She shared it with her friends.",
	"She made some iced tea instead.");
var leak = new Filler(
	"./../audio_stimuli/Test1/F19-I-leak.mp3",
	"He fixed the pipes.",
	"He painted the wall.");
var library = new Filler(
	"./../audio_stimuli/Test1/F20-I-library.mp3",
	"She will try to read there.",
	"She will take her dog for a walk there.");
var lost = new Filler(
	"./../audio_stimuli/Test1/F21-I-lost.mp3",
	"He didn’t get angry, though.",
	"He celebrated all night.");
var mall = new Filler(
	"./../audio_stimuli/Test1/F22-I-mall.mp3",
	"She bought some nice clothes.",
	"She forgot to eat lunch, though.");
var money = new Filler(
	"./../audio_stimuli/Test1/F23-I-money.mp3",
	"So he couldn’t pay the bill.",
	"He had fun, anyway.");
var mountain = new Filler(
	"./../audio_stimuli/Test1/F24-I-mountain.mp3",
	"She took lots of pictures.",
	"She took a plane ride to Canada.");
var movie = new Filler(
	"./../audio_stimuli/Test1/F25-I-movie.mp3",
	"We think it will be great.",
	"He will play baseball next year.");
var newyork = new Filler(
	"./../audio_stimuli/Test1/F26-I-newyork.mp3",
	"She went to see the Statue of Liberty.",
	"However, she went to see the Eiffel Tower.");
var party = new Filler(
	"./../audio_stimuli/Test1/F27-I-party.mp3",
	"She invited all of her friends.",
	"She camped in the mountains.");
var patient = new Filler(
	"./../audio_stimuli/Test1/F28-I-patient.mp3",
	"Then he gave some advice.",
	"Then he drank a beer.");
var postoffice = new Filler(
	"./../audio_stimuli/Test1/F29-I-postoffice.mp3",
	"He mailed a letter.",
	"He didn’t cash his check.");
var scarf = new Filler(
	"./../audio_stimuli/Test1/F30-I-scarf.mp3",
	"It was warm outside.",
	"It was cold outside.");
var skirt = new Filler(
	"./../audio_stimuli/Test1/F31-I-skirt.mp3",
	"She got dressed afterwards.",
	"She went hunting afterwards.");
var spanish = new Filler(
	"./../audio_stimuli/Test1/F32-I-spanish.mp3",
	"She went to Mexico to practice it.",
	"She went to China to practice it.");
var ticket = new Filler(
	"./../audio_stimuli/Test1/F33-I-ticket.mp3",
	"She stayed very calm, though.",
	"Then she started playing the violin.");
var wallets = new Filler(
	"./../audio_stimuli/Test1/F34-I-wallets.mp3",
	"They ran away quickly.",
	"They waited for the police.");
var wedding = new Filler(
	"./../audio_stimuli/Test1/F35-I-wedding.mp3",
	"She danced all night.",
	"But she wore old clothes.");
var zoo = new Filler(
	"./../audio_stimuli/Test1/F36-I-zoo.mp3",
	"They saw the monkeys.",
	"They saw the dinosaurs.");

/*Array of stimuli*/
var practiceStimuli1 = [colorful, large, applepie, bigcities, like, planning, beach, boatride];

//array that has been shuffled
var practiceStimuli = [bigcities, like, applepie, boatride, colorful, beach, large, planning];
var answerArrayPractice = ["A", "B", "B", "B", "B", "B", "B", "A", "A", "B", "A", "A"];
var test1Stimuli = [dinner,spanish,wants,patient,scarf,appears,concert,glassplate,favoriteuncle,party,sounds,lost,wallets,fishing,cake,intends,youngerbrother,seemed,newcamera,newyork,zoo,children,food,wedding,looks,rich,skirt,intelligent,hoping,oldman,house,greenolives,hair,mall,clothes,drowning,redshirt,boyfriend,joke,friendly,library,goldbracelet,haircut,says,money,hand,postoffice,smells,flowers,movie,home,thinks,winterjacket,leak,popular,ticket,goal,ambitious,mountain,uglydog,homework,read,childrenF,swimmer];
var answerArrayT1 = ["B", "A", "A", "A", "B", "A", "A", "B", "A", "A", "A", "B", "B", "A", "B", "B", "B", "B", "A", "A", "A", "B", "B", "A", "B", "A", "A", "B", "A", "A", "B", "B", "A", "A", "A", "B", "A", "A", "A", "A", "B", "B", "B", "A", "B", "A", "B", "B", "A", "A", "A", "B", "A", "B", "B", "B", "A", "A", "B", "A", "B", "B", "A", "A"];


