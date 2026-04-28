var story = localStorage.getItem("myStory");
var lines = JSON.parse(localStorage.getItem("myStory"));
var currentLine = 0;

function showNextLine() {
  if (currentLine < lines.length) {
    document.getElementById("showStory").style.visibility = "visible";
    document.getElementById("showStory").innerHTML += lines[currentLine] + "<br><br>";
    currentLine = currentLine + 1;
  }
}
