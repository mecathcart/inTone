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
	"...She doesn’t have much talent, unfortunately.", 
	"...She has achieved so much in her career.");
var children = new IntoneStimuli("compliment", 
	"./../audio_stimuli/Test1/02-CI-children.mp3",
	"./../audio_stimuli/Test1/02-CN-children.mp3",
	"...We hated their parents.", 
	"...They are surprisingly polite.");
var colorful = new IntoneStimuli("compliment", 
	"./../audio_stimuli/Test1/03-CI-colorful.mp3",
	"./../audio_stimuli/Test1/03-CN-colorful.mp3",
	"...It’s really ugly otherwise.", 
	"...It has amazing details.");
var food = new IntoneStimuli("compliment", 
	"./../audio_stimuli/Test1/04-CI-food.mp3",
	"./../audio_stimuli/Test1/04-CN-food.mp3",
	"...However, it has terrible service.", 
	"...It’s one of our favorite places.");
var friendly = new IntoneStimuli("compliment",
	"./../audio_stimuli/Test1/05-CI-friendly.mp3",
	 "./../audio_stimuli/Test1/05-CN-friendly.mp3",
	"...However, she isn’t very smart.", 
	"...She is wonderful with children.");
var hair = new IntoneStimuli("compliment",
	"./../audio_stimuli/Test1/06-CI-hair.mp3",
	"./../audio_stimuli/Test1/06-CN-hair.mp3",
	"...She is not very pretty otherwise.", 
	"...She has a nice face, too.");
var intelligent = new IntoneStimuli("compliment",
	"./../audio_stimuli/Test1/07-CI-intelligent.mp3",
	"./../audio_stimuli/Test1/07-CN-intelligent.mp3",
	"...She has no friends, though.", 
	"...She is an expert in her field.");
var large = new IntoneStimuli("compliment",
 	"./../audio_stimuli/Test1/08-CI-large.mp3",
 	"./../audio_stimuli/Test1/08-CN-large.mp3",
	"...But it feels dark and depressing.", 
 	"...It has a beautiful kitchen, too.");
var popular = new IntoneStimuli("compliment",
	"./../audio_stimuli/Test1/09-CI-popular.mp3",
	"./../audio_stimuli/Test1/09-CN-popular.mp3",
	"...She can be very selfish, though.", 
	"...Everyone loves spending time with her.");
var read = new IntoneStimuli("compliment",
 	 "./../audio_stimuli/Test1/10-CI-read.mp3",
     "./../audio_stimuli/Test1/10-CN-read.mp3",
 	 "...But the story is a little boring.", 
     "...It has great illustrations, too.");
var rich = new IntoneStimuli("compliment", 
	 "./../audio_stimuli/Test1/11-CI-rich.mp3",
	 "./../audio_stimuli/Test1/11-CN-rich.mp3",
	 "...However, he’s not very handsome.", 
	 "...He inherited a lot of money.");
var swimmer = new IntoneStimuli("compliment", 
	 "./../audio_stimuli/Test1/12-CI-swimmer.mp3",
	 "./../audio_stimuli/Test1/12-CN-swimmer.mp3",
	 "...He can’t play any other sports, though.", 
	 "...He could even win an Olympic medal.");

/*Test 1 Stress Adjectives*/
var applepie = new IntoneStimuli("stressAdj",
	 "./../audio_stimuli/Test1/13-SA-applepie.mp3",
	 "./../audio_stimuli/Test1/13-SN-applepie.mp3",
	 "...The peach pie tasted bad.",
	 "...The apple cake tasted bad."
	);
var bigcities = new IntoneStimuli("stressAdj",
	 "./../audio_stimuli/Test1/14-SA-bigcities.mp3",
	 "./../audio_stimuli/Test1/14-SN-bigcities.mp3",
	 "...The small cities are safe.",
	 "...The big towns are safe."
	);
var favoriteuncle = new IntoneStimuli("stressAdj",
	 "./../audio_stimuli/Test1/15-SA-favoriteuncle.mp3",
	 "./../audio_stimuli/Test1/15-SN-favoriteuncle.mp3",
	 "...My boring uncle takes me to the movies.",
	 "...My favorite aunt takes me to the movies."
	);
