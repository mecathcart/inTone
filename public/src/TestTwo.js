var participant = localStorage.getObject('participant');
var participant = localStorage.getObject('participant');
participant.incorrectAudiosT2 = [];
//var correctAudiosT2 = participant.correctAudiosT2;
var incorrectAudiosT2 = participant.incorrectAudiosT2;



//console.log(participant);

var k = 50;
var T2correctAnswer = "";


var T2complimentCount = 0;
var T2stressCount = 0;
var T2verbCount = 0;


/*creates audio div*/
var intoneAudio = document.createElement("audio");
intoneAudio.id = "intone_stimuli";
audio_div.appendChild(intoneAudio);

var playAudioFile = function(divid) {
    document.getElementById(divid).play();
};

var testTwo = function(){ 
  $("#T2_next").hide();
  $("#T2_continuationA").show();
  $("#T2_continuationB").show();
  nextT2Stimuli(test2Stimuli);  
}

var T2feedback = function(){
    $("#T2_continuationA").hide();
    $("#T2_continuationB").hide();
    $("#T2__cross").hide();
    document.getElementById("T2_results").innerHTML ="Your score is " + eval(Math.round(participant.T2answersCorrect/participant.T2totalAnswer*100))+"%";
    $("#T2_results").show();
    $("#T2_next").show();
}


var T2_clickContA = function(){
  participant.T2totalAnswer++;

  if(answerArrayT2[k-1] == "A" && T2correctAnswer == test2Stimuli[k-1].continuationA){

    var answer= intoneAudio.src;
    answer = answer.replace("file://localhost/Users/mdotedot/Desktop/inTone/public/audio_stimuli", "");
    participant.correctAudiosT2.push(answer);
    console.log(participant.correctAudiosT2);

    if(test2Stimuli[k-1].category == "compliment"){
      participant.T2complimentCorrect++;
    }else if(test2Stimuli[k-1].category == "stressAdj"){
      participant.T2stressCorrect++;
    }else if(test2Stimuli[k-1].category == "verb"){
      participant.T2verbCorrect++
    }else if(test2Stimuli[k-1].hasOwnProperty('audio')){
      participant.T2fillerCorrect++;
    }
    participant.T2answersCorrect++;

  }else if(answerArrayT2[k-1] == "B" && T2correctAnswer == test2Stimuli[k-1].continuationB){

    answer= intoneAudio.src;
    answer = answer.replace("file://localhost/Users/mdotedot/Desktop/inTone/public/audio_stimuli", "");
    participant.correctAudiosT2.push(answer);

    if(test2Stimuli[k-1].category == "compliment"){
      participant.T2complimentCorrect++;
    }else if(test2Stimuli[k-1].category == "stressAdj"){
      participant.T2stressCorrect++;
    }else if(test2Stimuli[k-1].category == "verb"){
      participant.T2verbCorrect++
    }else if(test2Stimuli[k-1].hasOwnProperty('audio')){
      participant.T2fillerCorrect++;
    }
    participant.T2answersCorrect++;
  }else{

    answer= intoneAudio.src;
    answer = answer.replace("file://localhost/Users/mdotedot/Desktop/inTone/public/audio_stimuli", "");
    incorrectAudiosT2.push(answer);
  }

  if(participant.T2totalAnswer%6==0){
    T2feedback();
  }else{
    showCrossT2();
  }
}

var T2_clickContB = function(){

  participant.T2totalAnswer++;  
  if(answerArrayT2[k-1] == "B" && T2correctAnswer == test2Stimuli[k-1].continuationA){

    var answer= intoneAudio.src;
    answer = answer.replace("file://localhost/Users/mdotedot/Desktop/inTone/public/audio_stimuli", "");
    participant.correctAudiosT2.push(answer);

    if(test2Stimuli[k-1].category == "compliment"){
      participant.T2complimentCorrect++;
    }else if(test2Stimuli[k-1].category == "stressAdj"){
      participant.T2stressCorrect++;
    }else if(test2Stimuli[k-1].category == "verb"){
      participant.T2verbCorrect++
    }else if(test2Stimuli[k-1].hasOwnProperty('audio')){
      participant.T2fillerCorrect++;
    }
    participant.T2answersCorrect++;

  }else if(answerArrayT2[k-1] == "A" && T2correctAnswer == test2Stimuli[k-1].continuationB){

    answer= intoneAudio.src;
    answer = answer.replace("file://localhost/Users/mdotedot/Desktop/inTone/public/audio_stimuli", "");
    participant.correctAudiosT2.push(answer);

    if(test2Stimuli[k-1].category == "compliment"){
      participant.T2complimentCorrect++;
    }else if(test2Stimuli[k-1].category == "stressAdj"){
      participant.T2stressCorrect++;
    }else if(test2Stimuli[k-1].category == "verb"){
      participant.T2verbCorrect++
    }else if(test2Stimuli[k-1].hasOwnProperty('audio')){
      participant.T2fillerCorrect++;
    }
    participant.T2answersCorrect++;
  }else{
    answer= intoneAudio.src;
    answer = answer.replace("file://localhost/Users/mdotedot/Desktop/inTone/public/audio_stimuli", "");
    incorrectAudiosT2.push(answer);
  }

  if(participant.T2totalAnswer%6==0){
    T2feedback();
  }else{
    showCrossT2();
  } 
}

