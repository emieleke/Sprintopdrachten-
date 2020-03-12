var nu = Date.now();
var eenDag = 86400000;
var morgen = new Date(nu + eenDag);
document.write(
    "De datum van morgen is: " + morgen
);
// datum met een date string
var schooljaar = new Date("2019-09-02");

// datum met datum en tijd string
var wintertijd = new Date("2019-10-27T03:00:00");

document.write(
    "<br>Begin wintertijd: " + wintertijd
);
var geboortedatum = new Date("2002-08-01");

document.write(
    "<br>Ik ben geboren op: " + geboortedatum
);

beginschooldag = new Date(2019, 8, 9, 8, 30);
document.write(
    "<br>Begin schooldag: " + beginschooldag
);

nu = Date.now();
document.write(
    "<br>Nu: " + nu
);
var dagen = ((nu - beginschooldag) / eenDag);
document.write(
    "<br>Aantal dagen sinds school begon: " + dagen.toFixed(0)
);

var maanden = new Array("januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december");
var weekdag = new Array("zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag");
