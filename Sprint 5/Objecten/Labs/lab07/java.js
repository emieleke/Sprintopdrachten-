var klantnaam = prompt ("voer uw eigen naam in");
var woonplaats = prompt("Wat is uw woonplaats?"); 
var postcode = prompt("Wat is uw postcode?"); 
var aantal = parseInt(prompt("aantal boeken te bestellen?")) 
var titel = "JavaScript";
var prijs = 29.90;
var bedrag = aantal * prijs;
var btw = bedrag * 0.06; 
var bezorgkosten = 15;
var totaal = btw + bedrag + bezorgkosten;
document.write('<br>lab 06');
document.write('<br>factuur');
var factuurdatum = new Date();
document.write("<br>factuurdatum:" + factuurdatum);
var betaaldatum = new Date();
betaaldatum.setDate(factuurdatum.getDate()+5);
document.write("<br>betaaldatum: " + betaaldatum);
document.write("<br>Bedankt voor je bestelling: " + klantnaam);
document.write("<br>boektitel is: " + titel);
document.write("<br>aantal te bestellen is: " + aantal);
document.write("<br>prijs per boek is: " + prijs.toFixed(2));
document.write("<br>bedrag is: " + bedrag);

    if (woonplaats == 'Amsterdam' && postcode >= '1000AA' && postcode <= '2000BB') 
        {
        alert ('Er zijn geen bezorg kosten') 
        bezorgkosten = 0
        } 
        else 
        {
        alert ('Bezorg kosten zijn €15.') 
        bezorgkosten = 15
        }
document.write("<br>bezorgkosten: " + bezorgkosten);
document.write("<br>btw is: " + btw ); 
document.write("<br>totaal is:" + totaal);
