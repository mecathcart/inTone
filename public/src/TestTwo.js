var k = 0;
var T2answersCorrect = 0;
var T2totalAnswer = 0;
var T2correctAnswer = "";

var T2complimentCount = 0;
var T2stressCount = 0;
var T2verbCount = 0;

var T2complimentCorrect = 0;
var T2stressCorrect = 0;
var T2verbCorrect = 0;
var T2fillerCorrect = 0;

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
    document.getElementById("T2_results").innerHTML ="Your score is " + T2answersCorrect +"/" +T2totalAnswer;
    $("#T2_results").show();
    $("#T2_next").show();
}


var T2_clickContA = function(){
  T2totalAnswer++;

  if(answerArrayT2[k-1] == "A" && T2correctAnswer == test2Stimuli[k-1].continuationA){
    if(test2Stimuli[k-1].category == "compliment"){
      T2complimentCorrect++;
    }else if(test2Stimuli[k-1].category == "stressAdj"){
      T2stressCorrect++;
    }else if(test2Stimuli[k-1].category == "verb"){
      T2verbCorrect++
    }else if(test2Stimuli[k-1].hasOwnProperty('audio')){
      T2fillerCorrect++;
    }
    T2answersCorrect++;

  }else if(answerArrayT2[k-1] == "B" && T2correctAnswer == test2Stimuli[k-1].continuationB){
    if(test2Stimuli[k-1].category == "compliment"){
      T2complimentCorrect++;
    }else if(test2Stimuli[k-1].category == "stressAdj"){
      T2stressCorrect++;
    }else if(test2Stimuli[k-1].category == "verb"){
      T2verbCorrect++
    }else if(test2Stimuli[k-1].hasOwnProperty('audio')){
      T2fillerCorrect++;
    }
    T2answersCorrect++;
  }

  if(T2totalAnswer%6==0){
    T2feedback();
  }else{
    nextT2Stimuli(test2Stimuli);
  }
}

var T2_clickContB = function(){

  T2totalAnswer++;  
  if(answerArrayT2[k-1] == "B" && T2correctAnswer == test2Stimuli[k-1].continuationA){
    if(test2Stimuli[k-1].category == "compliment"){
      T2complimentCorrect++;
    }else if(test2Stimuli[k-1].category == "stressAdj"){
      T2stressCorrect++;
    }else if(test2Stimuli[k-1].category == "verb"){
      T2verbCorrect++
    }else if(test2Stimuli[k-1].hasOwnProperty('audio')){
      T2fillerCorrect++;
    }
    T2answersCorrect++;

  }else if(answerArrayT2[k-1] == "A" && T2correctAnswer == test2Stimuli[k-1].continuationB){
    if(test2Stimuli[k-1].category == "compliment"){
      T2complimentCorrect++;
    }else if(test2Stimuli[k-1].category == "stressAdj"){
      T2stressCorrect++;
    }else if(test2Stimuli[k-1].category == "verb"){
      T2verbCorrect++
    }else if(test2Stimuli[k-1].hasOwnProperty('audio')){
      T2fillerCorrect++;
    }
    T2answersCorrect++;
  }

  if(T2totalAnswer%6==0){
    T2feedback();
  }else{
    nextT2Stimuli(test2Stimuli);
  } 
}

var nextT2Stimuli = function(sampleArray){
  $("#T2_next").hide();
  $("#T2_results").hide();
  $("#T2_continuationA").hide();
  $("#T2_continuationB").hide();
  $("#T2_cross").show();

 /*Go through stimuli*/
if(k < sampleArray.length){ 

  var sample = sampleArray[k];  

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

    /*Move on to next stimuli*/
    k++;
  /*Show results after last question*/  
  }else{
    $("#T2_continuationA").hide();
    $("#T2_continuationB").hide();
    $("#T2_cross").hide();
    document.getElementById("T2_results").innerHTML ="Your score is " + T2answersCorrect +"/" +T2totalAnswer;
    $("#test_2").show();
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

