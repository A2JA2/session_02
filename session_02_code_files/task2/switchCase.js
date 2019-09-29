function checkValue() {
  var text;
  var lang = document.getElementById("inputValue").value;

  switch(lang) {
    case "JavaScipt":
    text = "Yay!";
    break;
    case "HTML":
    text = "OK";
    break;
    case "CSS":
    text = "Right";
    break;

    //add case Here

    default:
    text = "You need to enter something!";
  }
  document.getElementById("displayText").innerHTML = text;
}
