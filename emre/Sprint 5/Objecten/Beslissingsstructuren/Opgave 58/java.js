//Opgave 58

var datum = new Date();
var vandaag = datum.getDay();
var uur = datum.getHours();
document.write("Het is vandaag:" + datum);
switch (vandaag) {
    case 1:
        document.write("maandag is mijn eerste stagedag");
        break;

    case 2:
        document.write("dinsdag is mijn tweede stagedag");
        break;

    case 3:
        document.write("woensdag is mijn Javascriptdag");
        break;

    case 4:
        document.write("donderdag is mijn werkdag");
        break;

    case 5:
        document.write("vrijdag is mijn roostervrije dag");
        break;
}



    
