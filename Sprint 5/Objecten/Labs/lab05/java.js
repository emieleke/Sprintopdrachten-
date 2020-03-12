einddatum = prompt("Wat is de einddatum JJJJ-MM-DD");
einddatum = new Date(einddatum)
var deadline = new Date(einddatum)
var dag = 86400000
var nu = Date.now()
var resterende = ((deadline - nu) / dag);
document.write("Deadline: " + deadline);
document.write("<br>Er zijn nog: " + resterende.toFixed(0) + " dagen te gaan!");