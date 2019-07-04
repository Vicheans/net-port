 //PANEL NEWS COMPOSE

 //TEXT EDITOR FUNCTION
 tinymce.init({
    selector: '#mytextarea',
    plugins: [
  'advlist autolink link lists charmap print preview hr anchor pagebreak spellchecker',
  'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime nonbreaking',
  'save table contextmenu directionality emoticons template paste textcolor'
],
    toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link  | preview fullpage | forecolor backcolor emoticons',
    element_format : String
  });


//PICTURE LOADING ACTION 
 var loadFile = function(event) {
    var output = document.getElementById('output');
    output.src = URL.createObjectURL(event.target.files[0]);
  };


  //IMAGE VALIDATION 
   function validate()
    {
      var extensions = new Array("jpg","jpeg","png");
      var img_file = document.form.img_file.value;
      var img_length = document.form.img_file.value.length;
      var pos = img_file.lastIndexOf('.') + 1;
      var ext = img_file.substring(pos, img_length);
      var final_ext = ext.toLowerCase();
      for (i = 0; i < extensions.length; i++)
    {
        if(extensions[i] == final_ext)
        {
        return true;
        }
    }
      alert("Upload An Image File With One Of The Following Extensions "+ extensions.join(', ') +".");
        return false;
    }


  // setTimeout(function () {
  //    // after 2 seconds
  //    window.location = "/panel";
  // }, 200000)



//UPDATE POST REAL TIME DISPLAY
function getVal() {
    var title = document.getElementById("title");
    document.getElementById("titleOut").innerHTML = title.value;

     var date = document.getElementById("date");
    document.getElementById("dateOut").innerHTML = date.value;

    var author = document.getElementById("author");
    document.getElementById("authorOut").innerHTML = author.value;

    var department = document.getElementById("department");
    document.getElementById("departmentOut").innerHTML = department.value;

}