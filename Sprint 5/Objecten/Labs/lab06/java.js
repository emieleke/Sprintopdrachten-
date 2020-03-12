var klantnaam = prompt("voer je eigen naam in");
var aantal = parseInt (prompt("aantal boeken te bestellen?"));
var titel = "Javascript!";
var prijs = 29.90;
var bedrag = aantal * prijs;
var btw = (bedrag / 100) * 6;
var totaal = bedrag + btw;
document.write(
"<br>Bedankt voor je bestelling: " + klantnaam + ".");
document.write("<br>Boektitel is: " + titel + ".");
document.write("<br>Aantal te bestellen: " + aantal + ".");
document.write("<br>Prijs per boek is: " + prijs.toFixed(2) + ".");
document.write("<br>Bedrag is: " + bedrag.toFixed(2) + ".");
document.write("<br>BTW is: " + btw.toFixed(2) + ".");
document.write("<br>Totaal inclusief BTW is: " + totaal.toFixed(2) + "."); 
