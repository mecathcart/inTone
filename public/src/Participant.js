function Participant(age, gender, nativeLanguage, num){
	this.age = age;
	this.gender = gender;
	this.nativeLanguage = nativeLanguage;
	this.num = num;
};

var createParticipant = function(){
	var age = document.myForm.age.value;
	var gender =  $('input[@name="genderS"]:checked').val();
	//var gender =  document.myForm.gender[value];
	//var gender = document.getElementsByName('gender').value;
	//var gender = document.myForm.gender.value;
	console.log(gender);
};