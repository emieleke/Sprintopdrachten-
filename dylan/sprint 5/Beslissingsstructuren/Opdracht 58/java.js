//Opdracht 58

var datum = new Date();
var vandaag = datum.getDay();
var uur = datum.getHours();

document.write("Het is vandaag:" + datum);
switch (vandaag){
    case 1:
        document.write("Maandag is mijn eerste stagedag");
        break;
    case 2:
        document.write("Dinsdag is mijn tweede stagedag");
        break;
    case 3:
        document.write("Woensdag is mijn derde stagedag");
        break;
    case 4:
        document.write("Donderdag is mijn werkdag");
        break;
    case 5:
        document.write("Vrijdag is mijn roostervrije dag");
        break;
}