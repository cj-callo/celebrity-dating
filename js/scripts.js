$(document).ready(function(){
  $("form#celebrity").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();

    if (gender === 'female' && age >= 30) {
      match += "Brad Pitt";
    }

    $("#person").empty().append(match);
    $("#match").show();

    event.preventDefault();
  });
});
