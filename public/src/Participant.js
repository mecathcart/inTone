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
var participants = [];

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

