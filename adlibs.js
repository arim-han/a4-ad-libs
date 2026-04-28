console.log("Made by Arim");


function playStory1() {
  var field01 = document.getElementById("field01").value;
  var field02 = document.getElementById("field02").value;
  var field03 = document.getElementById("field03").value;
  var field04 = document.getElementById("field04").value;
  var field05 = document.getElementById("field05").value;
  var field06 = document.getElementById("field06").value;
  var field07 = document.getElementById("field07").value;
  var field08 = document.getElementById("field08").value;
  var field09 = document.getElementById("field09").value;
  var field10 = document.getElementById("field10").value;
  var field11 = document.getElementById("field11").value;
  var field12 = document.getElementById("field12").value;

  var story1 = [
  " One " + field01 + " day, I took my " + field02 + " line for a " + field03 + " around " + field04 + ".",
  " It was " + field05 + " , and " + field06 + " were " + field07 + " everywhere. ",
  field08 + " of the way through, we were met with a " + field09 + " of " + field10 + ".", 
  " Together, we traveled from " + field11 + " to " + field12 + ". " ];
  localStorage.setItem("myStory", JSON.stringify(story1));
window.location.href = "results01.html";
}


function playStory2() {
  var field01 = document.getElementById("field01").value;
  var field02 = document.getElementById("field02").value;
  var field03 = document.getElementById("field03").value;
  var field04 = document.getElementById("field04").value;
  var field05 = document.getElementById("field05").value;
  var field06 = document.getElementById("field06").value;
  var field07 = document.getElementById("field07").value;
  var field08 = document.getElementById("field08").value;
  var field09 = document.getElementById("field09").value;
  var story2 = [
    " In a " + field01 + " color, " ,
    " draw a series of " + field02 + " at the " + field03 + " of the paper. ",
    field03 + " it, a/an " + field04 + " drawn shape with " + field05 + " sides.",
    field06 + " your paper.",
    " Change to a different writing instrument, ",
    "At a blank part of the paper, " + field07 + " one element on the page and " + field08 + " to another. ",
];

localStorage.setItem("myStory", JSON.stringify(story2));
window.location.href = "results02.html";
}

function playStory3() {
  var field01 = document.getElementById("field01").value;
  var field02 = document.getElementById("field02").value;
  var field03 = document.getElementById("field03").value;
  var field04 = document.getElementById("field04").value;
  var field05 = document.getElementById("field05").value;
  var field06 = document.getElementById("field06").value;
  var story3 = [
    " Pick up a " + field01 + ".",
    " Write or draw 'A4' using only " + field02 + " .",
    " Turn the page " + field03 + " degrees.", 
    " In an analogous color, write or draw 'AD' using a single " + field04 + " " + field05 + ".",
    " Once more, turn the page " + field06 + " degrees.", 
    " In a third analogous color, write or draw 'LIBS', using the writing instrument the wrong way.",
];

console.log(field05, field06, story3);
localStorage.setItem("myStory", JSON.stringify(story3));
window.location.href = "results03.html";
}



// function playMadLibs() {
  //going to grab user entry and store it in variables in JavaScript
  //document.getElementById grabs HTML ids
  //JavaScript is insanely case sensitive