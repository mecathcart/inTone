
var actionURL ="https://docs.google.com/spreadsheet/formResponse?formkey=1J_yitWO6IBparQvd1wgzZKpFULFjz_cl1D6d5aWqmvM&ampifq";
//https://docs.google.com/forms/d/1J_yitWO6IBparQvd1wgzZKpFULFjz_cl1D6d5aWqmvM/formResponse

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
    var participant = localStorage.getItem('participant');
        participant = JSON.parse(participant);


    if(!participant){
      return;
    }

    //console.log(participant.age);
    //  post_to_url(formurl,params,"post");
    var params = [];
    params["entry.0.single"] = participant.age;
    params["entry.1.single"] = participant.gender;
    params["entry.2.single"] = participant.nativeLanguage;
    params["entry.3.single"] = participant.num;
    
    localStorage.setItem("participant", participant);
    post_to_url(formurl,params,"post");
  }

