
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
      form.submit();
  }

  var submitForm = function(formurl){
    var participant = localStorage.getObject('participant');

    if(!participant){
      return;
    }
    //participant = JSON.parse(participant);
    var params = [];
    params["entry.0.single"] = participant.age;
    params["entry.1.single"] = participant.gender;
    params["entry.2.single"] = participant.nativeLanguage;
    params["entry.3.single"] = participant.num;
    
    post_to_url(formurl,params,"post");
  }

