var story = localStorage.getItem("myStory");
var lines = JSON.parse(localStorage.getItem("myStory"));
var currentLine = 0;

function showNextLine() {
  if (currentLine < lines.length) {
    var line = document.createElement("div");
    line.textContent = lines[currentLine];

    document.getElementById("showStory").appendChild(line);
    currentLine = currentLine + 1;
  }
}

