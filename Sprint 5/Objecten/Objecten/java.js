var laptops = [];

laptops ["macbook"] = {
    "model" : "air",
    "voorraad" : 2000,
    "prijs" : 1090
};

laptops["asusbook"] = {
    "model" : "wind",
    "voorraad" : 1000,
    "prijs": 890
};

laptops["dellbook"] = {
    "model" : "fire",
    "voorraad" : 987,
    "prijs" : 890
};

var mac = "macbook" in laptops;
var asus = "asusbook" in laptops;
var dell = "dellbook" in laptops;


document.write(
    "<br>De variable mac is: " + mac
);
document.write(
    "<br>Mac specificaties ------------" +
    "<br>Model: " + laptops["macbook"]["model"] + 
    "<br>Voorraad: " + laptops["macbook"]["voorraad"] +
    "<br>Prijs: " + laptops["macbook"]["prijs"]
);