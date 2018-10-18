$(document).ready(function() {
  var height = parseInt(prompt("Height in inches:"));

  if (height >= 49 && height <= 77) {
    $('#tall').show();
  } else if (height > 77) {
    alert("calm down");
    $('#tooTall').show();
  } else {
    $('#short').show();
  }


});