var glassplate = new IntoneStimuli("stressAdj",
	 "./../audio_stimuli/Test1/16-SA-glassplate.mp3",
	 "./../audio_stimuli/Test1/16-SN-glassplate.mp3",
	 "...The plastic plate is dirty.",
	 "...The glass bowl is dirty."
	);
var goldbracelet = new IntoneStimuli("stressAdj",
	 "./../audio_stimuli/Test1/17-SA-goldbracelet.mp3",
	 "./../audio_stimuli/Test1/17-SN-goldbracelet.mp3",
	 "...The silver bracelet is cheap.",
	 "...The gold earrings are cheap."
	);
var greenolives = new IntoneStimuli("stressAdj",
	 "./../audio_stimuli/Test1/18-SA-greenolives.mp3",
	 "./../audio_stimuli/Test1/18-SN-greenolives.mp3",
	 "...The black olives are big.",
	 "...The green beans are big."
	);
var newcamera = new IntoneStimuli("stressAdj",
	"./../audio_stimuli/Test1/19-SA-newcamera.mp3",
	 "./../audio_stimuli/Test1/19-SN-newcamera.mp3",
	 "...The old camera still works.",
	 "...The new phone works fine."
	);
var oldman = new IntoneStimuli("stressAdj",
	"./../audio_stimuli/Test1/20-SA-oldman.mp3",
	 "./../audio_stimuli/Test1/20-SN-oldman.mp3",
	 "...The young man is nice.",
	 "...The old woman is nice."
	);
var redshirt = new IntoneStimuli("stressAdj",
	 "./../audio_stimuli/Test1/21-SA-redshirt.mp3",
	 "./../audio_stimuli/Test1/21-SN-redshirt.mp3",
	 "...The blue shirt is dry.",
	 "...The red pants are dry."
	);
var uglydog = new IntoneStimuli("stressAdj",
	"./../audio_stimuli/Test1/22-SA-uglydog.mp3",
	 "./../audio_stimuli/Test1/22-SN-uglydog.mp3",
	 "...The cute dog sat quietly.",
	 "...The ugly cat sat quietly."
	);
var winterjacket = new IntoneStimuli("stressAdj",
	"./../audio_stimuli/Test1/23-SA-winterjacket.mp3",
	 "./../audio_stimuli/Test1/23-SN-winterjacket.mp3",
	 "...My spring jacket is in the closet.",
	 "...My winter boots are in the closet."
	);
var youngerbrother = new IntoneStimuli("stressAdj",
	"./../audio_stimuli/Test1/24-SA-youngerbrother.mp3",
	 "./../audio_stimuli/Test1/24-SN-youngerbrother.mp3",
	 "...Her older brother is single.",
	 "...Her younger sister is single."
	);

/*Test 1 Verb*/
var appears = new IntoneStimuli("verb",
	"./../audio_stimuli/Test1/25-VI-appears.mp3",
	 "./../audio_stimuli/Test1/25-VN-appears.mp3",
	 "...Which is strange, because he hates crowds.",
	 "...I’m so glad he was invited.");
var hoping = new IntoneStimuli("verb",
	"./../audio_stimuli/Test1/26-VI-hoping.mp3",
	 "./../audio_stimuli/Test1/26-VN-hoping.mp3",
	 "...But he is afraid that he is not qualified.",
	 "...He would really like to work for that company.");
var intends = new IntoneStimuli("verb",
	"./../audio_stimuli/Test1/27-VI-intends.mp3",
	 "./../audio_stimuli/Test1/27-VN-intends.mp3",
	 "...He might have to find a job instead.",
	 "...He wants to go to Harvard University.");
var like = new IntoneStimuli("verb",
	"./../audio_stimuli/Test1/28-VI-like.mp3",
	 "./../audio_stimuli/Test1/28-VN-like.mp3",
	 "...He can’t have one, though.",
	 "...And he wants fries with it.");
var looks = new IntoneStimuli("verb",
	"./../audio_stimuli/Test1/29-VI-looks.mp3",
	 "./../audio_stimuli/Test1/29-VN-looks.mp3",
	 "...But he is actually very sick.",
	 "...I wonder if he joined a gym.");
var planning = new IntoneStimuli("verb",
	"./../audio_stimuli/Test1/30-VI-planning.mp3",
	 "./../audio_stimuli/Test1/30-VN-planning.mp3",
	 "...But she doesn’t know when she will have time.",
	 "...She wants to impress all of her friends.");
