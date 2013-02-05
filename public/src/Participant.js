function Participant(){
	this.age = 0;
 	this.gender = "";
 	this.nativeLanguage = "";
 	this.getAge = function() {
        return this.age;
    };

 	//Stress Test
 	this.totalAnswerST = 0;
 	this.correctAnswerST = 0;
 	 
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
 	participant.num = participants.indexOf(participant);
 	num = participant.num;
 	localStorage.setObject('participant',participant);
 	//localStorage.setItem('participant2', JSON.stringify(participant));
 	//localStorage.setItem('participants',JSON.stringify(participants));
 	$("#beginExperiment").show();
 	//return participant;
 	//console.log(participant.num);
 	//console.log(participant);
};

//var participants = localStorage.getItem('participants')

//console.log(localStorage.getItem('participant'))

