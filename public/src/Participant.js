function Participant(){
	this.age = 0;
 	this.gender = "";
 	this.nativeLanguage = "";
 	this.num = 0;
 	this.getAge = function() {
        return this.age;
    };

 	/*Stress Test*/
 	this.totalAnswerST = 0;
 	this.correctAnswerST = 0;

	/*Practice Variables*/
	this.answersCorrectPractice = 0;
	this.totalAnswerPractice = 0;

	this.complimentCorrectPractice = 0;
	this.stressCorrectPractice = 0;
	this.verbCorrectPractice = 0;
	this.fillerCorrectPractice = 0;

	/*Test1 Variables*/
	this.T1answersCorrect = 0;
	this.T1totalAnswer = 0;

	this.T1complimentCorrect = 0;
	this.T1stressCorrect = 0;
	this.T1verbCorrect = 0;
	this.T1fillerCorrect = 0;

	/*Test2 Variables*/
	this.T2answersCorrect = 0;
	this.T2totalAnswer = 0;

	this.T2complimentCorrect = 0;
	this.T2stressCorrect = 0;
	this.T2verbCorrect = 0;
	this.T2fillerCorrect = 0;
 	 
}

Storage.prototype.setObject = function(key, value) {
    this.setItem(key, JSON.stringify(value));
}
 
Storage.prototype.getObject = function(key) {
    return JSON.parse(this.getItem(key));
}

var participant =  new Participant();

var participants = localStorage.getObject('participants')

//var participants = [];

var createParticipant = function() {
	participant.age = document.myForm.age.value;
 	participant.gender = $('input[@name="genderS"]:checked').val();
 	participant.nativeLanguage = document.myForm.nativeLanguage.value;
 	participants.push(participant);
 	participant.num = participants.length;
 	localStorage.setObject('participant',participant);
 	localStorage.setObject('participants', participants);
 	$("#beginExperiment").show();
 	console.log(localStorage.getObject('participants'));
 	console.log(localStorage.getObject('participant'));

};

var chooseTest = function(){
	if(participant.num%2 ==0){
		window.location.href = './../view/testOne.html';
	}else{
		window.location.href = './../view/testTwo.html';
	}
}





var actionURL ="https://docs.google.com/spreadsheet/ccc?key=0Ah7KsKvpIoTodGU5cmlELTFEaGdHMVNBVUNmcEdhV1E#gid=0";

	function post_to_url(path, params, method) {
  		method = method || "post"; // Set method to post by default, if not specified.

	    var form = document.createElement("form");
	    form.setAttribute("method", method);
	    form.setAttribute("action", path);
	    for(var key in params) {
	        if(params.hasOwnProperty(key)) {
	            var hiddenField = document.createElement("input");
	            hiddenField.setAttribute("type", "hidden");
	            hiddenField.setAttribute("name", key);
	            hiddenField.setAttribute("value", params[key]);
	            form.appendChild(hiddenField);
	         }
	    }
	    document.body.appendChild(form);
	    //alert(params.toString());
	    localStorage.removeItem("participant");
    	form.submit();
	}

	var submitForm = function(formurl){
		var participant = localStorage.getItem("participant");
 		if(!participant){
 			return;
 		}
 		participant = JSON.parse(participant);
		var params = [];
		params["entry.0.single"] = participant.age;
		params["entry.1.single"] = participant.gender;
		params["entry.2.single"] = participant.nativeLanguage;
		params["entry.3.single"] = participant.num;
		
		post_to_url(formurl,params,"post");
	}

submitForm(actionURL);
	
	