var says = new IntoneStimuli("verb",
	"./../audio_stimuli/Test1/31-VI-says.mp3",
	 "./../audio_stimuli/Test1/31-VN-says.mp3",
	 "...We don’t believe she’ll actually come.",
	 "...We will be so happy to see her.");
var seemed = new IntoneStimuli("verb",
	"./../audio_stimuli/Test1/32-VI-seemed.mp3",
	 "./../audio_stimuli/Test1/32-VN-seemed.mp3",
	 "...However, maybe he was just being polite.",
	 "...Next time I’ll make an extra one, just for him.");
var smells = new IntoneStimuli("verb",
	"./../audio_stimuli/Test1/33-VI-smells.mp3",
	 "./../audio_stimuli/Test1/33-VN-smells.mp3",
	 "...But it tastes terrible!",
	 "...And it tastes great too!");
var sounds = new IntoneStimuli("verb",
	"./../audio_stimuli/Test1/34-VI-sounds.mp3",
	 "./../audio_stimuli/Test1/34-VN-sounds.mp3",
	 "...But he doesn’t know what he’s talking about.",
	 "...I think I am going to like his class.");
var thinks = new IntoneStimuli("verb",
	"./../audio_stimuli/Test1/35-VI-thinks.mp3",
	 "./../audio_stimuli/Test1/35-VN-thinks.mp3",
	 "...But her teacher’s exams can be quite hard.",
	 "...She won't know her grade until Thursday.");
var wants = new IntoneStimuli("verb",
	"./../audio_stimuli/Test1/36-VI-wants.mp3",
	 "./../audio_stimuli/Test1/36-VN-wants.mp3",
	 "...But his parents won’t let him.",
	 "...Maybe you should invite him.");

/*Fillers*/
var beach = new Filler(
	"./../audio_stimuli/Test1/F1-P-beach.mp3",
	"...She played in the water.",
	"...She went roller-skating.");
var boatride = new Filler(
	"./../audio_stimuli/Test1/F2-I-boatride.mp3",
	"...He got sick, though.",
	"...He went skiing, too.");
var boyfriend = new Filler(
	"./../audio_stimuli/Test1/F3-I-boyfriend.mp3",
	"...They talked for a long time.",
	"...She was also reading a book.");
var cake = new Filler(
	"./../audio_stimuli/Test1/F4-I-cake.mp3",
	"...But she didn’t have enough flour.",
	"...She added vegetables to it.");
var childrenF = new Filler(
	"./../audio_stimuli/Test1/F5-I-children.mp3",
	"...She fed them breakfast.",
	"...But she didn’t say goodbye.");
var clothes = new Filler(
	"./../audio_stimuli/Test1/F6-I-clothes.mp3",
	"...Then she put them in the dryer.",
	"...Then she lit some candles.");
var concert = new Filler(
	"./../audio_stimuli/Test1/F7-I-concert.mp3",
	"...They wouldn’t sign autographs, though.",
	"...They watched the football game.");
var dinner = new Filler(
	"./../audio_stimuli/Test1/F8-I-dinner.mp3",
	"...Then he washed the dishes.",
	"...Then he drove home from work.");
var drowning = new Filler(
	"./../audio_stimuli/Test1/F9-I-drowning.mp3",
	"...He brought the boy to the hospital afterwards.",
	"...He ate some pizza for dinner afterwards.");
var fishing = new Filler(
	"./../audio_stimuli/Test1/F10-I-fishing.mp3",
	"...He only caught one fish, though.",
	"...He rode a pony through the woods.");
var flowers = new Filler(
	"./../audio_stimuli/Test1/F11-I-flowers.mp3",
	"...Then she watered them.",
	"...Then she parked the car.");
var goal = new Filler(
	"./../audio_stimuli/Test1/F12-I-goal.mp3",
	"...The soccer player cheered.",
	"...But he was upset.");
var haircut = new Filler(
	"./../audio_stimuli/Test1/F13-I-haircut.mp3",
	"...Then she went on a date.",
	"...Then she took a shower.");
var hand = new Filler(
	"./../audio_stimuli/Test1/F14-I-hand.mp3",
	"...He bandaged it later.",
	"...He played tennis later.");