var showCrossT2 = function(){
   $("#T2_next").hide();
   $("#T2_results").hide();
   $("#T2_continuationA").hide();
   $("#T2_continuationB").hide();
   $("#T2_cross").show();
    window.setTimeout(nextT2Stimuli,500, test2Stimuli);

}


var nextT2Stimuli = function(sampleArray){
 

 /*Go through stimuli*/
if(k < sampleArray.length){ 

  var sample = sampleArray[k];  
  if(participant.num%4==1 || participant.num%4==2){
    console.log("Je suis version un");

    /* Plays audio stimuli*/  
    /*Filler*/
    if (sample.hasOwnProperty('audio') ) {
      intoneAudio.src = sample.audio;
      playAudioFile("intone_stimuli");
      T2correctAnswer = sample.continuationA;
  /*Compliment*/
    }else if(sample.category == 'compliment'){ 
      if(T2complimentCount%2 == 0){
        intoneAudio.src = sample.audioI;
        playAudioFile("intone_stimuli");
        T2correctAnswer = sample.continuationA;
      }else{
        intoneAudio.src = sample.audioN;
        playAudioFile("intone_stimuli");
        T2correctAnswer = sample.continuationB;
       }
      T2complimentCount++;

    /*Stress*/
    }else if(sample.category == 'stressAdj'){
      if(T2stressCount%2 ==0){
        intoneAudio.src = sample.audioI;
        playAudioFile("intone_stimuli");
        T2correctAnswer = sample.continuationA;
      }else{
        intoneAudio.src = sample.audioN;
        playAudioFile("intone_stimuli");
        T2correctAnswer = sample.continuationB;
        }
      T2stressCount++;

    /*Verb*/
    }else if(sample.category == 'verb'){
      if(T2verbCount%2 ==0){
        intoneAudio.src = sample.audioN;
        playAudioFile("intone_stimuli");
        T2correctAnswer = sample.continuationB;
      }else{
        intoneAudio.src = sample.audioI;
        playAudioFile("intone_stimuli");
        T2correctAnswer = sample.continuationA;
        }
      T2verbCount++
    
    }
    var continuationArray = [sample.continuationA, sample.continuationB];
    window.setTimeout(insertContinuationsT2,3000, continuationArray, k);

  }else{
        console.log("Je suis version deux");

    /* Plays audio stimuli*/  
  /*Filler*/
  if (sample.hasOwnProperty('audio') ) {
    intoneAudio.src = sample.audio;
    playAudioFile("intone_stimuli");
    T2correctAnswer = sample.continuationA;
  /*Compliment*/
  }else if(sample.category == 'compliment'){ 
    if(T2complimentCount%2 == 1){
      intoneAudio.src = sample.audioI;
      playAudioFile("intone_stimuli");
      T2correctAnswer = sample.continuationA;
    }else{
      intoneAudio.src = sample.audioN;
      playAudioFile("intone_stimuli");
      T2correctAnswer = sample.continuationB;
      }
    T2complimentCount++;

    /*Stress*/
  }else if(sample.category == 'stressAdj'){
    if(T2stressCount%2 ==1){
      intoneAudio.src = sample.audioI;
      playAudioFile("intone_stimuli");
      T2correctAnswer = sample.continuationA;
    }else{
      intoneAudio.src = sample.audioN;
      playAudioFile("intone_stimuli");
      T2correctAnswer = sample.continuationB;
      }
    T2stressCount++;

    /*Verb*/
  }else if(sample.category == 'verb'){
    if(T2verbCount%2 ==1){
      intoneAudio.src = sample.audioN;
      playAudioFile("intone_stimuli");
      T2correctAnswer = sample.continuationB;
    }else{
      intoneAudio.src = sample.audioI;
      playAudioFile("intone_stimuli");
      T2correctAnswer = sample.continuationA;
      }
    T2verbCount++
  
    }
    var continuationArray = [sample.continuationA, sample.continuationB];
    window.setTimeout(insertContinuationsT2,3000, continuationArray, k);

    }  
    /*Move on to next stimuli*/
    k++;
  /*Show results after last question*/  
  }else{
    $("#T2_continuationA").hide();
    $("#T2_continuationB").hide();
    $("#T2_cross").hide();
   // document.getElementById("T2_results").innerHTML ="Your score is " + participant.T2answersCorrect +"/" +participant.T2totalAnswer;
    if(participant.num%2 == 1){
      $("#test_1").show();
    }else{
      $(".end").show();
        localStorage.setObject('participant',participant);
      //submitForm(window.actionURL);
    }
  }
}

/*Insert continuations*/
var insertContinuationsT2 = function(array, counter){
    $("#T2_cross").hide();
    if(answerArrayT2[counter] == "A"){
      document.getElementById("T2_continuationA").innerHTML = array[0];
      document.getElementById("T2_continuationB").innerHTML = array[1]; 
    }else{
      document.getElementById("T2_continuationA").innerHTML = array[1];
      document.getElementById("T2_continuationB").innerHTML = array[0];   
    }
    $("#T2_continuationA").show();
    $("#T2_continuationB").show();
    
}

