/*
 * View form 
 * new: https://docs.google.com/forms/d/1J_yitWO6IBparQvd1wgzZKpFULFjz_cl1D6d5aWqmvM/viewform
 * old: https://docs.google.com/spreadsheet/viewform?formkey=dHAzVW80RXhNVU1CNFo0TGZJNzJZTXc6MQ#gid=0
 */

/*
 * Submit form
 *  new actionURL = https://docs.google.com/forms/d/1J_yitWO6IBparQvd1wgzZKpFULFjz_cl1D6d5aWqmvM/formResponse
 *  old actionURL = https://docs.google.com/spreadsheet/formResponse?formkey=dHAzVW80RXhNVU1CNFo0TGZJNzJZTXc6MQ&ampifq in code
 *  old actionURL = https://docs.google.com/spreadsheet/formResponse?formkey=dHAzVW80RXhNVU1CNFo0TGZJNzJZTXc6MQ&ifq in form
 */

/*
 * Thank you screen
 * new  https://docs.google.com/forms/d/1J_yitWO6IBparQvd1wgzZKpFULFjz_cl1D6d5aWqmvM/formResponse
 * old  https://docs.google.com/spreadsheet/formResponse?formkey=dHAzVW80RXhNVU1CNFo0TGZJNzJZTXc6MQ&ifq
 */

var actionURL ="https://docs.google.com/forms/d/1J_yitWO6IBparQvd1wgzZKpFULFjz_cl1D6d5aWqmvM/formResponse";
//https://docs.google.com/forms/d/1J_yitWO6IBparQvd1wgzZKpFULFjz_cl1D6d5aWqmvM/formResponse

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
      form.submit();
      document.body.removeChild(form);

  }

  var submitForm = function(formurl){
    if (!formurl){
      formurl = actionURL;
    }
    var participant = localStorage.getItem('participant');
        participant = JSON.parse(participant);


    if(!participant){
      return;
    }

    //console.log(participant.age);
    //  post_to_url(formurl,params,"post");
    
    /* 
     * I looked at the network tab and saw this as the post data, it is different than the old schema
     * entry.1437479718=f&
     * entry.813960129=2&
     * entry.1323392911=testingformsubmitinformtofindparams&
     * entry.1553991148=2&
     * draftResponse=%5B%5D%0D%0A&
     * pageHistory=0
     * 
     */





    var params = [];
    params["entry.1437479718"] = participant.age;
    params["entry.813960129"] = participant.gender;
    params["entry.1323392911"] = participant.nativeLanguage;
    params["entry.1553991148"] = participant.num;
    params["entry.390775856"] = participant.T1Version;
    params["entry.1699502844"] = participant.T2Version;
    params["entry.2014552474"] = paticipant.correctAnswerST;
    params["entry.1770553051"] = participant.answersCorrectPractice;
    params["entry.179386326"] = participant.T1answersCorrect;
    params["entry.477017213"] = participant.T2answersCorrect;
    params["entry.1770553051"] = participant.correctAudiosT1;
    params["entry.215074257"] = participant.incorrectAudiosT1;
    params["entry.1249585780"] = participant.correctAudiosT2;
    params["entry.2873922"] = participant.incorrectAudiosT2;

    params["entry.1252292097"] = participant.T1complimentCorrect;
    params["entry.1836167318"] = participant.T1stressCorrect;
    params["entry.872883465"] = participant.T1verbCorrect;
    params["entry.1628336029"] = participant.T1fillerCorrect;
    params["entry.310029863"] = participant.T2complimentCorrect;
    params["entry.1623538295"] = participant.T2stressCorrect;
    params["entry.2021608344"] = participant.T2verbCorrect;
    params["entry.1770363601"] = participant.T2fillerCorrect;

  //  params[""] = participant. ;








    params["draftResponse"] = "%5B%5D%0D%0A";
    params["pageHistory"] = "0";
    
    localStorage.setItem("participant", participant);
    post_to_url(formurl,params,"post");
  }