var home = new Filler(
	"./../audio_stimuli/Test1/F15-I-home.mp3",
	"...She didn’t hear the doorbell ring, though.",
	"...She went swimming near the park.");
var homework = new Filler(
	"./../audio_stimuli/Test1/F16-I-homework.mp3",
	"...He graded it right away.",
	"...He drew pictures on it.");
var house = new Filler(
	"./../audio_stimuli/Test1/F17-I-house.mp3",
	"...He wants to move across the country.",
	"...He wants to become an artist.");
var joke = new Filler(
	"./../audio_stimuli/Test1/F18-I-joke.mp3",
	"...She shared it with her friends.",
	"...She made some iced tea instead.");
var leak = new Filler(
	"./../audio_stimuli/Test1/F19-I-leak.mp3",
	"...He fixed the pipes.",
	"...He painted the wall.");
var library = new Filler(
	"./../audio_stimuli/Test1/F20-I-library.mp3",
	"...She will try to read there.",
	"...She will take her dog for a walk there.");
var lost = new Filler(
	"./../audio_stimuli/Test1/F21-I-lost.mp3",
	"...He didn’t get angry, though.",
	"...He celebrated all night.");
var mall = new Filler(
	"./../audio_stimuli/Test1/F22-I-mall.mp3",
	"...She bought some nice clothes.",
	"...She forgot to eat lunch, though.");
var money = new Filler(
	"./../audio_stimuli/Test1/F23-I-money.mp3",
	"...So he couldn’t pay the bill.",
	"...He had fun, anyway.");
var mountain = new Filler(
	"./../audio_stimuli/Test1/F24-I-mountain.mp3",
	"...She took lots of pictures.",
	"...She took a plane ride to Canada.");
var movie = new Filler(
	"./../audio_stimuli/Test1/F25-I-movie.mp3",
	"...He fell asleep.",
	"...He started singing.");
var newyork = new Filler(
	"./../audio_stimuli/Test1/F26-I-newyork.mp3",
	"...She went to see the Statue of Liberty.",
	"...However, she went to see the Eiffel Tower.");
var party = new Filler(
	"./../audio_stimuli/Test1/F27-I-party.mp3",
	"...She invited all of her friends.",
	"...She camped in the mountains.");
var patient = new Filler(
	"./../audio_stimuli/Test1/F28-I-patient.mp3",
	"...Then he gave some advice.",
	"...Then he drank a beer.");
var postoffice = new Filler(
	"./../audio_stimuli/Test1/F29-I-postoffice.mp3",
	"...He mailed a letter.",
	"...He didn’t cash his check.");
var scarf = new Filler(
	"./../audio_stimuli/Test1/F30-I-scarf.mp3",
	"...It was cold outside.",
	"...It was warm outside.");
var skirt = new Filler(
	"./../audio_stimuli/Test1/F31-I-skirt.mp3",
	"...She got dressed afterwards.",
	"...She went hunting afterwards.");
var spanish = new Filler(
	"./../audio_stimuli/Test1/F32-I-spanish.mp3",
	"...She went to Mexico to practice it.",
	"...She went to China to practice it.");
var ticket = new Filler(
	"./../audio_stimuli/Test1/F33-I-ticket.mp3",
	"...She stayed very calm, though.",
	"...Then she started playing the violin.");
var wallets = new Filler(
	"./../audio_stimuli/Test1/F34-I-wallets.mp3",
	"...They ran away quickly.",
	"...They waited for the police.");
var wedding = new Filler(
	"./../audio_stimuli/Test1/F35-I-wedding.mp3",
	"...She danced all night.",
	"...But she wore old clothes.");
var zoo = new Filler(
	"./../audio_stimuli/Test1/F36-I-zoo.mp3",
	"...They saw the monkeys.",
	"...They saw the dinosaurs.");

/*Test 2 stimuli*/
/*Test 2 complimints*/
var brave = new IntoneStimuli(
	"compliment", 
	"./../audio_stimuli/Test2/01-CI-brave.wav",
	"./../audio_stimuli/Test2/01-CN-brave.wav",
	"...He's not very reliable, though.",
	"...He saved a little girl from a fire."
	);
