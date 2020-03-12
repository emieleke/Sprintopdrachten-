creditkaart = prompt("Heb je een creditkaart?", "nee");
ouderdan18  = prompt("Ben je ouder dan 18", "nee");

// als (het antwoord op creditkaart "ja" is) EN (als het antwoord op ouderdan18 "ja" is) dan...
if(creditkaart == "ja" && ouderdan18 == "ja")
{
    // ... krijgt de gebruiker een popup met de tekst dat hij 1000 euro mag lenen
    alert("Je mag 1000 euro lenen!");
    
}
// als (het antwoord op creditkaart "nee" is) EN (als het antwoord op ouderdan18 "ja" is) dan...
else if (creditkaart == "nee"  && ouderdan18 == "ja" )
{   // ... krijgt de gebruiker een popup met de tekst dat hij 500 euro mag lenen
    alert("Je mag 500 euro lenen!");
}else // anders ...
{
    // ... krijgt de gebruiker een popup met de tekst dat hij geen geld kan lenen
    alert("Je mag geen geld lenen");
}
