
var major = document.getElementById("major");
var minor1 = document.getElementById("minor1");
var minor2 = document.getElementById("minor2");


major.onmouseover = function(){
  major.textContent = "Click here for my Java stuff!";


}

major.onmouseout = function(){
  major.textContent= "Major: Computer Science";


}

minor1.onmouseover = function(){
  minor1.textContent = "Click here for my websites!";


}

minor1.onmouseout = function(){
  minor1.textContent= "Minor #1: Web Design";


}

minor2.onmouseover = function(){
  minor2.textContent = "nothing to see here.";


}

minor2.onmouseout = function(){
  minor2.textContent= "Minor #2: Linguistics";


}