var movies2 = new IntoneStimuli(
	"compliment", 
	"./../audio_stimuli/Test2/02-CI-movie.wav",
	"./../audio_stimuli/Test2/02-CN-movie.wav",
	"...But the theater was disgusting.",
	"...It has some of my favorite actors."
	);
var view = new IntoneStimuli(
	"compliment", 
	"./../audio_stimuli/Test2/03-CI-view.wav",
	"./../audio_stimuli/Test2/03-CN-view.wav",
	"...However, it's much too expensive to stay there.",
	"...It will be a lovely place to relax."
	);
var eyes = new IntoneStimuli(
	"compliment", 
	"./../audio_stimuli/Test2/04-CI-eyes.wav",
	"./../audio_stimuli/Test2/04-CN-eyes.wav",
	"...No one likes him, though.",
	"...They are often admired."
	);
var successful = new IntoneStimuli(
	"compliment", 
	"./../audio_stimuli/Test2/05-CI-successful.wav",
	"./../audio_stimuli/Test2/05-CN-successful.wav",
	"...She has a boring personality, though.",
	"...She has inspired many young women."
	);
var funny = new IntoneStimuli(
	"compliment", 
	"./../audio_stimuli/Test2/06-CI-funny.wav",
	"./../audio_stimuli/Test2/06-CN-funny.wav",
	"...But she's not a very good friend.",
	"...She often makes me laugh."
	);
var honest = new IntoneStimuli(
	"compliment", 
	"./../audio_stimuli/Test2/07-CI-honest.wav",
	"./../audio_stimuli/Test2/07-CN-honest.wav",
	"...However, she's not great at comforting people.",
	"...She always gives excellent advice."
	);
var handsome = new IntoneStimuli(
	"compliment", 
	"./../audio_stimuli/Test2/08-CI-handsome.wav",
	"./../audio_stimuli/Test2/08-CN-handsome.wav",
	"...But he's so dumb.",
	"...He should be a model."
	);
var warm = new IntoneStimuli(
	"compliment", 
	"./../audio_stimuli/Test2/09-CI-warm.wav",
	"./../audio_stimuli/Test2/09-CN-warm.wav",
	"...Unfortunately, it's too dirty to swim in.",
	"...The kids love to go swimming there."
	);
var dancer = new IntoneStimuli(
	"compliment", 
	"./../audio_stimuli/Test2/10-CI-dancer.wav",
	"./../audio_stimuli/Test2/10-CN-dancer.wav",
	"...She is a bad student, though.",
	"...She has won many competitions."
	);

/*Stress Test2*/
var cheerfulboy = new IntoneStimuli(
	"stressAdj",
	 "./../audio_stimuli/Test2/11-SA-cheerfulboy.wav",
	 "./../audio_stimuli/Test2/11-SN-cheerfulboy.wav",
	 "...The sad boy is painting a picture.",
	 "...The cheerful girl is painting a picture."
	);
var fatman = new IntoneStimuli("stressAdj",
	 "./../audio_stimuli/Test2/12-SA-fatman.wav",
	 "./../audio_stimuli/Test2/12-SN-fatman.wav",
	 "...The skinny man loves to sing.",
	 "...The fat woman loves to sing."
	);
var tallhat = new IntoneStimuli("stressAdj",
	 "./../audio_stimuli/Test2/13-SA-tallhat.wav",
	 "./../audio_stimuli/Test2/13-SN-tallhat.wav",
	"...The short hat is grey.",
	"...The tall building is grey."
	 );
var brokenbike = new IntoneStimuli("stressAdj",
	 "./../audio_stimuli/Test2/14-SA-brokenbike.wav",
	 "./../audio_stimuli/Test2/14-SN-brokenbike.wav",
	 "...The fixed bike is in the driveway.",
	 "...The broken car is in the driveway."
	 );
var diamondring = new IntoneStimuli("stressAdj",
	 "./../audio_stimuli/Test2/15-SA-diamondring.wav",
	 "./../audio_stimuli/Test2/15-SN-diamondring.wav",
	 "...The pearl ring is ugly.",
	 "...The diamond necklace is ugly."
	 );
var freshtomatoes = new IntoneStimuli("stressAdj",
	 "./../audio_stimuli/Test2/16-SA-freshtomatoes.wav",
	 "./../audio_stimuli/Test2/16-SN-freshtomatoes.wav",
	 "...These cooked tomatoes taste delicious.",
	 "...These fresh cucumbers taste delicious."
	 );
