var array = ["ambitious", "children", "food", "friendly", "hair", "intelligent", "popular", "read", "rich", "swimmer",
"favoriteuncle", "glassplate", "goldbracelet", "greenolives", "newcamera", "oldman", "redshirt", "uglydog", "winterjacket", "youngerbrother",
"appears", "hoping", "intends", "looks", "says", "seemed", "smells", "sounds", "thinks", "wants",
"boyfriend", "cake", "childrenF", "clothes", "concert", "dinner", "drowning", "fishing", "flowers", "goal", "haircut", "hand", "home", "homework", "house",
"joke", "leak", "library", "lost", "mall", "money", "mountain", "movie", "newyork", "party", "patient", "postoffice", "scarf", "skirt", "spanish", "ticket", "wallets",
"wedding", "zoo"];


var test2Stimuli = ["brave"," movies2","view"," eyes"," successful","funny"," honest","handsome","warm"," dancer", 
"cheerfulboy"," fatman"," tallhat"," brokenbike"," diamondring"," freshtomatoes"," largespoons"," redpeppers","bluepants"," leatherchair",
"trying"," likes"," looks2"," started"," says"," left"," wants2"," sent"," sounds2"," has","library"," store"," vacation"," circus"," liar"," books"," car"," pierced"," match"," party2"," tree"," gardening"," grandparents"," jail",
"mother"," player"," photographer"," game"," towels"," bank"," house2"," replaced"," tonight"," opera"," team"," wet"," accident"," shoes"," exam"," beef"];

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
   return this;
};

fisherYates(array);

fisherYates(test2Stimuli);
console.log(test2Stimuli.toString());
//console.log(array.toString());

var answers = ["A", "B"];
fisherYates(answers);
console.log(answers.toString());
var answerArray = [];
var i = 0;
for(i= 0; i<60; i++){
	fisherYates(answers);
	answerArray[i] = answers[0];
};

console.log(answerArray);



