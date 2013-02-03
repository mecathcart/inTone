var partNum = 0;

function Participant(age, gender, nativeLanguage, num){
	this.age = age;
	this.gender = gender;
	this.nativeLanguage = nativeLanguage;
	this.num = num;
};

var createParticipant = function(){
	var age = document.myForm.age.value;
	var gender =  $('input[@name="genderS"]:checked').val();
	var nativeLanguage = document.myForm.nativeLanguage.value;
	var participant = new Participant(age, gender, nativeLanguage, partNum);
	partNum++;
};