var largespoons = new IntoneStimuli("stressAdj",
	 "./../audio_stimuli/Test2/17-SA-largespoons.wav",
	 "./../audio_stimuli/Test2/17-SN-largespoons.wav",
	"...The small spoons are in the drawer.",
	"...The large knives are in the drawer."
	 );
var redpeppers = new IntoneStimuli("stressAdj",
	 "./../audio_stimuli/Test2/18-SA-redpeppers.wav",
	 "./../audio_stimuli/Test2/18-SN-redpeppers.wav",
	 "...The green peppers are mild.",
	 "...The red onions are mild."
	 );
var bluepants = new IntoneStimuli("stressAdj",
	 "./../audio_stimuli/Test2/19-SA-bluepants.wav",
	 "./../audio_stimuli/Test2/19-SN-bluepants.wav",
	 "...My white pants fit well.",
	 "...My blue shoes fit well."
	 );
var leatherchair = new IntoneStimuli("stressAdj",
	 "./../audio_stimuli/Test2/20-SA-leatherchair.wav",
	 "./../audio_stimuli/Test2/20-SN-leatherchair.wav",
	 "...That wooden chair looks terrible.",
	 "...That leather couch looks terrible."
	 );

/*Verb*/
var trying = new IntoneStimuli("verb",
	"./../audio_stimuli/Test2/21-VI-trying.wav",
	 "./../audio_stimuli/Test2/21-VN-trying.wav",
	 "...However, he probably won't succeed.",
	 "...He already speaks 4 other languages fluently.");
var likes = new IntoneStimuli("verb",
	"./../audio_stimuli/Test2/22-VI-likes.wav",
	 "./../audio_stimuli/Test2/22-VN-likes.wav",
	 "...It makes her stomach hurt, though.",
	 "...She eats it in every meal.");
var looks2 = new IntoneStimuli("verb",
	"./../audio_stimuli/Test2/23-VI-looks.wav",
	 "./../audio_stimuli/Test2/23-VN-looks.wav",
	 "...But I think he's pretending.",
	 "...Maybe we shouldn't bother him.");
var started = new IntoneStimuli("verb",
	"./../audio_stimuli/Test2/24-VI-started.wav",
	 "./../audio_stimuli/Test2/24-VN-started.wav",
	 "...It was too hard, though, so I quit.",
	 "...I will be finished in one hour.");
var says2 = new IntoneStimuli("verb",
	"./../audio_stimuli/Test2/25-VI-says.wav",
	 "./../audio_stimuli/Test2/25-VN-says.wav",
	 "...But when I asked her about it, she couldn't remember anything.",
	 "...Actually, she was surprised how much she enjoyed it.");
var left = new IntoneStimuli("verb",
	"./../audio_stimuli/Test2/26-VI-left.wav",
	 "./../audio_stimuli/Test2/26-VN-left.wav",
	 "...She didn't show up at the office, though.",
	 "...She won't be back until late tonight.");
var wants2 = new IntoneStimuli("verb",
	"./../audio_stimuli/Test2/27-VI-wants.wav",
	 "./../audio_stimuli/Test2/27-VN-wants.wav",
	 "...But he's on a diet, so he can't have any.",
	 "...So, I'll bake a cake tonight.");
var sent = new IntoneStimuli("verb",
	"./../audio_stimuli/Test2/28-VI-sent.wav",
	 "./../audio_stimuli/Test2/28-VN-sent.wav",
	 "...Somehow he didn't receive it.",
	 "...He wrote me back right away.");
var sounds2 = new IntoneStimuli("verb",
	"./../audio_stimuli/Test2/29-VI-sounds.wav",
	 "./../audio_stimuli/Test2/29-VN-sounds.wav",
	 "...I don't know how much it pays, though.",
	 "...I hope I get an interview.");
var has = new IntoneStimuli("verb",
	"./../audio_stimuli/Test2/30-VI-has.wav",
	 "./../audio_stimuli/Test2/30-VN-has.wav",
	 "...However, she still uses her old ripped one.",
	 "...She gets lots of compliments about it.");

