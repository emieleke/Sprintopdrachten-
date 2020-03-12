var pallet = new Array("Groen", "Rood", "Blauw", "Geel", "Wit<br>");
document.write(pallet);
var nieuwekleur = prompt("Typ een nieuwe kleur in: ");
pallet = pallet + ", " + nieuwekleur;
document.write(pallet);
pallet.sort();
document.write(pallet);