/*Fillers*/
var store = new Filler(
	"./../audio_stimuli/Test2/F01-store.wav",
	"...She bought some groceries.",
	"...She robbed a bank.");
var library2 = new Filler(
	"./../audio_stimuli/Test2/F02-library.wav",
	"...He studied hard there.",
	"...He attended his classes.");
var vacation = new Filler(
	"./../audio_stimuli/Test2/F03-vacation.wav",
	"...He visited many museums in Rome.",
	"...He ate a lot of sushi there.");
var circus = new Filler(
	"./../audio_stimuli/Test2/F04-circus.wav",
	"...She hopes to enjoy it.",
	"...She plans to drink a lot there.");
var liar = new Filler(
	"./../audio_stimuli/Test2/F05-liar.wav",
	"...He thinks everyone believes him, though.",
	"...He goes to meetings all day.");
var books = new Filler(
	"./../audio_stimuli/Test2/F06-books.wav",
	"...He's writing an autobiography right now.",
	"...He's painting a house right now.");
var car = new Filler(
	"./../audio_stimuli/Test2/F07-car.wav",
	"...Then he got into an accident.",
	"...Then he read a book.");
var pierced = new Filler(
	"./../audio_stimuli/Test2/F08-pierced.wav",
	"...Then she bought some earrings.",
	"...Then she bought a bracelet.");
var match = new Filler(
	"./../audio_stimuli/Test2/F09-match.wav",
	"...He celebrated with his friends afterwards.",
	"...He went to the hospital, though.");
var party2 = new Filler(
	"./../audio_stimuli/Test2/F10-party.wav",
	"...But he wasn't the only one who did.",
	"...He drank milk there.");
var tree = new Filler(
	"./../audio_stimuli/Test2/F11-tree.wav",
	"...It took her several hours to finish.",
	"...But it caught on fire.");
var gardening = new Filler(
	"./../audio_stimuli/Test2/F12-gardening.wav",
	"...She knows so much about plants.",
	"...She eats a lot of vegetables.");
var grandparents = new Filler(
	"./../audio_stimuli/Test2/F13-grandparents.wav",
	"...Her parents are away on a trip.",
	"...She goes to bed really early.");
var jail = new Filler(
	"./../audio_stimuli/Test2/F14-jail.wav",
	"...He was wrongly accused.",
	"...He is considered a hero.");
var mother = new Filler(
	"./../audio_stimuli/Test2/F15-mother.wav",
	"...She didn't answer, though.",
	"...He talked to the baby.");
var player = new Filler(
	"./../audio_stimuli/Test2/F16-player.wav",
	"...I love going to her concerts.",
	"...She likes to help people in need.");
var photographer = new Filler(
	"./../audio_stimuli/Test2/F17-photographer.wav",
	"...She is passionate about her work.",
	"...She doesn't leave the house often.");
var game = new Filler(
	"./../audio_stimuli/Test2/F18-game.wav",
	"...He's cheering for his favorite team.",
	"...He is doing laundry.");
var towels = new Filler(
	"./../audio_stimuli/Test2/F19-towels.wav",
	"...Then he put them in the closet.",
	"...Then he washed them again.");
var bank = new Filler(
	"./../audio_stimuli/Test2/F20-bank.wav",
	"...He spent it on a birthday present for his girlfriend.",
	"...He worked out at the gym for two hours.");
var house2 = new Filler(
	"./../audio_stimuli/Test2/F21-house.wav",
	"...It caused a lot of damage.",
	"...We stayed at a hotel.");
var replaced = new Filler(
	"./../audio_stimuli/Test2/F22-replaced.wav",
	"...The neighbor threw a ball at it.",
	"...The house is on fire.");
var tonight = new Filler(
	"./../audio_stimuli/Test2/F23-tonight.wav",
	"...It's too bright to watch the stars.",
	"...It's snowing outside right now.");
var opera = new Filler(
	"./../audio_stimuli/Test2/F24-opera.wav",
	"...He can't understand what they're singing.",
	"...He collects baseball cards.");
var team = new Filler(
	"./../audio_stimuli/Test2/F25-team.wav",
	"...She's one of the best players on the team.",
	"...She eats pizza and candy frequently.");
var wet = new Filler(
	"./../audio_stimuli/Test2/F26-wet.wav",
	"...Now I can't read it.",
	"...I'll drink my coffee anyway.");
var accident = new Filler(
	"./../audio_stimuli/Test2/F27-accident.wav",
	"...She is very allergic.",
	"...Her mother was happy.");
var shoes = new Filler(
	"./../audio_stimuli/Test2/F28-shoes.wav",
	"...They were hidden under some clothes.",
	"...She cooked dinner anyway.");
var exam = new Filler(
	"./../audio_stimuli/Test2/F29-exam.wav",
	"...She has to retake it next month.",
	"...She went to a party to celebrate.");
var beef = new Filler(
	"./../audio_stimuli/Test2/F30-beef.wav",
	"...He feels bad for the animals.",
	"...He ate a hamburger.");



ambitious.condition = "I";
children.condition = "N";
food.condition = "N";
friendly.condition = "I";
hair.condition = "N";
intelligent.condition = "I";
popular.condition = "I";
read.condition = "N";
rich.condition = "I";
swimmer.condition = "N";

favoriteuncle.condition = "I";
glassplate.condition = "N";
goldbracelet.condition = "I";
greenolives.condition = "N";
newcamera.condition = "I";
oldman.condition = "N";
redshirt.condition = "I";
uglydog.condition = "N";
winterjacket.condition = "I";
youngerbrother.condition = "N";

appears.condition = "I";
hoping.condition = "N";
intends.condition = "I";
like.condition = "N";
looks.condition = "I";
says.condition = "N";
seemed.condition = "I";
smells.condition = "N";
thinks.condition = "I";
wants.condition = "N";


colorful.condition = "N";
large.condition = "I";
applepie.condition = "N";
bigcities.condition = "I";
planning.condition = "N";
sounds.condition = "I";


/*Array of stimuli*/
var practiceStimuli1 = [colorful, large, applepie, bigcities, like, planning, beach, boatride];

//array that has been shuffled
var practiceStimuli = [bigcities, cake, like, childrenF, applepie, boatride, colorful, beach, large, clothes, planning, boyfriend];
var answerArrayPractice = ["B", "A", "A", "A","A", "B", "B", "B", "B", "B", "B", "A", "A", "B", "A", "A"];
var test1Stimuli = [dinner,spanish,wants,patient,scarf,appears,concert,glassplate,children,favoriteuncle,party,sounds,lost,wallets,
fishing,intends,youngerbrother,seemed,newcamera,newyork,zoo,food,wedding,looks,rich,skirt,intelligent,hoping,
oldman,read,house,greenolives,hair,mall,drowning,redshirt,joke,friendly,library,goldbracelet,haircut,says,money,
hand,postoffice,smells,flowers,movie,home,thinks,winterjacket,leak,popular,ticket,goal,ambitious,mountain,uglydog,homework,
swimmer];
var answerArrayT1 = ["B", "A", "A", "B", "A", "A", "A", "B", "B", "A", "B", "B", "B", "B", "A", "A", "A", "B", "B", "A", "B", "A", "A", "B", "A", "A", "B", "B", "A", "A", "A", "B", "A", "A", "A", "A", "B", "B", "B", "A", "B", "A", "B", "B", "A", "A", "A", "B", "A", "B", "B", "B", "A", "A", "B", "A", "B", "B", "A", "A"];
var answerArrayT2 = ["B", "A", "B", "A", "A", "B", "B", "A", "B", "A", "A", "B", "A", "A", "A", "A", "A", "B", "B", "B", "A", "B", "B", "A", "A", "A", "B", "B", "A", "A", "A", "B", "A", "B", "B", "B", "B", "A", "B", "A", "A", "A", "B", "B", "A", "B", "A", "A", "A", "B", "B", "A", "A", "A", "B", "B", "B", "A", "B", "B"];
var test2Stimuli = [bluepants,funny, match,cheerfulboy, house2, successful, says2, grandparents, looks2, redpeppers, circus, game, accident, started, photographer, player, has, leatherchair, vacation, largespoons, books, towels,brave, party2, jail, left, opera, pierced, movies2, exam,trying, dancer, liar, eyes,warm,mother, fatman, beef, tonight, wants2, honest,view, freshtomatoes, team, wet, tallhat,handsome, store, sounds2, replaced, shoes, brokenbike, tree, car, likes, gardening, sent,library2, diamondring, bank ]


